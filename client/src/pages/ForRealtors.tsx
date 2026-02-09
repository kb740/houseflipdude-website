import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle,
  Home,
  Handshake,
  DollarSign,
  Clock,
  Users,
  Building2,
  Phone,
  Mail,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export default function ForRealtors() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/30 py-16 lg:py-24">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Handshake className="w-4 h-4" /> Realtor Partnership Program
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                Have a <span className="text-primary">Fixer Listing</span>? <br />
                Let Investors Compete to Buy It.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Whether you have a fixer listing that's hard to sell on the MLS or you know of a property that could use our investor network — we have a partnership model that works for you. Your clients get top dollar. You earn your commission.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="#partnership-models">
                  <Button size="lg" className="font-bold text-lg px-8 py-6 shadow-xl">
                    See Partnership Models <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="tel:+14156862846">
                  <Button size="lg" variant="outline" className="font-bold text-lg px-8 py-6">
                    <Phone className="w-5 h-5 mr-2" /> Call Us Direct
                  </Button>
                </a>
              </div>
            </div>
            <div className="bg-card rounded-2xl shadow-xl border border-border p-6 lg:p-8">
              <div className="space-y-4">
                {[
                  { icon: TrendingUp, title: "Higher Sale Prices", desc: "Multiple investors competing drives the price up — not down. Your seller gets more." },
                  { icon: Clock, title: "Fast Closings", desc: "Cash offers in 48 hours. Close in as little as 7 days. No financing contingencies." },
                  { icon: DollarSign, title: "Commission Protected", desc: "Your listing commission is always protected. Referral commissions on off-market deals." },
                  { icon: ShieldCheck, title: "Licensed Broker", desc: "California Real Estate Broker DRE# 01205925. Professional, transparent, and ethical." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-6 text-center">
            The Fixer Listing Challenge
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-2xl mx-auto">
            As a Realtor, you know that fixer-uppers can be some of the hardest listings to move. Traditional buyers often can't get financing for properties that need significant work, and the ones who can want a steep discount. The result? Your listing sits, your seller gets frustrated, and your commission is at risk.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { stat: "45-90+", label: "Days on market for typical Bay Area fixers listed on MLS" },
              { stat: "2-3x", label: "More showings needed vs. move-in-ready homes" },
              { stat: "15-25%", label: "Below market offers from individual cash buyers" },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-6 text-center">
                <p className="text-3xl font-extrabold text-primary mb-2">{item.stat}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Partnership Models */}
      <section id="partnership-models" className="py-16 lg:py-24 bg-background scroll-mt-20">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-4 text-center">
            Two Ways to <span className="text-primary">Partner with Us</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Whether you have the listing or just know about the property, we have a partnership model that puts money in your pocket.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Model 1: Your Listing */}
            <div className="bg-card rounded-2xl border-2 border-primary/30 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                MOST POPULAR
              </div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-extrabold text-foreground mb-3">
                Model 1: You Have the Listing
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You have a fixer listing that's struggling on the MLS — or you've just taken one and want to explore all options for your seller. Let our network of vetted investors compete to buy it. Your listing agreement stays intact. Your commission is fully protected.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Your listing agreement and commission are fully protected",
                  "Multiple investors compete — driving the price up for your seller",
                  "Cash offers within 48 hours, close in as little as 7 days",
                  "No repairs, staging, or open houses needed",
                  "You look like a hero to your client for getting top dollar on a tough property",
                  "Works for on-market or off-market listings",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-accent/50 rounded-lg p-4">
                <h4 className="font-bold text-foreground text-sm mb-1">How It Works:</h4>
                <ol className="text-sm text-muted-foreground space-y-1.5">
                  <li className="flex gap-2"><span className="font-bold text-primary">1.</span> Send us the property details and your listing info</li>
                  <li className="flex gap-2"><span className="font-bold text-primary">2.</span> We present it to our network of competing investors</li>
                  <li className="flex gap-2"><span className="font-bold text-primary">3.</span> You receive multiple cash offers within 48 hours</li>
                  <li className="flex gap-2"><span className="font-bold text-primary">4.</span> Your seller picks the best offer, you earn your full commission</li>
                </ol>
              </div>
            </div>

            {/* Model 2: Referral */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                <Handshake className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-extrabold text-foreground mb-3">
                Model 2: You Know of a Fixer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You know of a property that could benefit from our investor network, but it's not your listing. Maybe it's a neighbor's house, a lead you can't take on, or a property you've driven past. Refer it to us and earn a referral commission when one of our investors buys it.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Earn a referral commission paid by the purchasing investor",
                  "No listing agreement needed — just make the introduction",
                  "We handle all negotiations, paperwork, and closing",
                  "You get paid at closing with no extra work on your part",
                  "Great for leads you can't service or properties outside your specialty",
                  "Build a passive income stream from your network and knowledge",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-accent/50 rounded-lg p-4">
                <h4 className="font-bold text-foreground text-sm mb-1">How It Works:</h4>
                <ol className="text-sm text-muted-foreground space-y-1.5">
                  <li className="flex gap-2"><span className="font-bold text-secondary">1.</span> Tell us about the property and the homeowner (with their permission)</li>
                  <li className="flex gap-2"><span className="font-bold text-secondary">2.</span> We reach out, evaluate the property, and present competing offers</li>
                  <li className="flex gap-2"><span className="font-bold text-secondary">3.</span> If the homeowner accepts, one of our investors purchases the property</li>
                  <li className="flex gap-2"><span className="font-bold text-secondary">4.</span> You receive your referral commission at closing</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Realtors Choose Us */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-10 text-center">
            Why Bay Area Realtors Partner with HouseFlipDude
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Competing Investors", desc: "Not just one lowball offer. Multiple vetted investors bid against each other, driving the price up for your client." },
              { icon: Zap, title: "Speed When It Matters", desc: "Cash offers in 48 hours. Close in 7-30 days. Perfect for probate, divorce, foreclosure, and time-sensitive situations." },
              { icon: DollarSign, title: "Commission Protected", desc: "Your listing commission is always honored. For referrals, you earn a commission paid by the purchasing investor." },
              { icon: ShieldCheck, title: "Licensed & Ethical", desc: "We're a licensed California Real Estate Broker (DRE# 01205925). No wholesaling, no bait-and-switch, no games." },
              { icon: Home, title: "Any Condition", desc: "Fire damage, hoarder houses, foundation issues, code violations — our investors have seen it all and buy as-is." },
              { icon: Handshake, title: "True Partnership", desc: "We're not trying to steal your clients. We're here to help you close deals that would otherwise fall through." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Types of Properties */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-6 text-center">
            What Types of Properties Work Best?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Our investor network specializes in properties that are difficult to sell through traditional channels. If your listing or referral fits any of these categories, we can help.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Properties needing major renovations",
              "Homes with foundation or structural issues",
              "Fire-damaged properties",
              "Hoarder houses or heavy clean-out needed",
              "Properties with code violations",
              "Inherited or probate properties",
              "Homes in pre-foreclosure",
              "Tenant-occupied properties",
              "Outdated homes that won't show well",
              "Properties that have sat on the MLS too long",
              "Homes where the seller can't afford repairs",
              "Any property in the greater Bay Area",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Social Proof */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-8 text-center">
            How a Typical Partnership Works
          </h2>
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-2">The Situation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Realtor in Contra Costa County had a listing — a 3-bedroom ranch built in 1962 that needed a full renovation. The kitchen hadn't been updated since the 1970s, the roof was at end of life, and there was some foundation settling. After 60 days on the MLS with only lowball offers from individual investors, the seller was getting frustrated.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Realtor reached out to HouseFlipDude. Within 48 hours, five investors from our network submitted competing offers. The highest offer came in $45,000 above the best MLS offer the seller had received. The property closed in 14 days, all cash, no contingencies.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">The Result</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The seller got a significantly higher price than any individual investor had offered. The Realtor earned their full listing commission. And the deal closed in two weeks instead of sitting on the market for months. Everyone won — because competition works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Contact */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-foreground mb-4">
                Ready to Partner? <br />
                <span className="text-primary">Let's Talk.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Whether you have a fixer listing or know of a property that could benefit from competing investor offers, we'd love to hear from you. Reach out directly — Realtor-to-Broker, no salespeople, no scripts.
              </p>
              <div className="space-y-4 mb-8">
                <a href="tel:+14156862846" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">(415) 686-2846</p>
                    <p className="text-sm text-muted-foreground">Call or text anytime</p>
                  </div>
                </a>
                <a href="mailto:kb@houseflipdude.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">kb@houseflipdude.com</p>
                    <p className="text-sm text-muted-foreground">Email us property details</p>
                  </div>
                </a>
              </div>
              <div className="bg-accent/50 rounded-xl p-5 border border-border">
                <p className="text-sm text-foreground font-medium mb-1">About HouseFlipDude</p>
                <p className="text-sm text-muted-foreground">
                  Licensed California Real Estate Broker (DRE# 01205925) with a network of vetted, funded investors competing to buy Bay Area properties. We're not wholesalers — we're a marketplace that drives prices up through competition.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-2xl shadow-xl border border-border p-6">
              <h3 className="text-xl font-bold text-card-foreground mb-1">Submit a Property</h3>
              <p className="text-sm text-muted-foreground mb-4">Tell us about the property and we'll get competing offers within 48 hours.</p>
              <LeadCaptureForm variant="sidebar" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-8 text-center">
            Frequently Asked Questions from Realtors
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Will you try to steal my client?",
                a: "Absolutely not. If you have the listing, your listing agreement and commission are fully protected. We work with you, not around you. Our goal is to help you close the deal and look great to your client.",
              },
              {
                q: "How is this different from selling to a wholesaler?",
                a: "Wholesalers put a property under contract at a low price and then try to flip the contract to an investor for a profit. We're the opposite — we bring multiple investors to compete against each other, driving the price up. There's no assignment, no double escrow, and full transparency.",
              },
              {
                q: "What commission do I earn on a referral?",
                a: "For referrals (properties that aren't your listing), you earn a referral commission paid by the purchasing investor at closing. The exact amount depends on the deal, but we'll agree on terms upfront before anything moves forward.",
              },
              {
                q: "How quickly can you get offers?",
                a: "Typically within 48 hours of receiving the property details. Our investor network is active and ready to move. Closings can happen in as little as 7 days.",
              },
              {
                q: "Do the investors pay cash?",
                a: "Yes. Every investor in our network is vetted and has verified proof of funds. All offers are cash with no financing contingencies, which means no risk of the deal falling through due to a lender.",
              },
              {
                q: "What areas do you cover?",
                a: "We cover the entire greater San Francisco Bay Area — all 14 counties including San Francisco, Alameda, Contra Costa, Santa Clara, San Mateo, Marin, Sonoma, Napa, Solano, Sacramento, San Joaquin, Stanislaus, Santa Cruz, and Monterey.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Your Fixer Listings Deserve Competing Offers
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Stop settling for one lowball offer. Let our investor network compete to buy your client's property for top dollar — and earn your full commission.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+14156862846">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-10 py-6 shadow-xl">
                <Phone className="w-5 h-5 mr-2" /> Call (415) 686-2846
              </Button>
            </a>
            <a href="mailto:kb@houseflipdude.com">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-lg px-10 py-6">
                <Mail className="w-5 h-5 mr-2" /> Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
