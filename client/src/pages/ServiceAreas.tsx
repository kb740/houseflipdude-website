import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, ArrowRight, Building2 } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const bayAreaCounties = [
  { slug: "san-francisco", name: "San Francisco", cities: 1, communities: 48, desc: "Every neighborhood from Pacific Heights to Bayview-Hunters Point, the Sunset to SoMa." },
  { slug: "oakland", name: "Oakland / Alameda County", cities: 14, communities: 10, desc: "Alameda, Albany, Berkeley, Dublin, Emeryville, Fremont, Hayward, Livermore, Newark, Oakland, Piedmont, Pleasanton, San Leandro, Union City, and unincorporated communities." },
  { slug: "san-jose", name: "San Jose / Santa Clara County", cities: 15, communities: 14, desc: "Campbell, Cupertino, Gilroy, Los Altos, Los Gatos, Milpitas, Morgan Hill, Mountain View, Palo Alto, San Jose, Santa Clara, Saratoga, Sunnyvale, and more." },
  { slug: "san-mateo", name: "San Mateo County", cities: 20, communities: 19, desc: "Atherton, Belmont, Brisbane, Burlingame, Daly City, Foster City, Half Moon Bay, Menlo Park, Pacifica, Redwood City, San Mateo, South San Francisco, and more." },
  { slug: "contra-costa", name: "Contra Costa County", cities: 19, communities: 33, desc: "Antioch, Brentwood, Concord, Danville, Lafayette, Martinez, Oakley, Orinda, Pittsburg, Richmond, San Ramon, Walnut Creek, and 33 unincorporated communities." },
  { slug: "marin", name: "Marin County", cities: 11, communities: 25, desc: "Belvedere, Corte Madera, Fairfax, Larkspur, Mill Valley, Novato, Ross, San Anselmo, San Rafael, Sausalito, Tiburon, and 25 unincorporated communities." },
  { slug: "sonoma", name: "Sonoma County", cities: 9, communities: 29, desc: "Cloverdale, Cotati, Healdsburg, Petaluma, Rohnert Park, Santa Rosa, Sebastopol, Sonoma, Windsor, and 29 wine country communities." },
  { slug: "solano", name: "Solano County", cities: 7, communities: 8, desc: "Benicia, Dixon, Fairfield, Rio Vista, Suisun City, Vacaville, Vallejo, and surrounding unincorporated areas." },
  { slug: "napa", name: "Napa County", cities: 5, communities: 12, desc: "American Canyon, Calistoga, Napa, St. Helena, Yountville, and 12 Napa Valley communities including Angwin, Oakville, and Rutherford." },
];

const otherAreas = [
  { slug: "sacramento", name: "Sacramento", cities: 6, communities: 13, desc: "Sacramento, Elk Grove, Folsom, Rancho Cordova, Citrus Heights, Galt, and 13 unincorporated communities including Carmichael, Fair Oaks, and Arden-Arcade." },
  { slug: "stockton", name: "Stockton / San Joaquin", cities: 7, communities: 10, desc: "Stockton, Tracy, Manteca, Lodi, Lathrop, Ripon, Escalon, and surrounding communities." },
  { slug: "modesto", name: "Modesto / Stanislaus County", cities: 9, communities: 6, desc: "Modesto, Turlock, Ceres, Patterson, Oakdale, Riverbank, Newman, Hughson, Waterford, and surrounding areas." },
  { slug: "santa-cruz", name: "Santa Cruz County", cities: 4, communities: 11, desc: "Santa Cruz, Watsonville, Scotts Valley, Capitola, and 11 coastal and mountain communities." },
  { slug: "monterey", name: "Monterey County", cities: 9, communities: 10, desc: "Monterey, Salinas, Seaside, Marina, Pacific Grove, and communities throughout the Monterey Peninsula and Salinas Valley." },
];

function AreaCard({ slug, name, cities, communities, desc }: { slug: string; name: string; cities: number; communities: number; desc: string }) {
  const total = cities + communities;
  return (
    <Link href={`/service-areas/${slug}`} className="group">
      <div className="bg-card rounded-xl border border-border p-6 hover:border-primary hover:shadow-lg transition-all h-full">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{name}</h3>
            <div className="flex items-center gap-2 mt-1 mb-2">
              <span className="inline-flex items-center gap-1 text-xs font-medium bg-primary/10 text-primary rounded-full px-2 py-0.5">
                <Building2 className="w-3 h-3" /> {total} locations
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ServiceAreas() {
  useSEO({
    title: "Service Areas | HouseFlipDude — We Buy Houses Across 14 Bay Area Counties",
    description: "HouseFlipDude buys houses across 14 Bay Area counties including San Francisco, Alameda, Contra Costa, Santa Clara, San Mateo, Marin, and more. Get competing cash offers today.",
  });

  const totalBayArea = bayAreaCounties.reduce((sum, c) => sum + c.cities + c.communities, 0);
  const totalOther = otherAreas.reduce((sum, c) => sum + c.cities + c.communities, 0);
  const grandTotal = totalBayArea + totalOther;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/30 py-16 lg:py-20">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            We Buy Houses in <span className="text-primary">{grandTotal}+ Locations</span> Across California
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Our investor network covers every city, town, and unincorporated community across the San Francisco Bay Area, Sacramento, and the Central Valley. No matter where your property is, we have investors ready to compete for it.
          </p>
        </div>
      </section>

      {/* Bay Area Counties */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-foreground mb-2">
            San Francisco <span className="text-primary">Bay Area</span>
          </h2>
          <p className="text-muted-foreground mb-8">All 9 core Bay Area counties — {totalBayArea} cities, towns, and communities covered by our investor network.</p>
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
          <p className="text-muted-foreground mb-8">Expanding our reach across California — {totalOther} additional locations.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherAreas.map(a => (
              <AreaCard key={a.slug} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Sell Your House Fast Anywhere in the Bay Area & Beyond
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              HouseFlipDude is the San Francisco Bay Area's premier marketplace for homeowners who need to sell their property quickly and for top dollar. Our network of experienced real estate investors covers all 9 Bay Area counties — Alameda County, Contra Costa County, Marin County, Napa County, San Francisco County, San Mateo County, Santa Clara County, Solano County, and Sonoma County — plus Sacramento, San Joaquin, Stanislaus, Santa Cruz, and Monterey counties.
            </p>
            <p>
              Whether you own a house in San Francisco, Oakland, San Jose, or any of the hundreds of cities, towns, and unincorporated communities throughout Northern California, our investors are ready to compete for your property. We buy houses in any condition — from move-in ready homes to properties that need extensive renovation. No repairs, no agent commissions, no fees, and you choose the closing date.
            </p>
            <p>
              Click on any county above to see the complete list of cities, towns, and unincorporated communities where we actively purchase properties, along with information about common selling situations and local market insights.
            </p>
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
