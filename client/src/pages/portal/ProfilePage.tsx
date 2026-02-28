import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { Loader2, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

interface FormState {
  rehabCostPerSqft: string;
  targetProfitMargin: string;
  interestRate: string;
  loanPoints: string;
  loanTermMonths: string;
  holdingMonths: string;
  closingCostsPct: string;
  minPrice: string;
  maxPrice: string;
}

const DEFAULT_FORM: FormState = {
  rehabCostPerSqft: "",
  targetProfitMargin: "",
  interestRate: "",
  loanPoints: "",
  loanTermMonths: "",
  holdingMonths: "",
  closingCostsPct: "",
  minPrice: "",
  maxPrice: "",
};

function pctDisplay(val: string | null | undefined) {
  if (!val) return "";
  const n = parseFloat(val);
  if (isNaN(n)) return "";
  return (n * 100).toFixed(4).replace(/\.?0+$/, "");
}

function dollarDisplay(val: string | null | undefined) {
  if (!val) return "";
  const n = parseFloat(val);
  if (isNaN(n)) return "";
  return n.toFixed(2).replace(/\.?0+$/, "");
}

function intDisplay(val: number | null | undefined) {
  if (val == null) return "";
  return String(val);
}

export default function ProfilePage() {
  const { loading: authLoading, isAuthenticated } = useAuth();
  const [form, setForm] = useState<FormState>(DEFAULT_FORM);

  const { data: profile, isLoading: profileLoading } = trpc.deals.getMyProfile.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const utils = trpc.useUtils();
  const upsert = trpc.deals.upsertMyProfile.useMutation({
    onSuccess: () => {
      toast.success("Profile saved");
      utils.deals.getMyProfile.invalidate();
    },
    onError: (err) => toast.error(err.message || "Failed to save profile"),
  });

  // Populate form from loaded profile
  useEffect(() => {
    if (profile) {
      setForm({
        rehabCostPerSqft: dollarDisplay(profile.rehabCostPerSqft),
        targetProfitMargin: pctDisplay(profile.targetProfitMargin),
        interestRate: pctDisplay(profile.interestRate),
        loanPoints: pctDisplay(profile.loanPoints),
        loanTermMonths: intDisplay(profile.loanTermMonths),
        holdingMonths: intDisplay(profile.holdingMonths),
        closingCostsPct: pctDisplay(profile.closingCostsPct),
        minPrice: dollarDisplay(profile.minPrice),
        maxPrice: dollarDisplay(profile.maxPrice),
      });
    }
  }, [profile]);

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const pctToDecimal = (v: string) => {
    const n = parseFloat(v);
    return isNaN(n) ? null : n / 100;
  };

  const toNum = (v: string) => {
    const n = parseFloat(v);
    return isNaN(n) ? null : n;
  };

  const toInt = (v: string) => {
    const n = parseInt(v, 10);
    return isNaN(n) ? null : n;
  };

  const handleSave = () => {
    upsert.mutate({
      rehabCostPerSqft: toNum(form.rehabCostPerSqft),
      targetProfitMargin: pctToDecimal(form.targetProfitMargin),
      interestRate: pctToDecimal(form.interestRate),
      loanPoints: pctToDecimal(form.loanPoints),
      loanTermMonths: toInt(form.loanTermMonths),
      holdingMonths: toInt(form.holdingMonths),
      closingCostsPct: pctToDecimal(form.closingCostsPct),
      minPrice: toNum(form.minPrice),
      maxPrice: toNum(form.maxPrice),
    });
  };

  if (authLoading || profileLoading) {
    return (
      <div className="container py-20 text-center">
        <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="container py-20 text-center">
        <Shield className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Login Required</h1>
        <a href={getLoginUrl()}><Button>Log In</Button></a>
      </div>
    );
  }

  return (
    <div className="bg-muted/30 min-h-[60vh]">
      <div className="container py-8 max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-foreground">Underwriting Profile</h1>
            <p className="text-muted-foreground">Your default assumptions used in the deal calculator.</p>
          </div>
          <Link href="/portal/deals">
            <Button variant="outline" size="sm">Back to Deals</Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Assumptions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label>Rehab Cost / sqft ($)</Label>
                <Input
                  type="number"
                  placeholder="e.g. 75"
                  value={form.rehabCostPerSqft}
                  onChange={set("rehabCostPerSqft")}
                />
              </div>

              <div className="space-y-1.5">
                <Label>Target Profit Margin (%)</Label>
                <Input
                  type="number"
                  placeholder="e.g. 20"
                  value={form.targetProfitMargin}
                  onChange={set("targetProfitMargin")}
                />
                <p className="text-xs text-muted-foreground">Stored as decimal (20% → 0.20)</p>
              </div>

              <div className="space-y-1.5">
                <Label>Interest Rate (%)</Label>
                <Input
                  type="number"
                  placeholder="e.g. 9.5"
                  value={form.interestRate}
                  onChange={set("interestRate")}
                />
              </div>

              <div className="space-y-1.5">
                <Label>Loan Points (%)</Label>
                <Input
                  type="number"
                  placeholder="e.g. 2"
                  value={form.loanPoints}
                  onChange={set("loanPoints")}
                />
              </div>

              <div className="space-y-1.5">
                <Label>Loan Term (months)</Label>
                <Input
                  type="number"
                  placeholder="e.g. 12"
                  value={form.loanTermMonths}
                  onChange={set("loanTermMonths")}
                />
              </div>

              <div className="space-y-1.5">
                <Label>Holding Period (months)</Label>
                <Input
                  type="number"
                  placeholder="e.g. 6"
                  value={form.holdingMonths}
                  onChange={set("holdingMonths")}
                />
              </div>

              <div className="space-y-1.5">
                <Label>Closing Costs (%)</Label>
                <Input
                  type="number"
                  placeholder="e.g. 3"
                  value={form.closingCostsPct}
                  onChange={set("closingCostsPct")}
                />
              </div>

              <div className="space-y-1.5">
                <Label>Min Purchase Price ($)</Label>
                <Input
                  type="number"
                  placeholder="e.g. 400000"
                  value={form.minPrice}
                  onChange={set("minPrice")}
                />
              </div>

              <div className="space-y-1.5">
                <Label>Max Purchase Price ($)</Label>
                <Input
                  type="number"
                  placeholder="e.g. 1500000"
                  value={form.maxPrice}
                  onChange={set("maxPrice")}
                />
              </div>
            </div>

            <div className="pt-2">
              <Button
                onClick={handleSave}
                disabled={upsert.isPending}
                className="w-full sm:w-auto"
              >
                {upsert.isPending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                Save Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
