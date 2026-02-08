import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { blogPosts } from "./Blog";

interface BlogContent {
  title: string;
  category: string;
  date: string;
  readTime: string;
  sections: { heading: string; content: string }[];
}

const blogContent: Record<string, BlogContent> = {
  "how-to-sell-inherited-house-bay-area": {
    title: "How to Sell an Inherited House in the Bay Area: A Complete Guide",
    category: "Inherited Properties",
    date: "February 5, 2026",
    readTime: "8 min read",
    sections: [
      { heading: "Inheriting a Bay Area Property", content: "Inheriting a house in the San Francisco Bay Area can be both a blessing and a burden. With median home prices exceeding $1 million in many Bay Area cities, the property likely represents significant value. But it also comes with property taxes, maintenance costs, insurance, and the emotional weight of dealing with a loved one's estate. If the house needs work — and many inherited properties do — the costs can add up quickly." },
      { heading: "Understanding Probate in California", content: "Before you can sell an inherited property in California, you'll typically need to go through probate — the legal process of settling the deceased person's estate. California probate can take 6-18 months, though simplified procedures exist for smaller estates. If the property was held in a living trust, you may be able to avoid probate entirely. Consult with a probate attorney to understand your specific situation." },
      { heading: "Your Options for Selling", content: "You generally have three options: list with a real estate agent (which means repairs, staging, showings, and 5-6% in commissions), sell to a single cash buyer (fast but often at a steep discount), or use a service like HouseFlipDude where multiple investors compete for your property. The third option gives you the speed and convenience of a cash sale with the competitive pricing of an open market." },
      { heading: "Why Competing Offers Matter for Inherited Properties", content: "Inherited properties are often in less-than-perfect condition. The previous owner may have deferred maintenance for years. When you get a single cash offer, the buyer knows they're your only option and prices accordingly. When multiple investors compete, they know they need to put their best foot forward — which typically means a significantly higher price for you." },
      { heading: "Tax Implications to Consider", content: "One major advantage of inherited property is the 'stepped-up basis' — the property's tax basis is reset to its fair market value at the time of the owner's death. This can significantly reduce or eliminate capital gains taxes when you sell. However, tax laws are complex and change frequently, so consult with a tax professional about your specific situation." },
      { heading: "Getting Started", content: "If you've inherited a Bay Area property and want to explore your options, the first step is simple: submit your property info through our form. Kelly will personally call you within 24 hours to discuss your situation, answer your questions, and explain how competing investor offers can get you top dollar — even for a property that needs work." },
    ],
  },
  "avoid-foreclosure-san-francisco": {
    title: "5 Ways to Avoid Foreclosure in San Francisco (2026 Guide)",
    category: "Foreclosure",
    date: "January 28, 2026",
    readTime: "6 min read",
    sections: [
      { heading: "Facing Foreclosure in the Bay Area", content: "If you're behind on mortgage payments in San Francisco or the Bay Area, you're not alone — and you have more options than you might think. The key is acting quickly. The sooner you explore your options, the more leverage you have to protect your equity and your credit." },
      { heading: "1. Loan Modification", content: "Contact your lender about modifying your loan terms. Many lenders would rather adjust your payment than go through the foreclosure process. You may be able to extend your loan term, reduce your interest rate, or temporarily reduce payments. California law requires lenders to evaluate you for modification options before proceeding with foreclosure." },
      { heading: "2. Forbearance Agreement", content: "If your financial hardship is temporary — a job loss, medical issue, or other short-term setback — a forbearance agreement lets you pause or reduce payments for a set period. Once you're back on your feet, you resume payments (and typically repay the missed amount over time)." },
      { heading: "3. Sell Your House Before Foreclosure", content: "If keeping the house isn't realistic, selling before foreclosure protects your credit and lets you walk away with equity. In the Bay Area, even distressed properties have significant value. Through HouseFlipDude, you can get competing cash offers from investors and close in as little as 7 days — often fast enough to beat the foreclosure timeline." },
      { heading: "4. Short Sale", content: "If you owe more than your house is worth, a short sale lets you sell for less than the mortgage balance with your lender's approval. This is better for your credit than a foreclosure, though it still has consequences. Short sales can take months to process, so start early." },
      { heading: "5. Bankruptcy Protection", content: "Filing for bankruptcy can temporarily halt foreclosure proceedings through an automatic stay. Chapter 13 bankruptcy may allow you to catch up on missed payments over time while keeping your home. This is a serious step with long-term consequences, so consult with a bankruptcy attorney." },
      { heading: "Time Is Your Most Valuable Asset", content: "The most important thing when facing foreclosure is to act now. Every day you wait reduces your options. If selling is the right move for your situation, getting competing offers from investors can happen in as little as 48 hours — giving you the speed you need to protect your equity." },
    ],
  },
  "sell-fixer-upper-bay-area-without-repairs": {
    title: "Selling a Fixer-Upper in the Bay Area Without Making Repairs",
    category: "Selling Tips",
    date: "January 20, 2026",
    readTime: "7 min read",
    sections: [
      { heading: "The Fixer-Upper Dilemma", content: "You have a house that needs work. Maybe a lot of work. The conventional wisdom says you need to renovate before selling to get the best price. But in the Bay Area, that conventional wisdom is often wrong — especially when you factor in the cost of renovations, the time involved, and the risk of going over budget." },
      { heading: "The True Cost of Renovating Before Selling", content: "Bay Area renovation costs are among the highest in the nation. A basic kitchen remodel can run $50,000-$100,000. A full home renovation can easily exceed $200,000-$500,000 depending on the scope. Add in permits (which can take months in cities like San Francisco), contractor availability, and the carrying costs of the property during renovation, and the math often doesn't work in your favor." },
      { heading: "Why Investors Pay Strong Prices for Fixers", content: "Professional investors have systems, contractor relationships, and economies of scale that individual homeowners don't. They can renovate a property for 30-50% less than a homeowner would pay. This means they can afford to pay you a strong price for your fixer because their renovation costs are lower. When multiple investors compete for your property, this dynamic works even more in your favor." },
      { heading: "The HouseFlipDude Advantage", content: "Instead of spending months and hundreds of thousands on renovations, you can submit your property info and have competing offers from experienced investors within 48 hours. These investors specialize in buying fixers — it's literally what they do for a living. They know how to evaluate a property's potential and price it accordingly." },
      { heading: "What 'As-Is' Really Means", content: "When we say we buy houses as-is, we mean it. Leave the old carpet, the outdated kitchen, the leaky roof, the overgrown yard. Don't clean, don't paint, don't fix anything. Our investors factor the condition into their offers and handle all repairs after closing. You walk away with cash and zero hassle." },
    ],
  },
  "bay-area-real-estate-market-2026": {
    title: "Bay Area Real Estate Market 2026: What Sellers Need to Know",
    category: "Market Insights",
    date: "January 15, 2026",
    readTime: "10 min read",
    sections: [
      { heading: "2026 Market Overview", content: "The San Francisco Bay Area real estate market in 2026 continues to be one of the most dynamic in the nation. While prices have moderated from their pandemic-era peaks in some areas, the fundamental drivers of Bay Area real estate — limited supply, strong employment, and desirable lifestyle — remain firmly in place." },
      { heading: "What This Means for Sellers", content: "For homeowners looking to sell, the current market presents both opportunities and challenges. Buyers are more selective than during the frenzy years, which means properties that need work may sit longer on the traditional market. However, investor demand for fixers remains strong, as renovation margins are still attractive in most Bay Area markets." },
      { heading: "The Investor Market", content: "Cash buyers and investors continue to be a significant force in Bay Area real estate. With interest rates affecting traditional buyers' purchasing power, cash offers have become even more valuable. Properties that might struggle on the open market — fixers, inherited homes, properties with issues — are finding strong demand from investor networks." },
      { heading: "County-by-County Outlook", content: "San Francisco and San Mateo counties remain the highest-priced markets, with even distressed properties commanding strong prices. Alameda and Contra Costa counties offer more affordable entry points with strong appreciation potential. Sacramento and the Central Valley continue to attract Bay Area investors seeking higher returns." },
      { heading: "Selling Strategy for 2026", content: "In this market, the key for sellers is maximizing competition for their property. Whether you list traditionally or sell to investors, getting multiple offers is crucial. For properties that need work, the HouseFlipDude model — where multiple investors compete — often outperforms both traditional listings and single cash buyer offers." },
    ],
  },
  "probate-sale-california-guide": {
    title: "Probate Sales in California: What You Need to Know",
    category: "Probate",
    date: "January 8, 2026",
    readTime: "9 min read",
    sections: [
      { heading: "What Is Probate?", content: "Probate is the legal process of settling a deceased person's estate, including distributing their assets and paying their debts. In California, if the deceased owned real property worth more than $184,500 (as of 2026) and it wasn't held in a trust, probate is typically required before the property can be sold." },
      { heading: "The California Probate Timeline", content: "Standard California probate takes 6-18 months, though complex estates can take longer. The process involves filing a petition, notifying creditors, inventorying assets, and obtaining court approval for the sale. If the property needs to be sold quickly — to cover estate expenses, prevent deterioration, or distribute assets — the timeline can be a significant challenge." },
      { heading: "Selling Property During Probate", content: "Selling a house during probate requires court approval in most cases. The executor or administrator must petition the court for permission to sell, and the court may require an independent appraisal. In some cases, the court may require an 'overbid' process where other buyers can bid at a court hearing — adding time and uncertainty." },
      { heading: "Alternatives to Traditional Probate Sales", content: "If the property was held in a living trust, you may be able to avoid probate entirely and sell the property directly. Even within probate, California's Independent Administration of Estates Act (IAEA) allows executors to sell property without court confirmation in many cases, significantly speeding up the process." },
      { heading: "How HouseFlipDude Helps with Probate Properties", content: "Probate properties are often in less-than-ideal condition — the previous owner may have been unable to maintain the home in their final years. Our investor network specializes in buying these properties as-is. Kelly has extensive experience with probate sales and can guide you through the process, working within the legal requirements while getting you competing offers for top dollar." },
    ],
  },
  "cash-offer-vs-traditional-listing-bay-area": {
    title: "Cash Offer vs. Traditional Listing: Which Is Better for Bay Area Sellers?",
    category: "Selling Tips",
    date: "December 30, 2025",
    readTime: "7 min read",
    sections: [
      { heading: "The Big Decision", content: "When it's time to sell your Bay Area home, you face a fundamental choice: list with a real estate agent on the open market, or sell directly to a cash buyer. Both have advantages, and the right choice depends on your property's condition, your timeline, and your financial goals." },
      { heading: "Traditional Listing: Pros and Cons", content: "Listing with an agent gives you access to the broadest pool of buyers and typically achieves the highest sale price — if your home is in good condition. The downsides: 5-6% in agent commissions, potential repair costs, staging expenses, months of showings, and the risk of deals falling through due to financing or inspection issues. For a $1M Bay Area home, commissions alone cost $50,000-$60,000." },
      { heading: "Single Cash Buyer: Pros and Cons", content: "Selling to a single cash buyer (the typical 'We Buy Houses' model) offers speed and convenience. No repairs, no showings, no commissions. The downside: with only one buyer, there's no competition — and the offer often reflects that. Single buyers know they're your only option and price accordingly, often 20-30% below market value." },
      { heading: "The Third Option: Competing Cash Offers", content: "HouseFlipDude offers a third path that combines the best of both worlds. Multiple investors compete for your property, which drives up the price (like a traditional listing). But you still get the speed, convenience, and as-is sale of a cash transaction. No repairs, no commissions to you, and you pick the closing date." },
      { heading: "When Each Option Makes Sense", content: "Traditional listing is best for move-in-ready homes where you have time and money to invest in the process. A single cash buyer makes sense if speed is your absolute top priority and price is secondary. Competing cash offers through HouseFlipDude is ideal when you want the best price for a property in any condition, without the hassle and cost of a traditional sale." },
    ],
  },
};

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = blogContent[params.slug || ""];

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-6">We couldn't find that article. Check our blog for more content.</p>
        <Link href="/blog">
          <Button>Back to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <article>
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/30 py-16 lg:py-20">
          <div className="container max-w-3xl">
            <Link href="/blog" className="inline-flex items-center gap-1 text-primary hover:underline text-sm font-medium mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
              <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground rounded-full px-2.5 py-0.5 font-medium text-xs">
                <Tag className="w-3 h-3" /> {post.category}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              {post.title}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container max-w-3xl">
            <div className="prose prose-lg max-w-none">
              {post.sections.map((s, i) => (
                <div key={i} className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">{s.heading}</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{s.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inline CTA */}
        <section className="py-12 bg-muted/50">
          <div className="container max-w-3xl">
            <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Ready to Get Competing Offers?</h3>
              <p className="text-muted-foreground mb-4">Submit your property info and let investors compete for your house.</p>
              <LeadCaptureForm variant="sidebar" />
            </div>
          </div>
        </section>
      </article>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold mb-4">Have Questions? Let's Talk.</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Kelly personally handles every call. No salespeople, no scripts — just straight answers.
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
