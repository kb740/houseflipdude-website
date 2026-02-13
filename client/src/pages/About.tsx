import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Award, MapPin, Users, TrendingUp } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const BITMOJI_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/93737141/TXSkgaQSgDEqEfqV.png";

const milestones = [
  { year: "2000s", title: "Started Buying Fixers", desc: "Our team began purchasing and renovating distressed properties across the Bay Area, learning the market from the ground up." },
  { year: "2010s", title: "Built an Investor Network", desc: "After hundreds of deals, our team cultivated relationships with top investors across California — professionals who have collectively bought thousands of homes." },
  { year: "2020s", title: "Launched HouseFlipDude", desc: "Our team created HouseFlipDude to give homeowners something the industry doesn't — real competition for their property from multiple vetted investors." },
];

const values = [
  { icon: Users, title: "Straight Talk, No Scripts", desc: "Our team tells it like it is. No corporate jargon, no high-pressure tactics, no bait-and-switch. You'll know exactly where you stand from the first phone call." },
  { icon: Award, title: "Deep Local Knowledge", desc: "20+ years buying houses across the Bay Area, Sacramento, and Central Valley means our team knows every neighborhood, every market quirk, and every shortcut to getting deals done." },
  { icon: TrendingUp, title: "Competition Gets You More", desc: "The HouseFlipDude model is built on a simple truth: when multiple investors compete for your house, you get a better price than when one buyer makes a take-it-or-leave-it offer." },
];

export default function About() {
  useSEO({
    title: "About HouseFlipDude | 20+ Years Buying Bay Area Houses — Meet Our Team",
    description: "Meet the team behind HouseFlipDude. With 20+ years buying houses across the Bay Area, Sacramento & Central Valley, we built a platform where investors compete to buy your property for top dollar.",
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/30 py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Award className="w-4 h-4" /> Licensed California Real Estate Broker — DRE# 01205925
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Meet <span className="text-primary">Our Team</span>
                <br />
                <span className="text-secondary">The House Flip Dude</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                With over 20 years of experience buying hundreds of houses across the San Francisco Bay Area,
                Sacramento, and the Central Valley, our team built HouseFlipDude to solve a problem we saw every day:
                homeowners getting lowballed by single-buyer cash companies.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Our solution? Create a marketplace where multiple experienced investors compete for your property —
                so you get top dollar instead of settling for the first offer that comes along.
              </p>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <img
                  src={BITMOJI_URL}
                  alt="HouseFlipDude Team"
                  className="w-64 h-64 object-contain mx-auto"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="bg-card rounded-xl border border-border p-4 text-center">
                  <div className="text-2xl font-extrabold text-primary">20+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-card rounded-xl border border-border p-4 text-center">
                  <div className="text-2xl font-extrabold text-primary">1,000+</div>
                  <div className="text-xs text-muted-foreground">Houses Purchased</div>
                </div>
                <div className="bg-card rounded-xl border border-border p-4 text-center">
                  <div className="text-2xl font-extrabold text-primary">$450M+</div>
                  <div className="text-xs text-muted-foreground">In Transactions</div>
                </div>
                <div className="bg-card rounded-xl border border-border p-4 text-center">
                  <div className="text-2xl font-extrabold text-primary">14</div>
                  <div className="text-xs text-muted-foreground">Greater Bay Area Counties</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 mt-4">
                <span className="text-sm text-muted-foreground font-medium">Follow Us:</span>
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
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-10">
            The <span className="text-primary">HouseFlipDude</span> Story
          </h2>
          <div className="space-y-8">
            {milestones.map(m => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="shrink-0 w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-extrabold text-primary">{m.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{m.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video placeholder */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-foreground">Hear It From Our Team</h2>
            <p className="mt-3 text-muted-foreground text-lg">Why we started HouseFlipDude and what makes it different.</p>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              controls
              preload="metadata"
            >
              <source src="https://files.manuscdn.com/user_upload_by_module/session_file/93737141/FDwaOTAfmBPMbPeE.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-10">
            What We <span className="text-primary">Stand For</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(v => (
              <div key={v.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Network */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container max-w-4xl">
          <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
            <h2 className="text-3xl font-extrabold text-foreground mb-6 text-center">
              Our <span className="text-primary">Investor Network</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-2xl mx-auto mb-8">
              Our network isn't a bunch of random buyers off the internet. These are seasoned professionals
              with deep pockets and decades of experience in California real estate.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-primary">1,000+</div>
                <div className="text-sm text-muted-foreground mt-1">Homes Purchased by Our Network</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-primary">$500M+</div>
                <div className="text-sm text-muted-foreground mt-1">Total Investment Capital</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-primary">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Avg. Investor Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Let's Talk About Your House</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Our team personally handles every initial call. No call centers, no salespeople — just straight-talking
            people who know the Bay Area market inside and out.
          </p>
          <Link href="/#get-offer">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-10 py-6 shadow-xl">
              Get My Competing Offers <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
