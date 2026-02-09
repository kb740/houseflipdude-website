import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Play, Award, MapPin, Users, TrendingUp } from "lucide-react";

const BITMOJI_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/93737141/kEarhmepkcMGjaMg.png";

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
          <div className="aspect-video bg-card rounded-2xl border-2 border-dashed border-border flex items-center justify-center">
            <div className="text-center">
              <Play className="w-20 h-20 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-muted-foreground font-medium text-lg">Video Coming Soon</p>
              <p className="text-sm text-muted-foreground/60">Our team shares the story and mission</p>
            </div>
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
