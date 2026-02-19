import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, AlertTriangle, CheckCircle, XCircle, ShieldAlert, Users, DollarSign, Scale } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { useSEO } from "@/hooks/useSEO";

export default function WhatIsWholesaler() {
  useSEO({
    title: "What Is a Wholesaler? | HouseFlipDude — We're Different, Here's Why",
    description: "Learn what a real estate wholesaler is and how HouseFlipDude is different. We're a licensed CA broker (DRE #01205925) with competing investors, not a wholesaler flipping contracts.",
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-50 via-background to-accent/30 py-16 lg:py-20">
        <div className="container max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <ShieldAlert className="w-4 h-4" /> Consumer Awareness
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            What Is a Real Estate <span className="text-red-600">Wholesaler</span>?
          </h1>
          <p className="mt-3 text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-snug">
            What Every Bay Area <span className="text-emerald-600">Homeowner</span> & <span className="text-emerald-600">Realtor</span> Needs to Know
          </p>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            If someone has offered to buy your house with a "cash offer," there's a good chance they're not actually buying it at all. They may be a wholesaler — and understanding how wholesaling works could save you tens of thousands of dollars.
          </p>
        </div>
      </section>

      {/* What Is Wholesaling */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none space-y-6">
            <h2 className="text-3xl font-extrabold text-foreground">How Real Estate Wholesaling Works</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Real estate wholesaling is a practice where someone — the wholesaler — puts your house under contract at a set price, but has no intention of actually buying it themselves. Instead, they privately market your property to other investors at a higher price, pocketing the difference as profit. This is done through what's called an <strong>"assignment"</strong> or a <strong>"double escrow."</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Here's how it typically plays out: A wholesaler contacts you — often through those "We Buy Houses" mailers, bandit signs, or online ads — and makes what seems like a reasonable cash offer. You sign a purchase agreement, thinking you've found your buyer. But behind the scenes, the wholesaler immediately starts shopping your property to their list of actual investors, looking for someone willing to pay significantly more than what they offered you.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The spread between what the wholesaler contracted with you and what the end investor pays can be enormous — often <strong>$20,000 to $100,000 or more</strong> on Bay Area properties. That's money that should have gone to you, the homeowner.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Example */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-8 text-center">
            A Real-World Example of <span className="text-red-600">Wholesaling in Action</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-extrabold text-red-600">1</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Wholesaler Offers You</h3>
              <p className="text-3xl font-extrabold text-red-600 mb-2">$500,000</p>
              <p className="text-sm text-muted-foreground">They sign a purchase contract with you at this price, claiming they're the buyer.</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-extrabold text-amber-600">2</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Wholesaler Finds Investor</h3>
              <p className="text-3xl font-extrabold text-amber-600 mb-2">$560,000</p>
              <p className="text-sm text-muted-foreground">They privately market your home to real investors and find one willing to pay more.</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Wholesaler Profits</h3>
              <p className="text-3xl font-extrabold text-red-600 mb-2">$60,000</p>
              <p className="text-sm text-muted-foreground">The wholesaler pockets the spread — money that should have gone to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-6">
            Why Wholesaling Is <span className="text-red-600">Bad for Homeowners</span>
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-red-50 border border-red-200 rounded-xl p-5">
              <XCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground mb-1">You're Leaving Money on the Table</h3>
                <p className="text-muted-foreground">The wholesaler's entire business model depends on getting your house under contract for as little as possible. The lower they can get your price, the bigger their profit when they flip the contract. You're not getting the best price — you're getting the lowest price the wholesaler thinks you'll accept.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-red-50 border border-red-200 rounded-xl p-5">
              <XCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground mb-1">They Almost Never Tell You the Truth</h3>
                <p className="text-muted-foreground">This is perhaps the most troubling aspect of wholesaling. Almost all wholesalers present themselves as the actual buyer. They don't tell you they plan to assign your contract or use a double escrow. They don't disclose that they're marketing your property to other investors at a higher price. This lack of transparency is, frankly, deceptive — and it's bad for consumers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-red-50 border border-red-200 rounded-xl p-5">
              <XCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Your Sale Can (likely will) Fall Apart</h3>
                <p className="text-muted-foreground">If the wholesaler can't find an investor willing to pay more than the contract price so the wholesaler can make their profit, they'll first try to renegotiate the sale price and terms of the underlying contract with the seller.  If that doesn't work, they then back out of the deal — leaving you back at square one after weeks of wasted time. Nearly all wholesalers include escape clauses in their contracts that let them walk away with no consequences.  Even when offering non-contingent, they have a window of time to put up the Earnest Money Deposit (EMD) which acts like a built in contingency!</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-red-50 border border-red-200 rounded-xl p-5">
              <XCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Many Aren't Even Licensed</h3>
                <p className="text-muted-foreground">In California, acting as an intermediary in real estate transactions typically requires a real estate license. Many wholesalers operate without one, which means they're not subject to the same ethical standards, disclosure requirements, and consumer protections that licensed agents and brokers must follow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-6">
            <AlertTriangle className="w-8 h-8 text-amber-500 inline-block mr-2 -mt-1" />
            Red Flags You're Dealing with a Wholesaler
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "They offer non-contingent, but then don't put up the earnest money deposit and ask for more time!",
              "The contract has an \"assignment\" clause or mentions \"and/or assigns.\"",
              "They can't provide proof of funds to actually purchase the property.",
              "They say they want their contractors to walk the property, but then a number of other investors show up to take a look.",
              "You ask for addresses of other properties they have purchased and those addresses don't tie back to the entity making the offer.",
              "They offer at, or near, the asking price, seemingly ok with major issues like foundation repairs.  FYI...A Wholesaler just wants to get it in contract at any price so they control the deal.  They then search to find the end investor, and will attempt to renegotiate the price and terms with the Seller!",
              "They ask for an unusually long inspection or due diligence period and/or ask for more time.",
              "The buyer name on the contract is an LLC you can't find any information about and doesn't appear to own any properties.",
            ].map((flag, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{flag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Better Way */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-4">
            The Better Way: Let Investors <span className="text-primary">Compete for Your Property</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The wholesaler model exists because there's a disconnect between homeowners and real investors. Wholesalers insert themselves as middlemen, profiting from that gap. HouseFlipDude eliminates the middleman entirely by connecting you directly with multiple competing investors.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Wholesaler Column */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Selling to a Wholesaler
              </h3>
              <ul className="space-y-3">
                {[
                  "One lowball offer from someone who may not be a real buyer",
                  "Wholesaler profits from the spread — money you should keep",
                  "No transparency about what your property is really worth",
                  "Risk of deal falling through if they can't find an end buyer",
                  "Wholesaler's goal: buy as low as possible",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* HouseFlipDude Column */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> HouseFlipDude Marketplace
              </h3>
              <ul className="space-y-3">
                {[
                  "Multiple real investors compete to buy your property",
                  "Competition drives the price up — not down",
                  "Full transparency — you see competing offers and choose the best one",
                  "Every investor in our network is vetted and has proof of funds",
                  "Our goal: get you the highest price through competition",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-emerald-800">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Scale className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Think of It Like This</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Imagine you're selling a car. Would you rather accept the first offer from one buyer who's planning to immediately resell it for a profit? Or would you rather have multiple buyers compete against each other, driving the price up to what your car is actually worth? That's the difference between a wholesaler and HouseFlipDude. We're the marketplace that puts the power back in your hands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies That May Be Wholesalers */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-4">
            How to Spot the Difference
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Many of the "We Buy Houses" companies you see advertising — from national franchises like "We Buy Ugly Houses" to local operations like "John Buys Bay Area Homes" — may be legitimate investors, but many operate as wholesalers. Their entire focus is to acquire your property for the lowest possible price, because their profit depends on the spread between what they pay you and what the property is actually worth to an end buyer.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Even when these companies are legitimate direct buyers (not wholesalers), you're still only getting one offer from one company whose goal is to pay as little as possible. There's no competition, no price discovery, and no way to know if you're leaving money on the table. With HouseFlipDude, you eliminate that uncertainty by letting multiple investors compete.
          </p>

          <div className="bg-card border border-primary/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" /> Questions to Ask Any "Cash Buyer"
            </h3>
            <div className="space-y-3">
              {[
                "Are you the actual buyer, or will you be assigning this contract to someone else?",
                "Can you provide proof of funds showing you personally have the money to close?",
                "Do you hold a California real estate license? What's your DRE number?",
                "Will the name on the purchase contract be the same entity that closes?",
                "Have you ever assigned a contract or used a double escrow?",
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-primary font-bold text-sm mt-0.5">{i + 1}.</span>
                  <p className="text-foreground text-sm">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Form */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-foreground mb-4">
                Skip the Wholesalers. <br />
                <span className="text-primary">Get Competing Offers Instead.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Don't settle for one lowball offer from someone who may not even be a real buyer. Submit your property info and let our network of vetted, funded investors compete to buy your house for top dollar.
              </p>
              <div className="space-y-3">
                {[
                  "Multiple real investors compete — driving your price up",
                  "Every investor is vetted with verified proof of funds",
                  "Full transparency — no hidden assignments or double escrows",
                  "Licensed California Real Estate Broker (DRE# 01205925)",
                  "No fees to you — ever",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl shadow-xl border border-border p-6">
              <h3 className="text-xl font-bold text-card-foreground mb-1">Get Competing Offers Now</h3>
              <p className="text-sm text-muted-foreground mb-4">Takes 60 seconds. No obligation. No wholesalers.</p>
              <LeadCaptureForm variant="sidebar" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Protect Yourself. Get Competing Offers.
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            The best defense against wholesalers is competition. When multiple investors compete for your property, you know you're getting a fair price.
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
