import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { Loader2, Shield, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

interface Investor {
  id: number;
  name: string | null;
  email: string | null;
}

function InvestorSheet({
  investor,
  open,
  onClose,
}: {
  investor: Investor;
  open: boolean;
  onClose: () => void;
}) {
  const [grantedIds, setGrantedIds] = useState<Set<number>>(new Set());
  const [initialized, setInitialized] = useState(false);

  const { data: allDeals, isLoading: dealsLoading } = trpc.deals.list.useQuery(
    { page: 1 },
    { enabled: open }
  );
  const { data: accessList, isLoading: accessLoading } = trpc.deals.getUserAccessList.useQuery(
    { userId: investor.id },
    { enabled: open }
  );

  useEffect(() => {
    if (accessList && !initialized) {
      setGrantedIds(new Set(accessList));
      setInitialized(true);
    }
  }, [accessList, initialized]);

  // Reset when sheet closes
  useEffect(() => {
    if (!open) setInitialized(false);
  }, [open]);

  const bulkSetAccess = trpc.deals.bulkSetAccess.useMutation({
    onSuccess: () => {
      toast.success("Access updated");
      onClose();
    },
    onError: (err) => toast.error(err.message || "Failed to update access"),
  });

  const isLoading = dealsLoading || accessLoading;
  const deals = allDeals?.deals ?? [];

  const toggle = (dealId: number) => {
    setGrantedIds(prev => {
      const next = new Set(prev);
      if (next.has(dealId)) next.delete(dealId);
      else next.add(dealId);
      return next;
    });
  };

  const grantAll = () => setGrantedIds(new Set(deals.map(d => d.id)));
  const revokeAll = () => setGrantedIds(new Set());

  const save = () => {
    bulkSetAccess.mutate({ userId: investor.id, dealIds: Array.from(grantedIds) });
  };

  return (
    <Sheet open={open} onOpenChange={v => { if (!v) onClose(); }}>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle>
            Deal Access — {investor.name ?? investor.email ?? `User #${investor.id}`}
          </SheetTitle>
        </SheetHeader>

        <div className="flex gap-2 px-4 pb-2">
          <Button size="sm" variant="outline" onClick={grantAll} disabled={isLoading}>Grant All</Button>
          <Button size="sm" variant="outline" onClick={revokeAll} disabled={isLoading}>Revoke All</Button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 space-y-2">
          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            </div>
          ) : deals.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4">No deals in the pipeline yet.</p>
          ) : (
            deals.map(deal => (
              <div
                key={deal.id}
                className="flex items-center justify-between py-2 border-b border-border last:border-0"
              >
                <div className="flex-1 min-w-0 mr-3">
                  <p className="text-sm font-medium text-foreground truncate">
                    {deal.address ?? `Deal #${deal.id}`}
                  </p>
                  {deal.listingPrice && (
                    <p className="text-xs text-muted-foreground">
                      ${parseFloat(deal.listingPrice).toLocaleString()}
                    </p>
                  )}
                </div>
                <Switch
                  checked={grantedIds.has(deal.id)}
                  onCheckedChange={() => toggle(deal.id)}
                />
              </div>
            ))
          )}
        </div>

        <SheetFooter className="px-4 pb-4 pt-2">
          <Button onClick={save} disabled={bulkSetAccess.isPending || isLoading} className="w-full">
            {bulkSetAccess.isPending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
            Save Access
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default function AdminPage() {
  const { user, loading: authLoading, isAuthenticated } = useAuth();
  const [selectedInvestor, setSelectedInvestor] = useState<Investor | null>(null);

  const { data: investors, isLoading } = trpc.deals.listInvestors.useQuery(undefined, {
    enabled: isAuthenticated && user?.role === "admin",
  });

  if (authLoading) {
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

  if (user?.role !== "admin") {
    return (
      <div className="container py-20 text-center">
        <Shield className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
        <p className="text-muted-foreground">Admin access required.</p>
      </div>
    );
  }

  return (
    <div className="bg-muted/30 min-h-[60vh]">
      <div className="container py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-foreground">Investor Access</h1>
            <p className="text-muted-foreground">Manage which deals each investor can see.</p>
          </div>
          <Link href="/portal/deals">
            <Button variant="outline" size="sm">Back to Deals</Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
          </div>
        ) : !investors?.length ? (
          <div className="text-center py-12 bg-card rounded-xl border border-border">
            <Users className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-muted-foreground">No investors yet. Users who sign up will appear here.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {investors.map(investor => (
              <div
                key={investor.id}
                className="flex items-center justify-between bg-card rounded-xl border border-border px-5 py-4 hover:shadow-sm transition-shadow"
              >
                <div>
                  <p className="font-semibold text-foreground">{investor.name ?? "Unnamed User"}</p>
                  <p className="text-sm text-muted-foreground">{investor.email ?? `User #${investor.id}`}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSelectedInvestor(investor)}
                >
                  Manage Access
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedInvestor && (
        <InvestorSheet
          investor={selectedInvestor}
          open={!!selectedInvestor}
          onClose={() => setSelectedInvestor(null)}
        />
      )}
    </div>
  );
}
