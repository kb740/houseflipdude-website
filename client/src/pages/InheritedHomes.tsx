import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Clock, Home, Phone, DollarSign, FileText, Users, Heart, Scale, Key } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { useSEO } from "@/hooks/useSEO";

export default function InheritedHomes() {
  useSEO({
    title: "Sell an Inherited House in the Bay Area | HouseFlipDude — Skip Probate Hassles",
    description: "Inherited a Bay Area house? Get competing cash offers from investors. No repairs, no cleaning, no probate delays. Close in as little as 7 days. Call (925) 237-1335.",
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-background to-primary/10 py-16 lg:py-20">
        <div className="container max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Heart className="w-4 h-4" /> Inherited Property Solutions
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            Inherited a House in the <span className="text-primary">Bay Area</span>? <br className="hidden md:block" />
            We Make Selling Simple
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Dealing with an inherited property during an already difficult time shouldn't add more stress. Whether the home needs major repairs, is occupied by tenants, or you simply live out of state and can't manage it — our network of competing investors will make you cash offers so you can move forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                <Phone className="w-4 h-4" /> Call Us — (925) 237-1335
              </Button>
            </Link>
            <a href="#get-offers">
              <Button size="lg" variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/5">
                Get Competing Offers <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-4">
            The Challenges of Selling an <span className="text-primary">Inherited Home</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Inheriting a property often comes with a unique set of complications that make a traditional sale difficult, expensive, or simply impractical. Here are the most common situations we help with:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Home className="w-6 h-6 text-primary" />,
                title: "The Home Needs Major Repairs",
                desc: "Many inherited homes have years of deferred maintenance. The roof leaks, the kitchen is from the 1970s, there may be foundation issues. Our investors buy in any condition — no repairs needed."
              },
              {
                icon: <FileText className="w-6 h-6 text-primary" />,
                title: "Probate Is Required",
                desc: "If the property must go through probate, the process can take months. Our team understands California probate law and works with estates at every stage — including full probate, Heggstad petitions, and small estate affidavits."
              },
              {
                icon: <Users className="w-6 h-6 text-primary" />,
                title: "Multiple Heirs Involved",
                desc: "When siblings or family members share ownership, disagreements about price, timing, and what to do with the property are common. A fast cash sale at a competitive price often brings everyone to agreement."
              },
              {
                icon: <Key className="w-6 h-6 text-primary" />,
                title: "Tenants Are Living in the Property",
                desc: "Inherited homes sometimes come with existing tenants. Our investors are experienced with tenant-occupied properties and can purchase the home without requiring you to navigate the eviction process."
              },
              {
                icon: <DollarSign className="w-6 h-6 text-primary" />,
                title: "Property Taxes and Carrying Costs",
                desc: "Every month you hold an inherited property, you're paying property taxes, insurance, utilities, and maintenance. A fast sale eliminates these ongoing expenses."
              },
              {
                icon: <Clock className="w-6 h-6 text-primary" />,
                title: "You Live Out of State",
                desc: "Managing a property sale from across the country is stressful and expensive. Our process is designed to be handled remotely — we coordinate everything so you don't have to fly back and forth."
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Probate */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-6">Understanding Probate Sales in California</h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              In California, when someone passes away and leaves real property, the estate typically must go through probate before the property can be sold — unless the property was held in a living trust. Probate can take 6–18 months, but that doesn't mean you have to wait to start the process of finding a buyer.
            </p>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Types of Inherited Property Sales</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Trust Sale",
                    desc: "If the property was held in a living trust, the successor trustee can sell without probate court involvement. This is the fastest path — our investors can close in as little as 7–14 days."
                  },
                  {
                    title: "Probate Sale with Full Authority (IAEA)",
                    desc: "Under California's Independent Administration of Estates Act, the executor can sell without court confirmation. This streamlines the process significantly."
                  },
                  {
                    title: "Probate Sale with Court Confirmation",
                    desc: "Some probate sales require court confirmation, which adds time but is still manageable. Our investors are experienced with court-confirmed sales and the overbid process."
                  },
                  {
                    title: "Small Estate Affidavit",
                    desc: "For estates under $184,500 (2024 threshold), you may be able to transfer property without formal probate using a small estate affidavit."
                  },
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-primary/30 pl-4">
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional vs HouseFlipDude */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-8 text-center">
            Traditional Listing vs. <span className="text-primary">HouseFlipDude</span> for Inherited Homes
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-card border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-4 font-bold text-foreground"></th>
                  <th className="text-center p-4 font-bold text-foreground">Traditional Listing</th>
                  <th className="text-center p-4 font-bold text-primary">HouseFlipDude</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Time to sell", "3–6 months", "7–14 days"],
                  ["Repairs needed", "Yes — $10K–$100K+", "None — sell as-is"],
                  ["Agent commissions", "5–6% of sale price", "Zero fees to you"],
                  ["Showings & staging", "Dozens of showings", "No showings needed"],
                  ["Buyer financing risk", "Loans can fall through", "Cash offers — no risk"],
                  ["Number of offers", "Varies — often just 1", "Multiple competing offers"],
                  ["Closing date", "Buyer's timeline", "You pick the date"],
                  ["Handles probate", "Agent may not know", "Experienced with all types"],
                ].map(([label, trad, hfd], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="p-4 font-medium text-foreground text-sm">{label}</td>
                    <td className="p-4 text-center text-muted-foreground text-sm">{trad}</td>
                    <td className="p-4 text-center text-primary font-semibold text-sm">{hfd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-8 text-center">
            How It Works — <span className="text-primary">3 Simple Steps</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Tell Us About the Inherited Property",
                desc: "Fill out the form below or call us at (925) 237-1335. We'll ask about the property condition, the probate status, and your timeline. No obligation, completely confidential."
              },
              {
                step: "2",
                title: "Competing Investors Evaluate and Bid",
                desc: "Within 24–48 hours, we present your property to our network of vetted Bay Area investors. Multiple investors submit competing cash offers — driving the price up through competition."
              },
              {
                step: "3",
                title: "Choose Your Best Offer and Close",
                desc: "Review the competing offers, choose the one that works best for you, and close on your timeline. We handle the coordination with title, escrow, and — if needed — the probate court."
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-lg font-extrabold text-primary">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I need to go through probate before I can sell?",
                a: "It depends. If the property was held in a living trust, you can sell immediately without probate. If probate is required, you can still start the process of finding buyers while probate is pending — so you're ready to close as soon as the court grants authority."
              },
              {
                q: "What if the house is in terrible condition?",
                a: "That's perfectly fine. Our investors specialize in buying homes that need work — from cosmetic updates to full gut renovations. You don't need to make any repairs, clean out the property, or even remove personal belongings if you don't want to."
              },
              {
                q: "What about the tax implications of selling an inherited home?",
                a: "Inherited properties receive a 'stepped-up basis' to the fair market value at the date of death. This means you may owe little or no capital gains tax if you sell relatively soon after inheriting. We always recommend consulting with a tax professional for your specific situation."
              },
              {
                q: "Can I sell if there are multiple heirs who disagree?",
                a: "Yes. We've helped many families navigate this situation. Often, getting competing cash offers with clear numbers helps bring everyone to agreement. If needed, California law also provides legal mechanisms for partition sales."
              },
              {
                q: "How quickly can you close on an inherited property?",
                a: "For trust sales and properties that don't require probate, we can close in as little as 7–14 days. For probate sales, we can have offers ready and close as soon as the court grants authority to sell."
              },
              {
                q: "Are there really no fees or commissions?",
                a: "Correct. There are zero fees to you. All closing costs, title fees, and any commissions are paid by the purchasing investor. The offer you accept is the amount you walk away with."
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-3xl prose prose-lg max-w-none">
          <h2 className="text-3xl font-extrabold text-foreground mb-6">Sell Your Inherited Bay Area Home for Top Dollar</h2>
          <p className="text-muted-foreground leading-relaxed">
            Inheriting a home in the San Francisco Bay Area can be both a blessing and a burden. While the property may represent significant value — Bay Area homes are among the most valuable in the country — the reality of managing, maintaining, and selling an inherited property is often overwhelming, especially when you're grieving the loss of a loved one. Whether the home is in San Francisco, Oakland, San Jose, Contra Costa County, Marin, or any of the 14 counties we serve, HouseFlipDude is here to make the process as simple and stress-free as possible.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our founder, Kelly Beardslee, has over 20 years of experience in Bay Area residential real estate investing and has personally been involved in the purchase of hundreds of homes. Through HouseFlipDude's investor marketplace, your inherited property is presented to multiple vetted investors who compete against each other to buy it. This competition drives the price up — ensuring you get top dollar instead of settling for a single lowball offer from a "We Buy Houses" company or a wholesaler.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We understand the emotional weight of selling a family home. Our team treats every situation with the respect and sensitivity it deserves. If the property isn't a fit for the investors on our platform, we'll tell you upfront — we won't string you along. And if it is a fit, you can expect one or more competing cash offers within 24–48 hours. No fees, no repairs, no hassle. Just a straightforward path to selling your inherited home and moving forward.
          </p>
        </div>
      </section>

      {/* CTA with Form */}
      <section id="get-offers" className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-foreground mb-4">
                Ready to Sell Your Inherited Property?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Whether you're in probate, managing the property from out of state, or dealing with multiple heirs — we've seen it all and we can help. Fill out the form and our team will call you within 1 hour.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Experienced with probate, trust, and estate sales",
                  "Buy in any condition — no repairs or cleanout needed",
                  "Multiple competing offers from vetted investors",
                  "Zero fees — all costs paid by the buyer",
                  "Close on your timeline — as fast as 7–14 days",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground">Questions? We're here to help.</p>
                    <p className="text-muted-foreground text-sm">Call us at <a href="tel:+19252371335" className="text-primary font-semibold hover:underline">(925) 237-1335</a>. We'll walk you through the process and answer any questions about selling your inherited home.</p>
                  </div>
                </div>
              </div>
            </div>
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </div>
  );
}
