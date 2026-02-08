import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, MapPin, ArrowRight, Quote } from "lucide-react";

const reviews = [
  { name: "Maria G.", location: "Oakland, CA", text: "I inherited a house that needed tons of work. HouseFlipDude got me 4 competing offers in 48 hours. I got way more than the first investor who knocked on my door offered. The team was honest and upfront about everything.", rating: 5, situation: "Inherited Property" },
  { name: "David & Sarah T.", location: "San Jose, CA", text: "The team was straight-up honest about everything. No pressure, no games. The whole process was smoother than we expected and we closed in 2 weeks. We'd been dreading selling our fixer for years.", rating: 5, situation: "Fixer-Upper" },
  { name: "Robert L.", location: "San Mateo, CA", text: "After dealing with pushy 'we buy houses' companies, HouseFlipDude was a breath of fresh air. Casual, professional, and got me top dollar for my fixer. The team is the real deal.", rating: 5, situation: "Downsizing" },
  { name: "Patricia W.", location: "San Francisco, CA", text: "My mom's house had been sitting vacant for a year after she passed. I live out of state and had no idea where to start. The team walked me through everything over the phone and handled it all. Three investors competed and I got $40K more than the first offer.", rating: 5, situation: "Probate Sale" },
  { name: "James & Linda K.", location: "Contra Costa, CA", text: "We were behind on payments and needed to sell fast. The team didn't judge, didn't lecture — just got to work. Had offers in hand within 2 days and we closed in 10. Saved us from foreclosure.", rating: 5, situation: "Avoiding Foreclosure" },
  { name: "Tony M.", location: "Sacramento, CA", text: "I'm a landlord who had a rental that was more trouble than it was worth. Their investors gave me competing offers and I picked the one with the best terms. No repairs, no cleaning, no hassle. Exactly what I needed.", rating: 5, situation: "Rental Property" },
  { name: "Susan H.", location: "Marin County, CA", text: "I was skeptical at first — sounded too good to be true. But the team showed up, told me exactly how it works, and delivered on every promise. The competing offers were real and I got a great price.", rating: 5, situation: "Vacant Property" },
  { name: "Carlos R.", location: "Stockton, CA", text: "Sold my house in the Central Valley through HouseFlipDude. Their network reaches way beyond the Bay Area. Got 3 solid offers and closed in under 3 weeks. Couldn't be happier.", rating: 5, situation: "Relocation" },
  { name: "Angela D.", location: "Solano County, CA", text: "Divorce situation — needed to sell the house and move on. The team was compassionate and efficient. No drama, just results. The competing offer process really did get us more money.", rating: 5, situation: "Divorce Sale" },
];

export default function Reviews() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/30 py-16 lg:py-20">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            What <span className="text-primary">Sellers</span> Are Saying
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Real stories from Bay Area homeowners who got top dollar through our competing investor network.
            These are placeholder testimonials that will be updated with real reviews.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-lg font-bold text-foreground">5.0</span>
            <span className="text-muted-foreground">from {reviews.length} reviews</span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-6 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="text-xs bg-accent text-accent-foreground rounded-full px-2.5 py-0.5 font-medium">
                    {r.situation}
                  </span>
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-2" />
                <p className="text-foreground leading-relaxed flex-1 italic">"{r.text}"</p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{r.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {r.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Submit your property info and let investors compete for your house. No fees, no obligation.
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
