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
  "realtors-partner-with-houseflipdude-fixer-listings": {
    title: "Realtors: How to Sell Your Fixer Listings Faster and for More Money",
    category: "Realtor Partnerships",
    date: "February 8, 2026",
    readTime: "10 min read",
    sections: [
      { heading: "The Fixer Listing Problem Every Realtor Knows", content: "If you've been a Realtor in the Bay Area for any length of time, you've had that listing — the one that needs a new roof, a full kitchen remodel, and maybe some foundation work. Traditional buyers can't get financing for it. The few cash buyers who show interest make offers so low your seller is insulted. It sits on the MLS for 60, 90, even 120 days while your seller grows increasingly frustrated. You've done everything right — priced it competitively, marketed it aggressively, held open houses — but the property's condition is working against you. Sound familiar?" },
      { heading: "Why Traditional Channels Struggle with Fixers", content: "The traditional real estate model is built for move-in-ready homes. Buyers get pre-approved for mortgages, tour homes that are staged and polished, and make offers contingent on inspections and appraisals. Fixers break this model at every step. Most lenders won't finance a property that needs significant work. FHA and VA loans have strict property condition requirements. Even conventional lenders balk at properties with major issues. This leaves you with a small pool of cash buyers — and when there's only one or two interested parties, they have all the leverage. They know your seller is running out of options, and they price their offers accordingly." },
      { heading: "The Competing Investor Model: A Game-Changer for Realtors", content: "HouseFlipDude operates differently from any single cash buyer or wholesaler. We maintain a network of vetted, funded investors who specialize in buying Bay Area fixers. When you bring us a property, we don't make one offer — we present the property to our entire investor network and let them compete against each other. This competition is the key. When investors know they're bidding against other investors, they can't lowball. They have to put their best offer forward or risk losing the deal. The result is consistently higher prices for your seller — and a closed deal for you." },
      { heading: "Model 1: You Have the Fixer Listing", content: "If you have a fixer listing that's struggling on the MLS — or you've just taken one and want to explore all options — here's how the partnership works. You send us the property details and your listing information. We present the property to our network of competing investors. Within 48 hours, you receive multiple cash offers. Your seller picks the best one, and the deal closes in as little as 7 days. Your listing agreement stays intact. Your commission is fully protected. You're not giving up anything — you're adding a powerful tool to your arsenal for selling tough properties." },
      { heading: "Model 2: You Know of a Fixer (But It's Not Your Listing)", content: "Maybe you've driven past a property that clearly needs work. Maybe a friend or neighbor has mentioned they need to sell a house that's in rough shape. Maybe you've gotten a lead you can't take on because the property needs too much work for your typical buyer pool. In any of these situations, you can refer the property to HouseFlipDude and earn a referral commission. You don't need a listing agreement. Just make the introduction — tell us about the property and the homeowner (with their permission) — and we take it from there. If one of our investors purchases the property, you receive a referral commission paid by the investor at closing. It's a way to monetize your network and local knowledge without taking on a full listing." },
      { heading: "We're Not Wholesalers — And That Matters", content: "You may have had bad experiences with wholesalers who approach your clients behind your back, try to tie up properties with no intention of closing, or operate without a license. We're the opposite. HouseFlipDude is a licensed California Real Estate Broker (DRE# 01205925). We don't assign contracts. We don't use double escrows. We don't operate in the shadows. Our model is transparent: multiple real investors compete, the homeowner (and their Realtor) see all the offers, and the best one wins. Your commission is always protected, and we work with you — never around you." },
      { heading: "What Types of Properties Work Best", content: "Our investor network specializes in properties that are difficult to sell through traditional channels. This includes homes needing major renovations, properties with foundation or structural issues, fire-damaged homes, hoarder houses, properties with code violations, inherited or probate properties, homes in pre-foreclosure, tenant-occupied properties, and any home that's been sitting on the MLS too long. If the property is in the greater Bay Area and needs work, our investors are interested." },
      { heading: "Your Commission Is Always Protected", content: "Let's be clear about the economics. If you have the listing, your listing commission is fully honored — just as it would be with any other buyer. The investor who purchases the property pays your commission per your listing agreement. For referrals, you earn a commission paid by the purchasing investor at closing. We agree on terms upfront before anything moves forward, so there are no surprises. This isn't about taking money out of your pocket — it's about putting more in it by helping you close deals that would otherwise fall through or sit indefinitely." },
      { heading: "A Real Example", content: "A Realtor in Contra Costa County had a 3-bedroom ranch from 1962 that needed everything — kitchen, roof, foundation work. After 60 days on the MLS, the best offer was from a single investor at a price the seller found unacceptable. The Realtor reached out to HouseFlipDude. Within 48 hours, five investors submitted competing offers. The highest came in $45,000 above the best MLS offer. The property closed in 14 days, all cash, no contingencies. The seller was thrilled. The Realtor earned their full commission. And it happened because competition works." },
      { heading: "How to Get Started", content: "If you have a fixer listing or know of a property that could benefit from competing investor offers, reaching out is easy. Call us directly at (415) 686-2846 — you'll speak with a licensed broker, not a call center. Or email property details to kb@houseflipdude.com. You can also submit the property through the form on our website. We'll review the details, present it to our investor network, and have competing offers back to you within 48 hours. No obligation, no pressure, and no risk to your client relationship. Just a better way to sell fixers." },
    ],
  },
  "real-estate-wholesalers-bay-area-what-homeowners-should-know": {
    title: "Real Estate Wholesalers in the Bay Area: What Homeowners Should Know Before Accepting a Cash Offer",
    category: "Consumer Protection",
    date: "February 8, 2026",
    readTime: "12 min read",
    sections: [
      { heading: "The Rise of Real Estate Wholesaling in the Bay Area", content: "If you've received a mailer, seen a bandit sign, or gotten a call from someone saying they want to buy your house for cash, there's a significant chance you're not dealing with an actual buyer. You may be dealing with a real estate wholesaler — and understanding how wholesaling works could save you tens of thousands of dollars. Wholesaling has exploded in the Bay Area in recent years, with hundreds of individuals and companies using this model to profit from homeowners who don't fully understand what's happening behind the scenes." },
      { heading: "How the Wholesaling Model Actually Works", content: "Here's what a wholesaler does: they contact you, often through aggressive marketing, and make what seems like a reasonable cash offer on your property. You sign a purchase agreement, believing you've found your buyer. But the wholesaler has no intention of actually buying your house. Instead, they immediately begin marketing your property — privately — to their network of real investors, looking for someone willing to pay significantly more than what they offered you. When they find that investor, they either assign your contract to them (pocketing the difference as an 'assignment fee') or use a double escrow to buy and immediately resell the property. Either way, the wholesaler profits from the spread between their contract price with you and what the real investor pays." },
      { heading: "The Numbers Tell the Story", content: "Let's say a wholesaler offers you $500,000 for your Bay Area fixer-upper. You accept, thinking it's a fair price. The wholesaler then finds an investor willing to pay $560,000 — or sometimes even $600,000 or more. The wholesaler pockets $60,000 to $100,000 in profit, and you never know it happened. That's money that should have gone to you, the homeowner. In the Bay Area, where property values are high, these spreads can be enormous. We've heard of wholesaler profits exceeding $100,000 on a single deal — all at the homeowner's expense." },
      { heading: "The Deception Problem", content: "Perhaps the most troubling aspect of wholesaling is the near-universal lack of transparency. Almost all wholesalers present themselves as the actual buyer. They don't tell you they plan to assign your contract. They don't disclose that they're marketing your property to other investors at a higher price. They don't reveal that their entire business model depends on getting your house under contract for as little as possible. This is, frankly, deceptive and sleazy. It's bad for consumers, and it takes advantage of homeowners who are often in difficult situations — facing foreclosure, dealing with an inherited property, going through a divorce, or simply needing to sell quickly." },
      { heading: "'We Buy Houses' Companies: Not Always What They Seem", content: "Many of the 'We Buy Houses' companies you see advertising — from national franchises like WeBuyUglyHouses to local operations — may be legitimate investors, but a significant number operate as wholesalers. Even when they are legitimate direct buyers, their entire focus is to acquire your property for the lowest possible price. There's no competition, no price discovery, and no way for you to know if you're leaving money on the table. When you sell to a single buyer — whether they're a wholesaler or a legitimate investor — you're at a fundamental disadvantage. Their goal is to pay as little as possible. Your goal is to get as much as possible. Without competition, the buyer always wins." },
      { heading: "Red Flags You're Dealing with a Wholesaler", content: "Watch for these warning signs: they pressure you to sign quickly without giving you time to think. The contract has an 'assignment' clause or mentions 'and/or assigns' after the buyer's name. They can't provide proof of funds showing they personally have the money to close. They won't show you a real estate license. They found you through a handwritten mailer or bandit sign. They offer significantly below market value with no clear justification. They ask for an unusually long inspection or due diligence period. The buyer name on the contract is an LLC you can't find any information about." },
      { heading: "The Better Alternative: Let Investors Compete", content: "The wholesaler model exists because there's a disconnect between homeowners and real investors. Wholesalers insert themselves as middlemen, profiting from that gap. But what if you could eliminate the middleman entirely and connect directly with multiple competing investors? That's exactly what HouseFlipDude does. Instead of accepting one lowball offer from someone who may not even be a real buyer, you submit your property information and let our network of vetted, funded investors compete to buy your house. Competition drives the price up — not down. Every investor knows they're competing against others, so they put their best offer forward." },
      { heading: "Why Competition Changes Everything", content: "Think of it like selling a car. Would you rather accept the first offer from one buyer who's planning to immediately resell it for a profit? Or would you rather have multiple buyers compete against each other, driving the price up to what your car is actually worth? When investors compete for your property through HouseFlipDude, you get the speed and convenience of a cash sale with the competitive pricing that comes from multiple buyers bidding against each other. There are no hidden assignments, no double escrows, and no wholesaler pocketing the spread. The full value goes to you." },
      { heading: "Protect Yourself: Questions to Ask Any Cash Buyer", content: "Before you sign anything with anyone who offers to buy your house, ask these questions: Are you the actual buyer, or will you be assigning this contract to someone else? Can you provide proof of funds showing you personally have the money to close? Do you hold a California real estate license, and what's your DRE number? Will the name on the purchase contract be the same entity that closes? Have you ever assigned a contract or used a double escrow? A legitimate buyer will answer these questions honestly and directly. A wholesaler will dodge, deflect, or outright lie." },
      { heading: "The Bottom Line", content: "You deserve to know who's actually buying your house and what it's really worth. You deserve transparency, honesty, and the best possible price. Don't settle for one lowball offer from someone who may not even be a real buyer. Let multiple vetted investors compete for your property through HouseFlipDude, and know that you're getting a fair price driven by real market competition — not a price designed to maximize someone else's profit at your expense." },
    ],
  },
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
      { heading: "Getting Started", content: "If you've inherited a Bay Area property and want to explore your options, the first step is simple: submit your property info through our form. Our team will personally call you within 1 hour to discuss your situation, answer your questions, and explain how competing investor offers can get you top dollar — even for a property that needs work." },
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
      { heading: "How HouseFlipDude Helps with Probate Properties", content: "Probate properties are often in less-than-ideal condition — the previous owner may have been unable to maintain the home in their final years. Our investor network specializes in buying these properties as-is. Our team has extensive experience with probate sales and can guide you through the process, working within the legal requirements while getting you competing offers for top dollar." },
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
            Our team personally handles every call. No salespeople, no scripts — just straight answers.
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
