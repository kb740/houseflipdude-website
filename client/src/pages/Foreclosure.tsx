import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, AlertTriangle, CheckCircle, Clock, Shield, DollarSign, Home, Phone, Scale, Users } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { useSEO } from "@/hooks/useSEO";

export default function Foreclosure() {
  useSEO({
    title: "Avoid Foreclosure in the Bay Area | HouseFlipDude — Sell Fast, Save Your Equity",
    description: "Facing foreclosure on your Bay Area home? Get competing cash offers from investors and close in as little as 7 days. Save your equity and avoid the credit damage. Call (925) 237-1335.",
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-background to-primary/10 py-16 lg:py-20">
        <div className="container max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" /> Foreclosure Help — Act Now
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            Facing <span className="text-primary">Foreclosure</span> in the Bay Area? <br className="hidden md:block" />
            You Still Have Options
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            If you've received a Notice of Default or are behind on your mortgage payments, time is critical — but you're not out of options. Our network of vetted Bay Area investors can make competing cash offers on your home and close fast, often before the foreclosure process is complete.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                <Phone className="w-4 h-4" /> Call Us Now — (925) 237-1335
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

      {/* Understanding Foreclosure */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-6">Understanding the Foreclosure Timeline in California</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            California uses a non-judicial foreclosure process, which means the lender doesn't need to go to court. Understanding the timeline is critical because each stage narrows your window to act. The sooner you reach out, the more options you have.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <span className="text-lg font-extrabold text-amber-600">1</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Missed Payments (Day 1–90)</h3>
                <p className="text-muted-foreground">After missing payments, your lender will contact you about loss mitigation options. This is the earliest and best time to explore selling to avoid foreclosure entirely.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <span className="text-lg font-extrabold text-amber-600">2</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Notice of Default (Day 90+)</h3>
                <p className="text-muted-foreground">The lender files a Notice of Default (NOD) with the county recorder. You have approximately 90 days to cure the default or find an alternative solution. A fast cash sale is still very possible at this stage.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <span className="text-lg font-extrabold text-amber-600">3</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Notice of Trustee Sale (Day 180+)</h3>
                <p className="text-muted-foreground">If the default isn't cured, the lender schedules a trustee sale (auction). You typically have about 21 days from this notice. Time is running out, but a fast close with a cash investor can still stop the auction.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <span className="text-lg font-extrabold text-red-600">4</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Trustee Sale / Auction</h3>
                <p className="text-muted-foreground">Your home is sold at public auction. At this point, you lose control of the process entirely. The goal is to sell before this stage — preserving your equity and your credit as much as possible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sell Before Foreclosure */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-8 text-center">
            Why Selling <span className="text-primary">Before Foreclosure</span> Is the Smart Move
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="w-6 h-6 text-primary" />,
                title: "Protect Your Credit",
                desc: "A foreclosure stays on your credit report for 7 years and can drop your score by 100–160 points. Selling before foreclosure minimizes the damage and lets you recover faster."
              },
              {
                icon: <DollarSign className="w-6 h-6 text-primary" />,
                title: "Keep Your Equity",
                desc: "At a trustee sale, your home may sell for less than market value. By selling to competing investors through HouseFlipDude, you maximize the price and keep the equity you've built."
              },
              {
                icon: <Clock className="w-6 h-6 text-primary" />,
                title: "Close on Your Timeline",
                desc: "Our investors can close in as little as 7–14 days — fast enough to beat most foreclosure deadlines. You pick the closing date that works for your situation."
              },
              {
                icon: <Home className="w-6 h-6 text-primary" />,
                title: "Sell As-Is, No Repairs",
                desc: "When you're facing foreclosure, the last thing you need is to spend money on repairs. Our investors buy homes in any condition — no cleaning, no staging, no fix-up required."
              },
              {
                icon: <Scale className="w-6 h-6 text-primary" />,
                title: "Avoid Deficiency Judgments",
                desc: "In some cases, if a foreclosure sale doesn't cover the full loan balance, the lender can pursue you for the difference. A negotiated sale can help you avoid this."
              },
              {
                icon: <Users className="w-6 h-6 text-primary" />,
                title: "Multiple Offers, Better Price",
                desc: "Unlike selling to a single 'We Buy Houses' company, HouseFlipDude puts your property in front of multiple competing investors — driving the price up, not down."
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

      {/* Foreclosure vs HouseFlipDude */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-8 text-center">
            Foreclosure vs. Selling Through <span className="text-primary">HouseFlipDude</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Letting Foreclosure Happen
              </h3>
              <ul className="space-y-3">
                {[
                  "Credit score drops 100–160 points for 7 years",
                  "You lose all equity in the property",
                  "Public record — visible to future landlords and employers",
                  "Possible deficiency judgment for remaining loan balance",
                  "You have no control over the timeline or sale price",
                  "Emotional toll of losing your home involuntarily",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Selling Through HouseFlipDude
              </h3>
              <ul className="space-y-3">
                {[
                  "Competing cash offers — investors bid against each other",
                  "Close in as little as 7–14 days to beat deadlines",
                  "Keep the equity above what you owe",
                  "Zero fees to you — all costs paid by the buyer",
                  "You pick the closing date and stay in control",
                  "Walk away with cash and a fresh start",
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
                title: "Tell Us About Your Situation",
                desc: "Fill out the form below or call us at (925) 237-1335. We'll ask about your property, your timeline, and where you are in the foreclosure process. Everything is confidential."
              },
              {
                step: "2",
                title: "We Present Your Property to Competing Investors",
                desc: "Within 24–48 hours, we share your property details with our network of vetted Bay Area investors. Multiple investors evaluate your home and submit competing offers."
              },
              {
                step: "3",
                title: "Choose the Best Offer and Close Fast",
                desc: "You review the competing offers and choose the one that works best for you. Close on your timeline — often in as little as 7–14 days. No fees, no repairs, no hassle."
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
                q: "Can I sell my house if I've already received a Notice of Default?",
                a: "Yes. You can sell your home at any point before the trustee sale. In fact, many homeowners sell after receiving a NOD. The key is acting quickly — our investors can close in as little as 7–14 days."
              },
              {
                q: "What if I owe more than my house is worth?",
                a: "If you're underwater on your mortgage, we can help you explore a short sale, where the lender agrees to accept less than the full balance. Our team has experience negotiating with lenders to make this work."
              },
              {
                q: "Will selling stop the foreclosure?",
                a: "Yes. Once the sale closes and the lender is paid off (or agrees to a short sale), the foreclosure process stops. You avoid the foreclosure on your credit report and walk away on your terms."
              },
              {
                q: "Are there really no fees?",
                a: "Correct. There are zero fees to you as the homeowner. All closing costs, title fees, and commissions are paid by the purchasing investor. The offer you accept is the amount you receive."
              },
              {
                q: "How is this different from those 'We Buy Houses' companies?",
                a: "Most 'We Buy Houses' companies give you one lowball offer and hope you'll take it. With HouseFlipDude, multiple investors compete to buy your property, which drives the price up. Competition means a better deal for you."
              },
              {
                q: "What condition does my house need to be in?",
                a: "Any condition. Our investors buy homes that need full renovations, homes with deferred maintenance, homes with code violations — it doesn't matter. You don't need to make any repairs or even clean."
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
          <h2 className="text-3xl font-extrabold text-foreground mb-6">Avoid Foreclosure in the San Francisco Bay Area</h2>
          <p className="text-muted-foreground leading-relaxed">
            Foreclosure is one of the most stressful experiences a homeowner can face. Whether you're in San Francisco, Oakland, San Jose, Contra Costa County, or anywhere in the Greater Bay Area, the pressure of missed mortgage payments, lender notices, and the threat of losing your home can feel overwhelming. But it's important to know that you have options — and selling your home to a cash investor through HouseFlipDude's competing-offers marketplace may be the fastest, most financially sound path forward.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Unlike traditional real estate transactions that can take 60–90 days, our network of experienced Bay Area investors can evaluate your property and make cash offers within 24–48 hours. With the ability to close in as little as 7–14 days, a sale through HouseFlipDude can often be completed well before a scheduled trustee sale. This means you can pay off your mortgage, protect your credit, preserve your equity, and move forward with your life — on your terms.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our founder, Kelly Beardslee, has been involved in residential real estate investing in the Bay Area for over 20 years, purchasing hundreds of homes across 14 counties. Through HouseFlipDude, Kelly has built deep relationships with vetted investor clients who have collectively deployed hundreds of millions of dollars in real estate investment capital. When you work with HouseFlipDude, you're not dealing with a wholesaler or a single lowball buyer — you're accessing a marketplace where real, qualified investors compete to purchase your property for top dollar.
          </p>
        </div>
      </section>

      {/* CTA with Form */}
      <section id="get-offers" className="py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-foreground mb-4">
                Don't Wait Until It's Too Late
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every day counts when you're facing foreclosure. The sooner you reach out, the more options you have. Fill out the form and our team will call you within 1 hour to discuss your situation confidentially.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Confidential — your information is never shared publicly",
                  "No obligation — get offers with zero commitment",
                  "No fees — all costs are paid by the purchasing investor",
                  "Fast close — as little as 7–14 days",
                  "Any condition — no repairs needed",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground">Prefer to talk now?</p>
                    <p className="text-muted-foreground text-sm">Call us directly at <a href="tel:+19252371335" className="text-primary font-semibold hover:underline">(925) 237-1335</a>. We understand the urgency and are here to help.</p>
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
