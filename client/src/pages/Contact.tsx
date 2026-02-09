import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, CheckCircle, Loader2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const BITMOJI_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/93737141/TXSkgaQSgDEqEfqV.png";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const mutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Message sent! We'll get back to you soon.");
    },
    onError: (err) => {
      toast.error(err.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    mutation.mutate(form);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/30 py-16 lg:py-20">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Have questions about selling your house? Want to learn more about how competing investor offers work?
            Our team personally responds to every inquiry.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={BITMOJI_URL} alt="HouseFlipDude Team" className="h-14 w-14 rounded-full object-cover object-top border-2 border-primary/20" />
                <div>
                  <h2 className="text-xl font-bold text-foreground">HouseFlipDude</h2>
                  <p className="text-sm text-muted-foreground">Our Team</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href="tel:+14156862846" className="text-muted-foreground hover:text-primary transition-colors">(415) 686-2846</a>
                    <p className="text-xs text-muted-foreground mt-1">Call or text anytime</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:kb@houseflipdude.com" className="text-muted-foreground hover:text-primary transition-colors">kb@houseflipdude.com</a>
                    <p className="text-xs text-muted-foreground mt-1">We respond within 1 hour</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Service Area</h3>
                    <p className="text-muted-foreground">San Francisco Bay Area, Sacramento & Central Valley</p>
                    <p className="text-xs text-muted-foreground mt-1">All 14 Greater Bay Area counties + beyond</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Availability</h3>
                    <p className="text-muted-foreground">Monday – Saturday, 8am – 7pm</p>
                    <p className="text-xs text-muted-foreground mt-1">Flexible scheduling available</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent rounded-xl">
                <p className="text-sm text-accent-foreground font-medium">
                  Want to skip the contact form and go straight to getting offers?
                </p>
                <Link href="/#get-offer">
                  <Button size="sm" className="mt-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                    Get My Competing Offers <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-1">Send Us a Message</h2>
                <p className="text-muted-foreground mb-6">We'll get back to you within 1 hour.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Our team will get back to you within 1 hour.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="contactName">Your Name *</Label>
                        <Input
                          id="contactName"
                          placeholder="Your full name"
                          value={form.fullName}
                          onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="contactEmail">Email *</Label>
                        <Input
                          id="contactEmail"
                          type="email"
                          placeholder="you@email.com"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="contactPhone">Phone (optional)</Label>
                        <Input
                          id="contactPhone"
                          type="tel"
                          placeholder="(415) 555-1234"
                          value={form.phone}
                          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="contactSubject">Subject (optional)</Label>
                        <Input
                          id="contactSubject"
                          placeholder="What's this about?"
                          value={form.subject}
                          onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="contactMessage">Message *</Label>
                      <Textarea
                        id="contactMessage"
                        placeholder="Tell us how we can help..."
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        rows={5}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={mutation.isPending}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6"
                    >
                      {mutation.isPending ? (
                        <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Sending...</>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
