import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Users, Shield, Clock, DollarSign, Home as HomeIcon,
  TrendingUp, CheckCircle, ArrowRight, Play, Star, MapPin
} from "lucide-react";

const BITMOJI_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/93737141/gvaUXmsdfRQeTwkA.png";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "1,000+", label: "Houses Purchased" },
  { value: "$450M+", label: "In Transactions" },
  { value: "14", label: "Greater Bay Area Counties" },
];

const benefits = [
  { icon: Users, title: "Multiple Investors Compete", desc: "Your property goes to our network of vetted investors who bid against each other — driving up your price." },
  { icon: DollarSign, title: "Zero Fees to You", desc: "No commissions, no closing costs, no hidden charges. The buyer pays everything." },
  { icon: Shield, title: "Any Condition Accepted", desc: "Fixer-upper, inherited, behind on payments, tenant issues — we've seen it all and we buy it all." },
  { icon: Clock, title: "Close on Your Timeline", desc: "Need to close in 7 days? 60 days? You pick the date that works for your life." },
];

const steps = [
  { num: "1", title: "Tell Us About Your Property", desc: "Fill out the quick form below. Takes about 60 seconds. Our team will call you within 1 hour." },
  { num: "2", title: "Investors Compete for Your House", desc: "We present your property to our network of experienced Bay Area investors who submit competing offers." },
  { num: "3", title: "Pick Your Best Offer & Close", desc: "Review your offers, choose the best one, and close on your timeline. It's that simple." },
];

const testimonials = [
  { name: "Maria G.", location: "Oakland, CA", text: "I inherited a house that needed tons of work. HouseFlipDude got me 4 competing offers in 48 hours. I got way more than the first investor who knocked on my door offered.", rating: 5 },
  { name: "David & Sarah T.", location: "San Jose, CA", text: "The team was straight-up honest about everything. No pressure, no games. The whole process was smoother than we expected and we closed in 2 weeks.", rating: 5 },
  { name: "Robert L.", location: "San Mateo, CA", text: "After dealing with pushy 'we buy houses' companies, HouseFlipDude was a breath of fresh air. Casual, professional, and got me top dollar for my fixer.", rating: 5 },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/30">
        <div className="container py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Bay Area's Investor Marketplace for Home Sellers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
                Investors <span className="text-primary">Compete</span> to Buy Your House for{" "}
                <span className="text-secondary">Top Dollar</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Why settle for one lowball offer? Submit your property info and let our network of
                experienced Bay Area investors bid against each other for your house — any condition,
                no fees to you, and you pick the closing date.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a href="#get-offer">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold shadow-lg text-base px-8">
                    Get My Competing Offers <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline" className="font-semibold text-base">
                    <Play className="w-4 h-4 mr-2" /> See How It Works
                  </Button>
                </Link>
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-border">
                {stats.map(s => (
                  <div key={s.label}>
                    <div className="text-2xl font-extrabold text-primary">{s.value}</div>
                    <div className="text-xs text-muted-foreground font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero form */}
            <div id="get-offer" className="bg-card rounded-2xl shadow-xl border border-border p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-2">
                <img src={BITMOJI_URL} alt="HouseFlipDude" className="h-12 w-12 rounded-full object-cover object-top border-2 border-primary/20" />
                <div>
                  <h2 className="text-xl font-bold text-card-foreground">Get Your Competing Offers</h2>
                  <p className="text-sm text-muted-foreground">Takes 60 seconds. Our team calls you within 1 hour.</p>
                </div>
              </div>
              <LeadCaptureForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Why HouseFlipDude Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Why Sellers Choose <span className="text-primary">HouseFlipDude</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We flipped the script on how selling a fixer works. Instead of one buyer making a take-it-or-leave-it offer, multiple investors compete for your property.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              How It Works — <span className="text-primary">3 Simple Steps</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              No complicated process. No runaround. Just a straightforward path to getting top dollar for your house.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(s => (
              <div key={s.num} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-extrabold mx-auto mb-4 shadow-lg">
                  {s.num}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/how-it-works">
              <Button variant="outline" size="lg" className="font-semibold">
                Learn More About Our Process <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Placeholder Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Meet Our Team — <span className="text-primary">The House Flip Dude</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                With 20+ years buying houses across the Bay Area, Sacramento, and Central Valley,
                our team built HouseFlipDude to give homeowners something the industry doesn't —
                real competition for their property. No corporate scripts. No pressure. Just straight talk
                and a network of investors ready to pay top dollar.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {["Licensed CA Broker — DRE# 01205925", "20+ Years Experience", "1,000+ Homes Purchased"].map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground rounded-full px-3 py-1 text-sm font-medium">
                    <CheckCircle className="w-3.5 h-3.5" /> {tag}
                  </span>
                ))}
              </div>
              <Link href="/about">
                <Button variant="outline" className="mt-6 font-semibold">
                  Read Our Full Story <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="aspect-video bg-muted rounded-2xl border-2 border-dashed border-border flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-muted-foreground/40 mx-auto mb-3" />
                <p className="text-muted-foreground font-medium">Video Coming Soon</p>
                <p className="text-sm text-muted-foreground/60">Our team introduces HouseFlipDude</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              What <span className="text-primary">Sellers</span> Are Saying
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Real stories from Bay Area homeowners who got top dollar through our investor network.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-card rounded-xl border border-border p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews">
              <Button variant="outline" className="font-semibold">
                Read All Reviews <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              We Buy Houses Across <span className="text-primary">California</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Our investor network covers the entire San Francisco Bay Area, Sacramento, and the Central Valley.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "San Francisco", "Oakland", "San Jose", "San Mateo",
              "Contra Costa", "Marin", "Sonoma", "Solano",
              "Napa", "Sacramento", "Stockton", "Modesto"
            ].map(city => (
              <Link
                key={city}
                href={`/service-areas/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 hover:border-primary hover:shadow-md transition-all group"
              >
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{city}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/service-areas">
              <Button variant="outline" className="font-semibold">
                View All Service Areas <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to See What Your House Is Worth?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            It takes 60 seconds to submit your property info. No obligation, no pressure —
            just competing offers from real investors who want to buy your house.
          </p>
          <a href="#get-offer">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-10 py-6 shadow-xl">
              Get My Competing Offers <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
