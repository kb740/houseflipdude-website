import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "the-great-brain-drain",
    title: "The Great Brain Drain",
    excerpt: "What happens when experienced professionals willingly teach AI their hard-won expertise? A Bay Area house flipper with 20+ years of experience reflects on knowledge harvesting, the march toward super-abundance, and what it means for the human spirit.",
    category: "Industry Insights",
    date: "February 11, 2026",
    readTime: "10 min read",
  },
  {
    slug: "foreclosure-timeline-california-how-to-stop-it",
    title: "The California Foreclosure Timeline: Every Stage Explained and How to Stop It",
    excerpt: "From the first missed payment to the trustee sale, here's exactly what happens during foreclosure in California — and the specific actions you can take at each stage to protect your home and equity.",
    category: "Foreclosure",
    date: "February 10, 2026",
    readTime: "14 min read",
  },
  {
    slug: "inherited-house-bay-area-complete-decision-guide",
    title: "Inherited a House in the Bay Area? The Complete Decision-Making Guide for 2026",
    excerpt: "Keep it, rent it, renovate and sell, or sell as-is? A comprehensive guide to every option when you inherit Bay Area property — with real numbers, tax implications, and timelines.",
    category: "Inherited Properties",
    date: "February 10, 2026",
    readTime: "15 min read",
  },
  {
    slug: "sell-house-as-is-bay-area-maximize-value",
    title: "How to Sell Your Bay Area House As-Is and Still Get Top Dollar",
    excerpt: "Selling as-is doesn't mean settling for less. Learn the strategies Bay Area homeowners are using to sell properties in any condition while maximizing their sale price through competing investor offers.",
    category: "Selling Tips",
    date: "February 10, 2026",
    readTime: "12 min read",
  },
  {
    slug: "realtors-partner-with-houseflipdude-fixer-listings",
    title: "Realtors: How to Sell Your Fixer Listings Faster and for More Money",
    excerpt: "Have a fixer listing that's sitting on the MLS? Or know of a property that could use competing investor offers? Learn how Bay Area Realtors are partnering with HouseFlipDude to close tough deals and earn commissions.",
    category: "Realtor Partnerships",
    date: "February 8, 2026",
    readTime: "10 min read",
  },
  {
    slug: "real-estate-wholesalers-bay-area-what-homeowners-should-know",
    title: "Real Estate Wholesalers in the Bay Area: What Homeowners Should Know Before Accepting a Cash Offer",
    excerpt: "That 'cash buyer' who wants your house might not be a buyer at all. Learn how wholesalers operate, why their model costs you money, and how to protect yourself with competing investor offers.",
    category: "Consumer Protection",
    date: "February 8, 2026",
    readTime: "12 min read",
  },
  {
    slug: "how-to-sell-inherited-house-bay-area",
    title: "How to Sell an Inherited House in the Bay Area: A Complete Guide",
    excerpt: "Inherited a property in the San Francisco Bay Area? Learn your options for selling — from probate requirements to getting competing cash offers from investors.",
    category: "Inherited Properties",
    date: "February 5, 2026",
    readTime: "8 min read",
  },
  {
    slug: "avoid-foreclosure-san-francisco",
    title: "5 Ways to Avoid Foreclosure in San Francisco (2026 Guide)",
    excerpt: "Facing foreclosure on your Bay Area home? You have more options than you think. Here's how to stop foreclosure and protect your equity.",
    category: "Foreclosure",
    date: "January 28, 2026",
    readTime: "6 min read",
  },
  {
    slug: "sell-fixer-upper-bay-area-without-repairs",
    title: "Selling a Fixer-Upper in the Bay Area Without Making Repairs",
    excerpt: "Think you need to renovate before selling? Think again. Here's why Bay Area investors are paying top dollar for houses in any condition.",
    category: "Selling Tips",
    date: "January 20, 2026",
    readTime: "7 min read",
  },
  {
    slug: "bay-area-real-estate-market-2026",
    title: "Bay Area Real Estate Market 2026: What Sellers Need to Know",
    excerpt: "A look at current Bay Area market conditions, pricing trends, and what they mean for homeowners thinking about selling their property.",
    category: "Market Insights",
    date: "January 15, 2026",
    readTime: "10 min read",
  },
  {
    slug: "probate-sale-california-guide",
    title: "Probate Sales in California: What You Need to Know",
    excerpt: "Navigating probate in California can be overwhelming. Here's a straightforward guide to selling a house in probate — and how to skip the hassle.",
    category: "Probate",
    date: "January 8, 2026",
    readTime: "9 min read",
  },
  {
    slug: "cash-offer-vs-traditional-listing-bay-area",
    title: "Cash Offer vs. Traditional Listing: Which Is Better for Bay Area Sellers?",
    excerpt: "Should you list your Bay Area home with an agent or accept a cash offer? We break down the pros, cons, and when each option makes sense.",
    category: "Selling Tips",
    date: "December 30, 2025",
    readTime: "7 min read",
  },
];

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/30 py-16 lg:py-20">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Bay Area <span className="text-primary">Real Estate</span> Blog
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Expert insights on selling your Bay Area home, market trends, and tips for homeowners
            dealing with inherited properties, foreclosure, and more.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {blogPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="bg-card rounded-xl border border-border p-6 lg:p-8 hover:border-primary hover:shadow-lg transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
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
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-medium text-sm mt-3">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Have a House to Sell?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Skip the reading and get straight to competing offers. Submit your property info in 60 seconds.
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
