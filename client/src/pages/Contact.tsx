import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, CheckCircle, Loader2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const BITMOJI_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/93737141/TXSkgaQSgDEqEfqV.png";

export default function Contact() {
  useSEO({
    title: "Contact HouseFlipDude | Get a Cash Offer on Your Bay Area House Today",
    description: "Call (925) 588-7804 or fill out our form to get competing cash offers on your Bay Area house. No fees, no obligation. Our team responds within 1 hour.",
  });

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
                    <a href="tel:+19255887804" className="text-muted-foreground hover:text-primary transition-colors">(925) 588-7804</a>
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
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Follow Us</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <a href="https://www.youtube.com/@HouseFlipDude" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      </a>
                      <a href="https://www.instagram.com/houseflipdude/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=100014916131942" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      </a>
                      <a href="https://www.linkedin.com/in/houseflipdude/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                      <a href="https://x.com/HouseFlipDude" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="X (Twitter)">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </a>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Follow for Bay Area real estate tips & market updates</p>
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
