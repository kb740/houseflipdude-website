import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { CheckCircle, Loader2 } from "lucide-react";

interface LeadCaptureFormProps {
  variant?: "hero" | "sidebar" | "page";
  className?: string;
}

export default function LeadCaptureForm({ variant = "hero", className = "" }: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    propertyAddress: "",
    referralSource: "",
    message: "",
  });

  const mutation = trpc.leads.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Your property info has been submitted! We'll be in touch within 24 hours.");
    },
    onError: (err) => {
      toast.error(err.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.propertyAddress) {
      toast.error("Please fill in your name, phone, and property address.");
      return;
    }
    mutation.mutate(form);
  };

  if (submitted) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">You're In!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Kelly from HouseFlipDude will call you within 24 hours to schedule a quick visit. Your investors are already being lined up.
        </p>
      </div>
    );
  }

  const isCompact = variant === "sidebar";

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className={isCompact ? "space-y-3" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div className="space-y-1.5">
          <Label htmlFor="fullName" className="text-sm font-medium">Your Name *</Label>
          <Input
            id="fullName"
            placeholder="Kelly Beardslee"
            value={form.fullName}
            onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
            required
            className="bg-background"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(415) 555-1234"
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            required
            className="bg-background"
          />
        </div>
        <div className={isCompact ? "" : "sm:col-span-2"}>
          <div className="space-y-1.5">
            <Label htmlFor="propertyAddress" className="text-sm font-medium">Property Address *</Label>
            <Input
              id="propertyAddress"
              placeholder="123 Main St, San Francisco, CA 94102"
              value={form.propertyAddress}
              onChange={e => setForm(f => ({ ...f, propertyAddress: e.target.value }))}
              required
              className="bg-background"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-sm font-medium">Email (optional)</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="bg-background"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="referralSource" className="text-sm font-medium">How did you hear about us?</Label>
          <Select value={form.referralSource} onValueChange={v => setForm(f => ({ ...f, referralSource: v }))}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select one" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="google">Google Search</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="referral">Friend / Referral</SelectItem>
              <SelectItem value="agent">Real Estate Agent</SelectItem>
              <SelectItem value="mailer">Mailer / Postcard</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {!isCompact && (
        <div className="space-y-1.5">
          <Label htmlFor="message" className="text-sm font-medium">Tell us about your property (optional)</Label>
          <Textarea
            id="message"
            placeholder="Condition, timeline, any details that help us get you the best offers..."
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            rows={3}
            className="bg-background"
          />
        </div>
      )}

      <Button
        type="submit"
        disabled={mutation.isPending}
        className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base py-6 shadow-lg"
      >
        {mutation.isPending ? (
          <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Submitting...</>
        ) : (
          "Get My Competing Offers →"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        No fees. No obligation. No pressure. We'll call you within 24 hours.
      </p>
    </form>
  );
}
