import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, XCircle, Home, Phone, DollarSign, Wrench, Clock, Users, Zap, ShieldCheck } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export default function SellAsIs() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-background to-primary/10 py-16 lg:py-20">
        <div className="container max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Home className="w-4 h-4" /> Sell Your House As-Is
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            Sell Your Bay Area House <span className="text-primary">As-Is</span> — <br className="hidden md:block" />
            No Repairs, No Hassle, Top Dollar
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Your house doesn't need to be perfect to sell for a great price. Whether it needs a new roof, has foundation issues, or just hasn't been updated in decades — our network of competing investors buys homes in any condition. No repairs, no cleaning, no staging. Just competing cash offers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                <Phone className="w-4 h-4" /> Call Us — (415) 686-2846
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

      {/* Why Sell As-Is */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-6">Why Homeowners Choose to Sell As-Is</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            There are many reasons why making repairs before selling doesn't make sense. Maybe you don't have the money for renovations. Maybe you don't have the time. Maybe you just don't want the hassle. Whatever your reason, selling as-is to a cash investor is a legitimate, smart option — especially when multiple investors are competing to buy your property.
          </p>
          <div className="space-y-4">
            {[
              {
                title: "The Cost of Repairs Doesn't Always Pay Off",
                desc: "Spending $50,000 on a kitchen remodel doesn't mean your home's value increases by $50,000. In many cases, you'll spend more on repairs than you'll recoup in a higher sale price — especially on older Bay Area homes with structural issues."
              },
              {
                title: "Renovations Take Time You May Not Have",
                desc: "A typical renovation takes 2–6 months, and that's if everything goes smoothly. Add in permits, contractor delays, and unexpected issues, and you could be looking at 6–12 months before your home is ready to list."
              },
              {
                title: "Managing Contractors Is Stressful",
                desc: "Finding reliable contractors, managing timelines, dealing with change orders, and overseeing quality — it's essentially a part-time job. If you're also dealing with a life change like divorce, job relocation, or a family situation, it's the last thing you need."
              },
              {
                title: "You're Paying Holding Costs Every Month",
                desc: "Every month you own the property, you're paying the mortgage, property taxes, insurance, utilities, and maintenance. A fast as-is sale eliminates months of carrying costs."
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Buy */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-4 text-center">
            We Buy Houses in <span className="text-primary">Any Condition</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
            No matter what's wrong with your property, our investors have seen it before and are ready to make offers. Here are just some of the conditions we handle:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Wrench className="w-5 h-5" />, label: "Needs full renovation" },
              { icon: <Home className="w-5 h-5" />, label: "Outdated kitchens & baths" },
              { icon: <Wrench className="w-5 h-5" />, label: "Foundation problems" },
              { icon: <Home className="w-5 h-5" />, label: "Roof damage or leaks" },
              { icon: <Wrench className="w-5 h-5" />, label: "Mold or water damage" },
              { icon: <Home className="w-5 h-5" />, label: "Fire damage" },
              { icon: <Wrench className="w-5 h-5" />, label: "Code violations" },
              { icon: <Home className="w-5 h-5" />, label: "Unpermitted additions" },
              { icon: <Wrench className="w-5 h-5" />, label: "Pest or termite damage" },
              { icon: <Home className="w-5 h-5" />, label: "Hoarder situations" },
              { icon: <Wrench className="w-5 h-5" />, label: "Overgrown landscaping" },
              { icon: <Home className="w-5 h-5" />, label: "Vacant or abandoned" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  {item.icon}
                </div>
                <span className="text-foreground text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional vs As-Is Comparison */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-8 text-center">
            Fix & List vs. Sell <span className="text-primary">As-Is</span> Through HouseFlipDude
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Fix Up & List Traditionally
              </h3>
              <ul className="space-y-3">
                {[
                  "Spend $20K–$150K+ on repairs before you can even list",
                  "Wait 2–6 months for renovations to complete",
                  "Pay 5–6% in agent commissions ($30K–$60K on a Bay Area home)",
                  "Deal with showings, open houses, and buyer negotiations",
                  "Risk buyer financing falling through after months of work",
                  "Total time from decision to cash: 6–12+ months",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Sell As-Is Through HouseFlipDude
              </h3>
              <ul className="space-y-3">
                {[
                  "Zero repairs — sell the house exactly as it is today",
                  "Multiple investors compete, driving the price up",
                  "Zero fees to you — all costs paid by the purchasing investor",
                  "No showings, no staging, no open houses",
                  "Cash offers — no risk of financing falling through",
                  "Total time from decision to cash: 7–14 days",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-emerald-800">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real Math Example */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-6 text-center">
            The Math Often Favors Selling <span className="text-primary">As-Is</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Let's look at a real example with a typical Bay Area fixer:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Scenario A: Fix & List</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">After-repair sale price</span><span className="font-semibold">$950,000</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Renovation costs</span><span className="font-semibold text-red-600">−$85,000</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Agent commissions (5%)</span><span className="font-semibold text-red-600">−$47,500</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">6 months carrying costs</span><span className="font-semibold text-red-600">−$24,000</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Closing costs</span><span className="font-semibold text-red-600">−$12,000</span></div>
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="font-bold text-foreground">Net to you</span>
                  <span className="font-extrabold text-foreground">$781,500</span>
                </div>
                <div className="flex justify-between"><span className="text-muted-foreground">Time to close</span><span className="font-semibold">8–12 months</span></div>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-primary mb-4">Scenario B: Sell As-Is via HouseFlipDude</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Highest competing offer</span><span className="font-semibold">$750,000</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Renovation costs</span><span className="font-semibold text-primary">$0</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Agent commissions</span><span className="font-semibold text-primary">$0</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Carrying costs</span><span className="font-semibold text-primary">$0</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Closing costs to you</span><span className="font-semibold text-primary">$0</span></div>
                <div className="border-t border-primary/30 pt-3 flex justify-between">
                  <span className="font-bold text-foreground">Net to you</span>
                  <span className="font-extrabold text-primary">$750,000</span>
                </div>
                <div className="flex justify-between"><span className="text-muted-foreground">Time to close</span><span className="font-semibold text-primary">7–14 days</span></div>
              </div>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm">
            In this example, the net difference is only $31,500 — but you save 8–12 months of time, avoid the stress and risk of a renovation, and have cash in hand in under two weeks. For many homeowners, that trade-off is well worth it.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-8 text-center">
            How It Works — <span className="text-primary">3 Simple Steps</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                icon: <Zap className="w-5 h-5 text-primary" />,
                title: "Tell Us About the Property",
                desc: "Fill out the form below or call us at (415) 686-2846. Tell us about the property's condition, location, and your timeline. No judgment — we've seen everything."
              },
              {
                step: "2",
                icon: <Users className="w-5 h-5 text-primary" />,
                title: "Investors Compete to Buy Your Home",
                desc: "Within 24–48 hours, we present your property to our network of vetted Bay Area investors. Multiple investors evaluate the home and submit competing cash offers."
              },
              {
                step: "3",
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                title: "Pick Your Best Offer and Close",
                desc: "Review the competing offers, choose the best one, and close on your schedule. No repairs, no fees, no showings. Just a straightforward cash sale."
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
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What does 'sell as-is' actually mean?",
                a: "Selling as-is means you're selling the property in its current condition — no repairs, no updates, no cleaning. The buyer accepts the home exactly as it is. You don't need to fix anything, disclose anything beyond what California law requires, or make the home 'show-ready.'"
              },
              {
                q: "Will I get a fair price selling as-is?",
                a: "With HouseFlipDude, yes — because multiple investors compete for your property. Unlike selling to a single 'We Buy Houses' company that gives you one lowball offer, our marketplace creates competition that drives the price up. You'll know you're getting the best price the market will bear."
              },
              {
                q: "Do I need to clean out the house?",
                a: "No. You can leave furniture, personal belongings, junk — whatever you don't want. Our investors handle all cleanout and disposal after closing. Take what you want and leave the rest."
              },
              {
                q: "What if there are liens or title issues?",
                a: "Our investors are experienced with complex title situations including tax liens, mechanic's liens, and title defects. We work with title companies to resolve these issues as part of the closing process."
              },
              {
                q: "How fast can you close?",
                a: "As fast as 7–14 days for a straightforward sale. If you need more time — for example, to find your next home — you pick the closing date. There's no pressure to move faster than you're comfortable with."
              },
              {
                q: "Are there really zero fees?",
                a: "Yes. There are no fees, no commissions, and no closing costs charged to you. The purchasing investor pays all costs. The offer amount is the amount you receive at closing."
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
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-3xl prose prose-lg max-w-none">
          <h2 className="text-3xl font-extrabold text-foreground mb-6">Sell Your Bay Area Fixer-Upper for Top Dollar — No Repairs Needed</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you own a home in the San Francisco Bay Area that needs work — whether it's a dated property in San Francisco, a fixer-upper in Oakland, a home with foundation issues in San Jose, or a property with deferred maintenance anywhere in the Greater Bay Area — you don't have to spend tens of thousands of dollars on renovations before you can sell. HouseFlipDude's investor marketplace connects you directly with multiple vetted investors who specialize in buying homes exactly like yours, in any condition.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The traditional approach of fixing up a home before listing it on the MLS can make sense in some situations, but for many homeowners it's impractical, unaffordable, or simply not worth the time and stress. When you factor in renovation costs, agent commissions, carrying costs, and the risk of contractor delays or buyer financing falling through, the net proceeds from a traditional sale are often surprisingly close to what you'd receive from a competing cash offer through HouseFlipDude — and you get your money in days instead of months.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our founder, Kelly Beardslee, has been buying and renovating homes across the Bay Area for over 20 years. Through HouseFlipDude, Kelly has assembled a network of experienced, vetted investors who have collectively purchased hundreds of millions of dollars in Bay Area real estate. When you submit your property, these investors compete against each other to buy it — which means you get the best possible price, not a lowball offer from a single buyer. No fees, no commissions, no repairs. Just competing cash offers and a closing date you choose.
          </p>
        </div>
      </section>

      {/* CTA with Form */}
      <section id="get-offers" className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-foreground mb-4">
                Get Competing Cash Offers on Your As-Is Property
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Stop spending money on a house you want to sell. Fill out the form and our team will call you within 1 hour to discuss your property and start getting you competing offers.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Any condition — from cosmetic updates to full gut jobs",
                  "Multiple competing cash offers within 24–48 hours",
                  "Zero fees — all costs paid by the purchasing investor",
                  "You pick the closing date — as fast as 7–14 days",
                  "Leave anything behind — we handle cleanout",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground">Want to talk first?</p>
                    <p className="text-muted-foreground text-sm">Call us at <a href="tel:+14156862846" className="text-primary font-semibold hover:underline">(415) 686-2846</a>. We'll give you an honest assessment of whether your property is a fit for our investor network.</p>
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
