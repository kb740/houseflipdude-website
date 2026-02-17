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
  MessageSquare,
  AlertCircle,
  Briefcase,
} from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { useSEO } from "@/hooks/useSEO";
import FAQSchema from "@/components/FAQSchema";

export default function ForRealtors() {
  useSEO({
    title: "Realtor Partnerships | HouseFlipDude — Sell Fixer Listings Faster, Earn Full Commission",
    description: "Bay Area Realtors: partner with HouseFlipDude to sell fixer listings faster. Our investor network competes for your listings. You keep your full commission. DRE #01205925.",
  });

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
                Three Ways to <span className="text-primary">Partner</span> with HouseFlipDude
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Whether you have an off-market fixer listing, you heard of an upcoming listing that needs work from another Realtor in your office, or you have a listing that's stalled out on the MLS — we have a partnership model that works for you. Your clients get Top Dollar and you earn your commission. Reach out by phone, text, email or by completing the 60 Second form below.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="#three-scenarios">
                  <Button size="lg" className="font-bold text-lg px-8 py-6 shadow-xl">
                    See How It Works <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="tel:+19255887804">
                  <Button size="lg" variant="outline" className="font-bold text-lg px-8 py-6">
                    <Phone className="w-5 h-5 mr-2" /> Call or Text Us
                  </Button>
                </a>
              </div>
              {/* Quick contact methods */}
              <div className="flex flex-wrap gap-6 mt-6 text-sm text-muted-foreground">
                <a href="tel:+19255887804" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <MessageSquare className="w-4 h-4" /> Text: (925) 588-7804
                </a>
                <a href="mailto:kb@houseflipdude.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" /> kb@houseflipdude.com
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

      {/* Video Section */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
            <video
              controls
              preload="metadata"
              className="w-full aspect-video bg-black"
              poster=""
            >
              <source src="https://files.manuscdn.com/user_upload_by_module/session_file/93737141/SmkUemweIwySEyBY.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Watch: Three ways Bay Area Realtors partner with HouseFlipDude to get fixer listings sold fast.
          </p>
        </div>
      </section>

      {/* Three Scenarios */}
      <section id="three-scenarios" className="py-16 lg:py-24 bg-background scroll-mt-20">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-4 text-center">
            Three Scenarios. <span className="text-primary">One Goal: Get It Sold.</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
            No matter how you come across a fixer opportunity, we have a way to work together. Here's how each scenario works — pick the one that fits your situation.
          </p>

          {/* Scenario 1: Your Off-Market / Pre-Market Listing */}
          <div className="mb-12">
            <div className="bg-card rounded-2xl border-2 border-primary/30 p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-5 py-2 rounded-bl-xl">
                SCENARIO 1 — MOST COMMON
              </div>
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-foreground mb-2">
                    It's Your Listing — Off-Market or Pre-Market Fixer
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You have a homeowner who needs to sell a property that needs work, but going through the traditional MLS process isn't the right fit. Maybe the house isn't in showing condition, maybe the seller needs speed, or maybe the situation is sensitive. Whatever the reason, you can bring it directly to our investor network and skip the hassle.
                  </p>
                </div>
              </div>

              <h4 className="font-bold text-foreground mb-4 text-lg">Why Your Seller May Not Want to List on the MLS:</h4>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  "The home needs major repairs and isn't safe or presentable for showings",
                  "Seller can't afford to prep, stage, or make repairs before listing",
                  "The property has code violations, unpermitted work, or structural issues that scare off traditional buyers",
                  "It's a hoarding situation and the seller is embarrassed or overwhelmed",
                  "Seller is going through a divorce and needs a fast, private sale",
                  "It's a probate or inherited property and the family wants it handled quickly",
                  "Seller is facing foreclosure and needs to close before the auction date",
                  "The home has fire or water damage that makes it unlendable",
                  "Seller is an elderly homeowner who doesn't want the disruption of showings and open houses",
                  "The property has tenant issues — occupied, non-paying, or difficult to show",
                  "Seller wants certainty — a guaranteed cash close without financing contingencies falling through",
                  "The home's condition would result in low or insulting offers on the open market, frustrating the seller",
                  "Seller values privacy and doesn't want their home's condition broadcast on the MLS and Zillow",
                  "Time is critical — relocation, health issues, or family circumstances require a fast close",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-accent/50 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-foreground mb-3">How It Works:</h4>
                <ol className="text-sm text-muted-foreground space-y-2">
                  <li className="flex gap-3"><span className="font-bold text-primary text-base">1.</span> <span>Reach out to us — fill out the form below, send a text to (925) 588-7804, or email kb@houseflipdude.com with the property details and your listing info.</span></li>
                  <li className="flex gap-3"><span className="font-bold text-primary text-base">2.</span> <span>We present the property to our network of competing investors — no public marketing, no MLS exposure, total discretion.</span></li>
                  <li className="flex gap-3"><span className="font-bold text-primary text-base">3.</span> <span>You receive multiple cash offers within 48 hours. Your seller reviews them with you.</span></li>
                  <li className="flex gap-3"><span className="font-bold text-primary text-base">4.</span> <span>Your seller picks the best offer, you earn your full listing commission, and the deal closes on your seller's timeline — often in as little as 7-14 days.</span></li>
                </ol>
              </div>

              <div className="flex flex-wrap gap-4">
                {[
                  { label: "Your listing agreement and commission are fully protected", icon: ShieldCheck },
                  { label: "Multiple investors compete — driving the price up", icon: TrendingUp },
                  { label: "No repairs, staging, or open houses needed", icon: Home },
                  { label: "You look like a hero to your client", icon: Users },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-primary/5 rounded-full px-4 py-2 text-sm">
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-foreground font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scenario 2: Referral — Not Your Listing */}
          <div className="mb-12">
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                  <Handshake className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-foreground mb-2">
                    <span className="text-muted-foreground font-bold text-base mr-2">SCENARIO 2</span><br className="sm:hidden" />
                    You Know of a Fixer — But It's Not Your Listing
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Maybe you heard about an opportunity in your weekly office meeting. Maybe a friend or neighbor mentioned they need to sell a house that's in rough shape. Maybe you've driven past a property that clearly needs work, or you've gotten a lead you can't take on because the property needs too much work for your typical buyer pool. Whatever the source — reach out and let's partner.
                  </p>
                </div>
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                You don't need a listing agreement. Just make the introduction — tell us about the property and the homeowner (with their permission) — and we take it from there. If one of our investors purchases the property, <strong>you receive a referral commission paid by the investor at closing</strong>. It's a way to monetize your network and local knowledge without taking on a full listing.
              </p>

              <div className="bg-accent/50 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-foreground mb-3">How It Works:</h4>
                <ol className="text-sm text-muted-foreground space-y-2">
                  <li className="flex gap-3"><span className="font-bold text-secondary text-base">1.</span> <span>Tell us about the property and the homeowner — fill out the form, text us at (925) 588-7804, or email kb@houseflipdude.com.</span></li>
                  <li className="flex gap-3"><span className="font-bold text-secondary text-base">2.</span> <span>We reach out to the homeowner, evaluate the property, and present competing investor offers.</span></li>
                  <li className="flex gap-3"><span className="font-bold text-secondary text-base">3.</span> <span>If the homeowner accepts an offer, one of our investors purchases the property.</span></li>
                  <li className="flex gap-3"><span className="font-bold text-secondary text-base">4.</span> <span>You receive your referral commission at closing — no extra work on your part.</span></li>
                </ol>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Earn a referral commission paid by the purchasing investor at closing",
                  "No listing agreement needed — just make the introduction",
                  "We handle all negotiations, paperwork, and closing",
                  "Great for leads you can't service or properties outside your specialty",
                  "Build a passive income stream from your network and local knowledge",
                  "Terms are agreed upon upfront before anything moves forward",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scenario 3: Stale MLS Listing */}
          <div>
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-foreground mb-2">
                    <span className="text-muted-foreground font-bold text-base mr-2">SCENARIO 3</span><br className="sm:hidden" />
                    Your MLS Listing Isn't Selling
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You listed the fixer on the MLS, but it's not getting the traction you expected. Maybe you've had a few lowball offers from individual investors, or the property has been sitting without serious interest. The days on market are climbing, your seller is getting frustrated, and your commission is at risk.
                  </p>
                </div>
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                Submit it to HouseFlipDude and let our network of serious, funded investors take a look. These aren't tire-kickers — they're experienced Bay Area investors who compete against each other, which drives the price up. Many of our investors don't actively browse the MLS, so your listing may not have reached the right audience yet. <strong>We can change that in 48 hours.</strong>
              </p>

              <div className="bg-accent/50 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-foreground mb-3">How It Works:</h4>
                <ol className="text-sm text-muted-foreground space-y-2">
                  <li className="flex gap-3"><span className="font-bold text-amber-600 text-base">1.</span> <span>Send us your MLS listing details — fill out the form, text (925) 588-7804, or email kb@houseflipdude.com.</span></li>
                  <li className="flex gap-3"><span className="font-bold text-amber-600 text-base">2.</span> <span>We present the property to our investor network — buyers who may not have seen it on the MLS.</span></li>
                  <li className="flex gap-3"><span className="font-bold text-amber-600 text-base">3.</span> <span>You receive competing cash offers, often higher than what individual MLS buyers have offered.</span></li>
                  <li className="flex gap-3"><span className="font-bold text-amber-600 text-base">4.</span> <span>Your seller picks the best offer, you earn your full commission, and the deal closes fast.</span></li>
                </ol>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { stat: "45-90+", label: "Avg. days on market for Bay Area fixers on MLS" },
                  { stat: "48 hrs", label: "To get competing investor offers through us" },
                  { stat: "7-14 days", label: "Typical close time — all cash, no contingencies" },
                ].map((item, i) => (
                  <div key={i} className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                    <p className="text-2xl font-extrabold text-amber-700 mb-1">{item.stat}</p>
                    <p className="text-xs text-amber-800/70">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Realtors Partner With Us */}
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

      {/* We're Not Wholesalers */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground mb-6">
            We're Not Wholesalers — And That Matters
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            You may have had bad experiences with wholesalers who approach your clients behind your back, try to tie up properties with no intention of closing, or operate without a license. We're the opposite.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            HouseFlipDude is a licensed California Real Estate Broker (DRE# 01205925). We don't assign contracts. We don't use double escrows. We don't operate in the shadows. Our model is transparent: multiple real investors compete, the homeowner (and their Realtor) see all the offers, and the best one wins. <strong>Your commission is always protected, and we work with you — never around you.</strong>
          </p>
          <Link href="/what-is-a-wholesaler">
            <Button variant="outline" size="lg" className="font-semibold">
              Learn More About Wholesalers vs. HouseFlipDude <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* What Types of Properties */}
      <section className="py-16 lg:py-20 bg-muted/50">
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

      {/* Case Study */}
      <section className="py-16 lg:py-20 bg-background">
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
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-foreground mb-4">
                Ready to Partner? <br />
                <span className="text-primary">Reach Out However You Prefer.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Whether you have a fixer listing, know of a property, or have a listing that's stalled on the MLS — we'd love to hear from you. Reach out directly — Realtor-to-Broker, no salespeople, no scripts.
              </p>
              <div className="space-y-4 mb-8">
                <a href="#submit-form" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">Fill Out the Form</p>
                    <p className="text-sm text-muted-foreground">Submit property details and we'll get back to you fast</p>
                  </div>
                </a>
                <a href="sms:+19255887804" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">Text Us: (925) 588-7804</p>
                    <p className="text-sm text-muted-foreground">Quick and easy — send property info via text</p>
                  </div>
                </a>
                <a href="tel:+19255887804" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">Call: (925) 588-7804</p>
                    <p className="text-sm text-muted-foreground">Talk to us directly — no phone trees, no scripts</p>
                  </div>
                </a>
                <a href="mailto:kb@houseflipdude.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">Email: kb@houseflipdude.com</p>
                    <p className="text-sm text-muted-foreground">Send property details, photos, or MLS links</p>
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
            <div id="submit-form" className="bg-card rounded-2xl shadow-xl border border-border p-6 scroll-mt-20">
              <h3 className="text-xl font-bold text-card-foreground mb-1">Submit a Property</h3>
              <p className="text-sm text-muted-foreground mb-4">Tell us about the property and we'll get competing offers within 48 hours.</p>
              <LeadCaptureForm variant="sidebar" />
            </div>
          </div>
        </div>
      </section>

      <FAQSchema faqs={[{"q": "Will you try to steal my client?", "a": "Absolutely not. If you have the listing, your listing agreement and commission are fully protected. We work with you, not around you. Our goal is to help you close the deal and look great to your client."}, {"q": "How is this different from selling to a wholesaler?", "a": "Wholesalers put a property under contract at a low price and then try to flip the contract to an investor for a profit. We're the opposite \u2014 we bring multiple investors to compete against each other, driving the price up. There's no assignment, no double escrow, and full transparency."}, {"q": "What commission do I earn on a referral?", "a": "For referrals (properties that aren't your listing), you earn a referral commission paid by the purchasing investor at closing. The exact amount depends on the deal, but we'll agree on terms upfront before anything moves forward."}, {"q": "How quickly can you get offers?", "a": "Typically within 48 hours of receiving the property details. Our investor network is active and ready to move. Closings can happen in as little as 7 days."}, {"q": "Do the investors pay cash?", "a": "Yes. Every investor in our network is vetted and has verified proof of funds. All offers are cash with no financing contingencies, which means no risk of the deal falling through due to a lender."}, {"q": "What areas do you cover?", "a": "We cover the entire greater San Francisco Bay Area \u2014 all 14 counties including San Francisco, Alameda, Contra Costa, Santa Clara, San Mateo, Marin, Sonoma, Napa, Solano, Sacramento, San Joaquin, Stanislaus, Santa Cruz, and Monterey."}]} />
      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-background">
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
            <a href="tel:+19255887804">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-10 py-6 shadow-xl">
                <Phone className="w-5 h-5 mr-2" /> Call (925) 588-7804
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
