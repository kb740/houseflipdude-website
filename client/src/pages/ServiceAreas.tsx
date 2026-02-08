import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";

const bayAreaCounties = [
  { slug: "san-francisco", name: "San Francisco", desc: "From Pacific Heights to the Sunset, we buy houses across every SF neighborhood." },
  { slug: "oakland", name: "Oakland / Alameda County", desc: "Oakland, Berkeley, Fremont, Hayward, and all of Alameda County." },
  { slug: "san-jose", name: "San Jose / Santa Clara County", desc: "San Jose, Sunnyvale, Santa Clara, Mountain View, and the entire South Bay." },
  { slug: "san-mateo", name: "San Mateo County", desc: "Daly City, Redwood City, San Mateo, Pacifica, and the Peninsula." },
  { slug: "contra-costa", name: "Contra Costa County", desc: "Concord, Walnut Creek, Richmond, Antioch, and all of Contra Costa." },
  { slug: "marin", name: "Marin County", desc: "San Rafael, Novato, Mill Valley, and throughout Marin County." },
  { slug: "sonoma", name: "Sonoma County", desc: "Santa Rosa, Petaluma, Rohnert Park, and Sonoma County wine country." },
  { slug: "solano", name: "Solano County", desc: "Vallejo, Fairfield, Vacaville, Benicia, and all of Solano County." },
  { slug: "napa", name: "Napa County", desc: "Napa, American Canyon, St. Helena, and Napa Valley." },
];

const otherAreas = [
  { slug: "sacramento", name: "Sacramento", desc: "Sacramento, Elk Grove, Roseville, Folsom, and the greater Sacramento metro." },
  { slug: "stockton", name: "Stockton / San Joaquin", desc: "Stockton, Tracy, Manteca, Lodi, and San Joaquin County." },
  { slug: "modesto", name: "Modesto / Stanislaus County", desc: "Modesto, Turlock, Ceres, and all of Stanislaus County." },
  { slug: "santa-cruz", name: "Santa Cruz County", desc: "Santa Cruz, Watsonville, Scotts Valley, Capitola, and the Santa Cruz coast." },
  { slug: "monterey", name: "Monterey County", desc: "Monterey, Salinas, Pacific Grove, Seaside, and the Monterey Peninsula." },
];

function AreaCard({ slug, name, desc }: { slug: string; name: string; desc: string }) {
  return (
    <Link href={`/service-areas/${slug}`} className="group">
      <div className="bg-card rounded-xl border border-border p-6 hover:border-primary hover:shadow-lg transition-all h-full">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{name}</h3>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{desc}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ServiceAreas() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/30 py-16 lg:py-20">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            We Buy Houses Across <span className="text-primary">California</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Our investor network covers the entire San Francisco Bay Area, Sacramento, and the Central Valley.
            No matter where your property is, we have investors ready to compete for it.
          </p>
        </div>
      </section>

      {/* Bay Area Counties */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-foreground mb-2">
            San Francisco <span className="text-primary">Bay Area</span>
          </h2>
          <p className="text-muted-foreground mb-8">All 9 core Bay Area counties covered by our investor network.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bayAreaCounties.map(a => (
              <AreaCard key={a.slug} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-foreground mb-2">
            Sacramento, Central Valley & <span className="text-primary">Beyond</span>
          </h2>
          <p className="text-muted-foreground mb-8">Expanding our reach across California.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherAreas.map(a => (
              <AreaCard key={a.slug} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Don't See Your Area?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            We're always expanding. Submit your property info and we'll let you know if we have investors in your area.
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
