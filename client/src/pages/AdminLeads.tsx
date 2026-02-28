import { SignInButton } from "@clerk/clerk-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { Loader2, Shield, Phone, Mail, MapPin, Calendar, Clock } from "lucide-react";
import { toast } from "sonner";

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  qualified: "bg-green-100 text-green-800",
  offer_sent: "bg-purple-100 text-purple-800",
  closed: "bg-emerald-100 text-emerald-800",
  lost: "bg-red-100 text-red-800",
};

const statusLabels: Record<string, string> = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  offer_sent: "Offer Sent",
  closed: "Closed",
  lost: "Lost",
};

export default function AdminLeads() {
  const { user, loading: authLoading, isAuthenticated } = useAuth();
  const { data: leads, isLoading, refetch } = trpc.leads.list.useQuery(undefined, {
    enabled: isAuthenticated && user?.role === "admin",
  });

  const updateStatus = trpc.leads.updateStatus.useMutation({
    onSuccess: () => {
      toast.success("Lead status updated");
      refetch();
    },
    onError: (err) => {
      toast.error(err.message || "Failed to update status");
    },
  });

  if (authLoading) {
    return (
      <div className="container py-20 text-center">
        <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
        <p className="text-muted-foreground mt-4">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="container py-20 text-center">
        <Shield className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-foreground mb-2">Admin Access Required</h1>
        <p className="text-muted-foreground mb-6">Please log in to access the lead management dashboard.</p>
        <SignInButton mode="modal">
          <Button>Log In</Button>
        </SignInButton>
      </div>
    );
  }

  if (user?.role !== "admin") {
    return (
      <div className="container py-20 text-center">
        <Shield className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-foreground mb-2">Access Denied</h1>
        <p className="text-muted-foreground">You don't have permission to view this page.</p>
      </div>
    );
  }

  return (
    <div className="bg-muted/30 min-h-[60vh]">
      <div className="container py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-foreground">Lead Management</h1>
            <p className="text-muted-foreground">Track and manage incoming property leads.</p>
          </div>
          <div className="text-sm text-muted-foreground">
            {leads?.length || 0} total leads
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
          </div>
        ) : !leads?.length ? (
          <div className="text-center py-12 bg-card rounded-xl border border-border">
            <p className="text-muted-foreground">No leads yet. They'll appear here when someone submits the form.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {leads.map(lead => (
              <div key={lead.id} className="bg-card rounded-xl border border-border p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{lead.fullName}</h3>
                    <div className="flex flex-wrap gap-3 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> {lead.phone}</span>
                      {lead.email && <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {lead.email}</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[lead.status]}`}>
                      {statusLabels[lead.status]}
                    </span>
                    <Select
                      value={lead.status}
                      onValueChange={(v) => updateStatus.mutate({ id: lead.id, status: v as any })}
                    >
                      <SelectTrigger className="w-36 h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="contacted">Contacted</SelectItem>
                        <SelectItem value="qualified">Qualified</SelectItem>
                        <SelectItem value="offer_sent">Offer Sent</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                        <SelectItem value="lost">Lost</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1 text-foreground">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> {lead.propertyAddress}
                  </span>
                  {lead.referralSource && (
                    <span className="text-muted-foreground">Source: {lead.referralSource}</span>
                  )}
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" /> {new Date(lead.createdAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" /> {new Date(lead.createdAt).toLocaleTimeString()}
                  </span>
                </div>
                {lead.message && (
                  <p className="mt-3 text-sm text-muted-foreground bg-muted rounded-lg p-3 italic">"{lead.message}"</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
