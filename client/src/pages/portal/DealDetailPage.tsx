import { useAuth } from "@/_core/hooks/useAuth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, Loader2, Shield } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "wouter";

const statusConfig: Record<string, { label: string; className: string }> = {
  new: { label: "New", className: "bg-blue-100 text-blue-800 border-blue-200" },
  active: { label: "Active", className: "bg-green-100 text-green-800 border-green-200" },
  under_contract: { label: "Under Contract", className: "bg-purple-100 text-purple-800 border-purple-200" },
  pending: { label: "Pending", className: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  closed: { label: "Closed", className: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  dead: { label: "Dead", className: "bg-red-100 text-red-800 border-red-200" },
};

function fmt(val: string | null | undefined, prefix = "$") {
  if (!val) return "N/A";
  const n = parseFloat(val);
  if (isNaN(n)) return "N/A";
  return `${prefix}${n.toLocaleString()}`;
}

function fmtPct(val: string | null | undefined) {
  if (!val) return "N/A";
  const n = parseFloat(val);
  if (isNaN(n)) return "N/A";
  return `${(n * 100).toFixed(2)}%`;
}

function parseDecimal(val: string | null | undefined, fallback = 0): number {
  if (!val) return fallback;
  const n = parseFloat(val);
  return isNaN(n) ? fallback : n;
}

function DetailRow({ label, value }: { label: string; value: React.ReactNode }) {
  if (value === null || value === undefined || value === "N/A" || value === "") return null;
  return (
    <div className="flex justify-between py-2 border-b border-border last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium text-foreground text-right max-w-[60%]">{value}</span>
    </div>
  );
}

export default function DealDetailPage() {
  const params = useParams<{ id: string }>();
  const dealId = parseInt(params.id || "0", 10);
  const { loading: authLoading, isAuthenticated } = useAuth();

  const { data, isLoading, error } = trpc.deals.byId.useQuery(
    { id: dealId },
    { enabled: isAuthenticated && !isNaN(dealId) && dealId > 0 }
  );

  const [arvOverride, setArvOverride] = useState("");

  if (authLoading || isLoading) {
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

  if (error || !data) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-2">Deal Not Found</h1>
        <p className="text-muted-foreground mb-4">This deal doesn't exist or you don't have access.</p>
        <Link href="/portal/deals"><Button variant="outline">Back to Deals</Button></Link>
      </div>
    );
  }

  const { deal, profile } = data;
  const status = statusConfig[deal.status] ?? { label: deal.status, className: "bg-gray-100 text-gray-800" };

  // Underwriting calculations
  const arvDefault = parseDecimal(deal.estHigh);
  const arv = arvOverride ? parseFloat(arvOverride) : arvDefault;
  const sqft = deal.sqft ?? 0;
  const rehabPerSqft = parseDecimal(profile?.rehabCostPerSqft);
  const rehabTotal = sqft * rehabPerSqft;
  const loanAmount = arv * 0.7;
  const interestRate = parseDecimal(profile?.interestRate);
  const loanPointsRate = parseDecimal(profile?.loanPoints);
  const holdingMonths = profile?.holdingMonths ?? 6;
  const monthlyInterest = loanAmount * (interestRate / 12);
  const holdingCosts = monthlyInterest * holdingMonths + loanAmount * loanPointsRate;
  const closingCostsPct = parseDecimal(profile?.closingCostsPct);
  const closingCosts = arv * closingCostsPct;
  const targetProfitMargin = parseDecimal(profile?.targetProfitMargin);
  const grossProfit = arv * targetProfitMargin;
  const maxPurchasePrice = arv - rehabTotal - holdingCosts - closingCosts - grossProfit;
  const listingPrice = parseDecimal(deal.listingPrice, NaN);
  const spread = isNaN(listingPrice) ? null : maxPurchasePrice - listingPrice;

  const currency = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="bg-muted/30 min-h-[60vh]">
      <div className="container py-8 max-w-5xl">
        <div className="flex items-start gap-4 mb-6">
          <Link href="/portal/deals">
            <Button variant="ghost" size="sm" className="mt-1">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back
            </Button>
          </Link>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-2xl font-extrabold text-foreground">{deal.address ?? "Address TBD"}</h1>
              <Badge className={`text-xs ${status.className}`}>{status.label}</Badge>
            </div>
            {deal.apn && <p className="text-sm text-muted-foreground">APN: {deal.apn}</p>}
          </div>
        </div>

        <Tabs defaultValue="numbers">
          <TabsList className="mb-4">
            <TabsTrigger value="numbers">Your Numbers</TabsTrigger>
            <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="numbers">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Underwriting Inputs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>ARV (After Repair Value)</Label>
                    <Input
                      type="number"
                      placeholder={arvDefault ? String(arvDefault) : "Enter ARV..."}
                      value={arvOverride}
                      onChange={e => setArvOverride(e.target.value)}
                      className="mt-1"
                    />
                    {deal.estLow && deal.estHigh && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Est range: {fmt(deal.estLow)} – {fmt(deal.estHigh)}
                      </p>
                    )}
                  </div>
                  {!profile && (
                    <div className="text-sm text-muted-foreground bg-muted rounded-lg p-3">
                      Set your underwriting assumptions in{" "}
                      <Link href="/portal/profile" className="text-primary underline">My Profile</Link>.
                    </div>
                  )}
                  {profile && (
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div className="flex justify-between"><span>Rehab/sqft:</span><span>{fmt(profile.rehabCostPerSqft)}</span></div>
                      <div className="flex justify-between"><span>Interest rate:</span><span>{fmtPct(profile.interestRate)}</span></div>
                      <div className="flex justify-between"><span>Loan points:</span><span>{fmtPct(profile.loanPoints)}</span></div>
                      <div className="flex justify-between"><span>Holding months:</span><span>{profile.holdingMonths ?? "N/A"}</span></div>
                      <div className="flex justify-between"><span>Closing costs:</span><span>{fmtPct(profile.closingCostsPct)}</span></div>
                      <div className="flex justify-between"><span>Target margin:</span><span>{fmtPct(profile.targetProfitMargin)}</span></div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Max Bid Calculator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between py-1.5 border-b border-border">
                    <span className="text-muted-foreground">ARV</span>
                    <span>{currency(arv)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border">
                    <span className="text-muted-foreground">− Rehab ({sqft.toLocaleString()} sqft × {currency(rehabPerSqft)}/sqft)</span>
                    <span className="text-red-600">−{currency(rehabTotal)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border">
                    <span className="text-muted-foreground">− Holding Costs ({holdingMonths}mo)</span>
                    <span className="text-red-600">−{currency(holdingCosts)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border">
                    <span className="text-muted-foreground">− Closing Costs ({fmtPct(profile?.closingCostsPct)})</span>
                    <span className="text-red-600">−{currency(closingCosts)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border">
                    <span className="text-muted-foreground">− Gross Profit ({fmtPct(profile?.targetProfitMargin)})</span>
                    <span className="text-red-600">−{currency(grossProfit)}</span>
                  </div>
                  <div className="flex justify-between py-2 font-bold text-base border-t-2 border-border mt-2">
                    <span>Max Purchase Price</span>
                    <span>{currency(maxPurchasePrice)}</span>
                  </div>
                  {spread != null && (
                    <div className={`flex justify-between py-2 rounded-lg px-3 font-semibold text-sm mt-2 ${spread >= 0 ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                      <span>Spread vs Asking ({fmt(deal.listingPrice)})</span>
                      <span>{spread >= 0 ? "+" : ""}{currency(spread)}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analysis">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deal.flipAnalysis && (
                <Card>
                  <CardHeader><CardTitle className="text-base">Flip Analysis</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">{deal.flipAnalysis}</p>
                  </CardContent>
                </Card>
              )}
              {deal.buildAnalysis && (
                <Card>
                  <CardHeader><CardTitle className="text-base">Build Analysis</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">{deal.buildAnalysis}</p>
                  </CardContent>
                </Card>
              )}
              {deal.aiCompAnalysis && (
                <Card className="md:col-span-2">
                  <CardHeader><CardTitle className="text-base">AI Comp Analysis</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">{deal.aiCompAnalysis}</p>
                  </CardContent>
                </Card>
              )}
              {!deal.flipAnalysis && !deal.buildAnalysis && !deal.aiCompAnalysis && (
                <div className="md:col-span-2 text-center py-12 text-muted-foreground">
                  No analysis available yet.
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader><CardTitle className="text-base">Property Info</CardTitle></CardHeader>
                <CardContent>
                  <DetailRow label="Address" value={deal.address} />
                  <DetailRow label="APN" value={deal.apn} />
                  <DetailRow label="Property Type" value={deal.propType} />
                  <DetailRow label="Beds" value={deal.beds?.toString()} />
                  <DetailRow label="Baths" value={deal.baths != null ? String(parseFloat(deal.baths)) : undefined} />
                  <DetailRow label="Sqft" value={deal.sqft?.toLocaleString()} />
                  <DetailRow label="Lot Sqft" value={deal.lotSf?.toLocaleString()} />
                  <DetailRow label="Lot Acres" value={deal.lotAcres != null ? parseFloat(deal.lotAcres).toFixed(3) : undefined} />
                  <DetailRow label="Year Built" value={deal.yearBuilt?.toString()} />
                  <DetailRow label="HOA/mo" value={fmt(deal.hoa)} />
                  <DetailRow label="Days on Market" value={deal.daysOnMkt?.toString()} />
                  <DetailRow label="Vacancy" value={deal.vacancy} />
                  <DetailRow label="Access" value={deal.access} />
                  <DetailRow label="Elementary School" value={deal.elemSchool} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle className="text-base">Pricing & Deal Terms</CardTitle></CardHeader>
                <CardContent>
                  <DetailRow label="Listing Price" value={fmt(deal.listingPrice)} />
                  <DetailRow label="Redfin Est" value={fmt(deal.redfinEst)} />
                  <DetailRow label="Est Low" value={fmt(deal.estLow)} />
                  <DetailRow label="Est High" value={fmt(deal.estHigh)} />
                  <DetailRow label="Price/sqft" value={fmt(deal.pricePerSqft)} />
                  <DetailRow label="Sold Price" value={fmt(deal.soldPrice)} />
                  <DetailRow label="Sold Date" value={deal.soldDate} />
                  <DetailRow label="EMD" value={fmt(deal.emd)} />
                  <DetailRow label="COE Date" value={deal.coeDate} />
                  <DetailRow label="Title Co" value={deal.titleCo} />
                  <DetailRow label="Source" value={deal.sourceType} />
                </CardContent>
              </Card>

              {(deal.flipUrl || deal.buildUrl || deal.schoolUrl || deal.photosUrl) && (
                <Card className="md:col-span-2">
                  <CardHeader><CardTitle className="text-base">Links</CardTitle></CardHeader>
                  <CardContent className="flex flex-wrap gap-3">
                    {deal.flipUrl && <a href={deal.flipUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline">Flip Comps</a>}
                    {deal.buildUrl && <a href={deal.buildUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline">Build Comps</a>}
                    {deal.schoolUrl && <a href={deal.schoolUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline">School Info</a>}
                    {deal.photosUrl && <a href={deal.photosUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline">Photos</a>}
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <Card className="max-w-md">
              <CardHeader><CardTitle className="text-base">Contact Information</CardTitle></CardHeader>
              <CardContent>
                <DetailRow label="Name" value={deal.contactName} />
                <DetailRow label="Email" value={deal.contactEmail ? <a href={`mailto:${deal.contactEmail}`} className="text-primary underline">{deal.contactEmail}</a> : undefined} />
                <DetailRow label="Phone" value={deal.contactPhone ? <a href={`tel:${deal.contactPhone}`} className="text-primary underline">{deal.contactPhone}</a> : undefined} />
                {!deal.contactName && !deal.contactEmail && !deal.contactPhone && (
                  <p className="text-sm text-muted-foreground">No contact info available.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
