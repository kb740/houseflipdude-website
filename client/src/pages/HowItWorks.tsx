import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ClipboardList, Users, Handshake, Phone, Calendar,
  CheckCircle, ArrowRight, Shield, DollarSign, Clock
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Submit Your Property Info",
    desc: "Fill out our quick form with your property address and basic details. It takes about 60 seconds — no commitment required. Our team will personally call you within 1 hour to learn more about your property and your situation.",
    details: ["60-second form", "No obligation", "Personal call from our team within 1 hour"],
  },
  {
    icon: Users,
    num: "02",
    title: "Investors Compete for Your House",
    desc: "After our team visits your property, we present it to our curated network of experienced Bay Area investors. These are professionals who have collectively purchased thousands of homes and invested hundreds of millions of dollars. They submit competing offers, which drives up your price.",
    details: ["Vetted investor network", "Multiple competing offers", "Competition drives up your price"],
  },
  {
    icon: Handshake,
    num: "03",
    title: "Pick Your Best Offer & Close",
    desc: "Review the competing offers and choose the one that works best for you. You pick the closing date — whether that's 7 days or 60 days. There are zero fees or commissions charged to you. The buyer covers everything. Walk away with cash in hand.",
    details: ["You choose the best offer", "You pick the closing date", "Zero fees to you — buyer pays all costs"],
  },
];

const faqs = [
  {
    q: "What types of houses do you buy?",
    a: "We buy houses in any condition — fixer-uppers, inherited properties, homes with tenant issues, properties behind on payments, fire-damaged, outdated, you name it. If it's a house in the Bay Area, Sacramento, or Central Valley, our investors are interested.",
  },
  {
    q: "How is this different from a typical 'We Buy Houses' company?",
    a: "Most cash buyer companies give you a single take-it-or-leave-it offer. At HouseFlipDude, multiple investors compete for your property, which means you get a better price. Think of it like LendingTree for home selling — competition works in your favor.",
  },
  {
    q: "Do I have to pay any fees or commissions?",
    a: "Absolutely not. You pay zero fees, zero commissions, and zero closing costs. The investor buyer covers all of that. What we offer you is what you walk away with.",
  },
  {
    q: "How fast can I close?",
    a: "That's entirely up to you. Some sellers close in as little as 7 days. Others need 30-60 days to get their affairs in order. You pick the timeline that works for your life.",
  },
  {
    q: "Do I need to make repairs or clean the house?",
    a: "Nope. Our investors buy houses as-is. Leave the old furniture, the overgrown yard, the leaky roof — that's what our investors specialize in. You don't need to lift a finger.",
  },
  {
    q: "How quickly will I get offers?",
    a: "After our team visits your property, you'll typically receive competing offers within 24-48 hours. Some properties generate offers even faster.",
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/30 py-16 lg:py-20">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            How <span className="text-primary">HouseFlipDude</span> Works
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Selling your Bay Area house shouldn't be complicated. We've boiled it down to three
            simple steps — and the whole process can be done in as little as a week.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={step.num} className="grid md:grid-cols-[120px_1fr] gap-6 items-start">
                <div className="flex md:flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="text-4xl font-extrabold text-primary/20">{step.num}</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{step.title}</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">{step.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {step.details.map(d => (
                      <span key={d} className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground rounded-full px-3 py-1 text-sm font-medium">
                        <CheckCircle className="w-3.5 h-3.5" /> {d}
                      </span>
                    ))}
                  </div>
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
            <h2 className="text-3xl font-extrabold text-foreground">
              Watch Our Team Explain the Process
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">A quick walkthrough of how it all works.</p>
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

      {/* Comparison */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-10">
            HouseFlipDude vs. <span className="text-muted-foreground">The Old Way</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="py-3 px-4 text-sm font-semibold text-muted-foreground"></th>
                  <th className="py-3 px-4 text-sm font-bold text-primary">HouseFlipDude</th>
                  <th className="py-3 px-4 text-sm font-semibold text-muted-foreground">Traditional Listing</th>
                  <th className="py-3 px-4 text-sm font-semibold text-muted-foreground">Single Cash Buyer</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Competing offers", "✓ Multiple investors bid", "✓ Open market", "✗ One offer"],
                  ["Fees to seller", "✓ Zero", "✗ 5-6% commission", "Varies"],
                  ["Repairs needed", "✓ None — as-is", "✗ Usually required", "✓ None"],
                  ["Timeline to close", "✓ 7-60 days (your choice)", "✗ 60-120+ days", "✓ 7-30 days"],
                  ["Showings required", "✓ None", "✗ Multiple", "✓ None"],
                  ["Certainty of close", "✓ Cash — no financing risk", "✗ Buyer financing can fall through", "✓ Cash"],
                ].map(([feature, hfd, trad, single]) => (
                  <tr key={feature} className="border-b border-border">
                    <td className="py-3 px-4 font-medium text-foreground">{feature}</td>
                    <td className="py-3 px-4 text-primary font-medium">{hfd}</td>
                    <td className="py-3 px-4 text-muted-foreground">{trad}</td>
                    <td className="py-3 px-4 text-muted-foreground">{single}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Submit your property info and let investors compete for your house. It takes 60 seconds.
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
