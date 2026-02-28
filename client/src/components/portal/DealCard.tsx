import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { RouterOutputs } from "@/lib/trpc";

type Deal = RouterOutputs["deals"]["list"]["deals"][0];

const statusConfig: Record<string, { label: string; className: string }> = {
  new: { label: "New", className: "bg-blue-100 text-blue-800 border-blue-200" },
  active: { label: "Active", className: "bg-green-100 text-green-800 border-green-200" },
  under_contract: { label: "Under Contract", className: "bg-purple-100 text-purple-800 border-purple-200" },
  pending: { label: "Pending", className: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  closed: { label: "Closed", className: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  dead: { label: "Dead", className: "bg-red-100 text-red-800 border-red-200" },
};

function fmt(val: string | null | undefined, prefix = "$") {
  if (!val) return null;
  const n = parseFloat(val);
  if (isNaN(n)) return null;
  return `${prefix}${n.toLocaleString()}`;
}

interface DealCardProps {
  deal: Deal;
  onClick?: () => void;
}

export default function DealCard({ deal, onClick }: DealCardProps) {
  const status = statusConfig[deal.status] ?? { label: deal.status, className: "bg-gray-100 text-gray-800 border-gray-200" };
  const listingFmt = fmt(deal.listingPrice);
  const redfinFmt = fmt(deal.redfinEst);

  return (
    <Card
      className={`border border-border bg-card hover:shadow-md transition-shadow ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground text-sm leading-tight truncate">
              {deal.address ?? "Address TBD"}
            </h3>
            {deal.apn && (
              <p className="text-xs text-muted-foreground mt-0.5">APN: {deal.apn}</p>
            )}
          </div>
          <Badge className={`shrink-0 text-xs ${status.className}`}>
            {status.label}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-3">
        {/* Pricing row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {listingFmt && (
            <span className="font-semibold text-foreground">List: {listingFmt}</span>
          )}
          {redfinFmt && (
            <span className="text-muted-foreground">Redfin: {redfinFmt}</span>
          )}
          {deal.estLow && deal.estHigh && (
            <span className="text-muted-foreground">
              ARV: {fmt(deal.estLow)} – {fmt(deal.estHigh)}
            </span>
          )}
        </div>

        {/* Property details */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
          {deal.beds != null && <span>{deal.beds} bd</span>}
          {deal.baths != null && <span>{parseFloat(deal.baths)} ba</span>}
          {deal.sqft != null && <span>{deal.sqft.toLocaleString()} sqft</span>}
          {deal.yearBuilt != null && <span>Built {deal.yearBuilt}</span>}
          {deal.propType && <span>{deal.propType}</span>}
        </div>

        {/* Analysis pills */}
        <div className="flex flex-wrap gap-1.5">
          {deal.flipAnalysis && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200">Flip Analysis</span>
          )}
          {deal.buildAnalysis && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 border border-sky-200">Build Analysis</span>
          )}
          {deal.aiCompAnalysis && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 border border-violet-200">AI Comps</span>
          )}
          {deal.sourceType && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">{deal.sourceType}</span>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-[10px] text-muted-foreground pt-1 border-t border-border">
          <span>{new Date(deal.createdAt).toLocaleDateString()}</span>
          {deal.daysOnMkt != null && <span>{deal.daysOnMkt} DOM</span>}
        </div>
      </CardContent>
    </Card>
  );
}
