import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { MapPin, ArrowRight, CheckCircle, Phone } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

interface AreaData {
  name: string;
  county: string;
  h1: string;
  description: string;
  neighborhoods: string[];
  situations: string[];
  localFacts: string[];
}

const areaData: Record<string, AreaData> = {
  "san-francisco": {
    name: "San Francisco",
    county: "San Francisco County",
    h1: "Sell Your San Francisco House Fast — Investors Compete for Top Dollar",
    description: "San Francisco's real estate market moves fast, but selling a fixer or distressed property through traditional channels can take months and cost you tens of thousands in repairs and commissions. At HouseFlipDude, multiple investors compete to buy your SF property as-is — no repairs, no fees, and you pick the closing date.",
    neighborhoods: ["Pacific Heights", "Sunset District", "Richmond District", "Mission District", "Bayview", "Excelsior", "Visitacion Valley", "Outer Mission", "Ingleside", "Bernal Heights", "Potrero Hill", "SoMa"],
    situations: ["Victorian homes needing major renovation", "Inherited properties in probate", "Tenant-occupied buildings", "Fire-damaged properties", "Homes with code violations", "Properties with foundation issues"],
    localFacts: ["Median home price over $1.3M — even fixers command strong offers", "Our investors have purchased 100+ homes across SF neighborhoods", "Average time from first call to closing: 14 days"],
  },
  "oakland": {
    name: "Oakland / Alameda County",
    county: "Alameda County",
    h1: "Sell Your Oakland & Alameda County House Fast — Competing Cash Offers",
    description: "Oakland and Alameda County have some of the Bay Area's most active investor markets. Whether you have a fixer in East Oakland, a bungalow in Berkeley, or a ranch home in Fremont, our network of investors is ready to compete for your property. No repairs needed, no fees to you.",
    neighborhoods: ["East Oakland", "West Oakland", "Fruitvale", "Berkeley", "Fremont", "Hayward", "Union City", "Newark", "San Leandro", "Alameda", "Livermore", "Pleasanton"],
    situations: ["Craftsman bungalows needing updates", "Multi-unit properties", "Homes in pre-foreclosure", "Inherited properties", "Vacant lots and teardowns", "Properties with deferred maintenance"],
    localFacts: ["One of the Bay Area's hottest markets for investor activity", "Our network has purchased 150+ homes in Alameda County", "Strong demand for fixers in every Oakland neighborhood"],
  },
  "san-jose": {
    name: "San Jose / Santa Clara County",
    county: "Santa Clara County",
    h1: "Sell Your San Jose & South Bay House Fast — Multiple Investors Compete",
    description: "The South Bay's tech-driven market means even distressed properties have significant value. Our investor network actively seeks fixer-uppers across San Jose, Sunnyvale, Santa Clara, and the entire South Bay. Multiple investors compete for your property, ensuring you get top dollar.",
    neighborhoods: ["East San Jose", "Willow Glen", "Cambrian", "Almaden", "Sunnyvale", "Santa Clara", "Mountain View", "Milpitas", "Campbell", "Los Gatos", "Cupertino", "Gilroy"],
    situations: ["Outdated homes in prime locations", "Properties needing seismic retrofitting", "Homes with unpermitted additions", "Rental properties with problem tenants", "Estate sales", "Divorce situations"],
    localFacts: ["Silicon Valley location drives premium investor interest", "Our investors have purchased 120+ homes in Santa Clara County", "Tech worker demand keeps fixer values strong"],
  },
  "san-mateo": {
    name: "San Mateo County",
    county: "San Mateo County",
    h1: "Sell Your San Mateo County House Fast — Cash Offers from Competing Investors",
    description: "The Peninsula's prime location between San Francisco and Silicon Valley makes every property valuable — even fixers. Our investor network covers Daly City to Redwood City and everywhere in between. Get competing cash offers with no repairs and no fees.",
    neighborhoods: ["Daly City", "South San Francisco", "San Bruno", "Pacifica", "San Mateo", "Redwood City", "Menlo Park", "Half Moon Bay", "Burlingame", "Foster City", "San Carlos", "Belmont"],
    situations: ["Mid-century homes needing modernization", "Properties with termite damage", "Homes on hillside lots", "Inherited Peninsula properties", "Condos and townhomes", "Properties with HOA issues"],
    localFacts: ["Peninsula location commands premium prices even for fixers", "Our network has purchased 80+ homes in San Mateo County", "Average competing offer is 10-15% above single-buyer offers"],
  },
  "contra-costa": {
    name: "Contra Costa County",
    county: "Contra Costa County",
    h1: "Sell Your Contra Costa County House Fast — Investors Compete for Your Property",
    description: "From Concord to Walnut Creek, Richmond to Antioch, Contra Costa County is one of the Bay Area's most active markets for investor purchases. Our network of experienced buyers is ready to compete for your property in any condition.",
    neighborhoods: ["Concord", "Walnut Creek", "Richmond", "Antioch", "Pittsburg", "Brentwood", "Martinez", "Pleasant Hill", "San Ramon", "Danville", "El Cerrito", "Hercules"],
    situations: ["Ranch homes needing updates", "Properties in flood zones", "Homes with pool issues", "Pre-foreclosure properties", "Inherited homes", "Vacant properties"],
    localFacts: ["High investor demand across all Contra Costa cities", "Our network has purchased 90+ homes in the county", "Fast-growing communities attract strong investor interest"],
  },
  "marin": {
    name: "Marin County",
    county: "Marin County",
    h1: "Sell Your Marin County House Fast — Competing Cash Offers for Top Dollar",
    description: "Marin County's premium real estate market means even distressed properties carry significant value. Our investor network includes specialists who focus on Marin's unique properties. Get multiple competing offers without the hassle of a traditional sale.",
    neighborhoods: ["San Rafael", "Novato", "Mill Valley", "Tiburon", "Sausalito", "Larkspur", "Corte Madera", "Fairfax", "San Anselmo", "Ross"],
    situations: ["Hillside properties with access challenges", "Homes with septic system issues", "Fire-zone properties", "Luxury fixers", "Inherited family homes", "Properties with environmental concerns"],
    localFacts: ["Premium market — even fixers command strong prices", "Specialized investors who understand Marin's unique market", "Discreet, off-market sales for privacy-conscious sellers"],
  },
  "sonoma": {
    name: "Sonoma County",
    county: "Sonoma County",
    h1: "Sell Your Sonoma County House Fast — Cash Buyers Compete for Your Property",
    description: "Whether you have a fixer in Santa Rosa, a rural property in Petaluma, or a home in Rohnert Park, our investor network covers all of Sonoma County. Multiple investors compete for your property, ensuring you get the best possible price.",
    neighborhoods: ["Santa Rosa", "Petaluma", "Rohnert Park", "Windsor", "Healdsburg", "Sebastopol", "Cotati", "Cloverdale", "Sonoma"],
    situations: ["Fire-damaged properties", "Rural homes with acreage", "Wine country estates needing work", "Homes with well and septic", "Inherited properties", "Vacant land"],
    localFacts: ["Strong investor interest in Sonoma County rebuilds", "Our network includes fire-damage specialists", "Rural and suburban properties both attract competing offers"],
  },
  "solano": {
    name: "Solano County",
    county: "Solano County",
    h1: "Sell Your Solano County House Fast — Multiple Investors Want Your Property",
    description: "Solano County offers some of the Bay Area's most affordable housing, which makes it a hotspot for investor activity. From Vallejo to Vacaville, our network of buyers is ready to compete for your property in any condition.",
    neighborhoods: ["Vallejo", "Fairfield", "Vacaville", "Benicia", "Suisun City", "Dixon", "Rio Vista"],
    situations: ["Military relocation sales", "Properties near Mare Island", "Homes with deferred maintenance", "Pre-foreclosure situations", "Inherited properties", "Rental properties"],
    localFacts: ["Affordable price points attract high investor competition", "Our network has purchased 60+ homes in Solano County", "Growing demand from Bay Area commuters drives investor interest"],
  },
  "napa": {
    name: "Napa County",
    county: "Napa County",
    h1: "Sell Your Napa County House Fast — Competing Cash Offers from Investors",
    description: "Napa County's unique blend of wine country and residential communities creates opportunities for sellers with properties in any condition. Our investor network includes specialists who understand Napa's distinct market.",
    neighborhoods: ["Napa", "American Canyon", "St. Helena", "Calistoga", "Yountville"],
    situations: ["Wine country properties needing renovation", "Homes with agricultural zoning", "Inherited family estates", "Properties with water rights issues", "Vacation homes", "Fixer-uppers"],
    localFacts: ["Wine country location adds premium value to all properties", "Specialized investors who understand Napa's zoning and regulations", "Discreet sales for high-value properties"],
  },
  "sacramento": {
    name: "Sacramento",
    county: "Sacramento County",
    h1: "Sell Your Sacramento House Fast — Investors Compete to Buy Your Property",
    description: "Sacramento's booming real estate market has attracted significant investor interest. Whether you have a fixer in Midtown, a ranch home in Elk Grove, or a property in Roseville, our network of investors is ready to compete for your house.",
    neighborhoods: ["Midtown", "East Sacramento", "Elk Grove", "Roseville", "Folsom", "Rancho Cordova", "Citrus Heights", "Carmichael", "Natomas", "Land Park"],
    situations: ["Older homes needing modernization", "Properties in flood zones", "Inherited homes", "Rental properties with tenant issues", "Pre-foreclosure situations", "Homes with foundation problems"],
    localFacts: ["Sacramento is one of California's fastest-growing investor markets", "Our network has purchased 70+ homes in the Sacramento metro", "State capital location drives consistent demand"],
  },
  "stockton": {
    name: "Stockton / San Joaquin County",
    county: "San Joaquin County",
    h1: "Sell Your Stockton & San Joaquin County House Fast — Cash Buyers Compete",
    description: "Stockton and San Joaquin County offer tremendous value for investors, which means strong competing offers for sellers. Our network actively purchases properties throughout Tracy, Manteca, Lodi, and the greater Stockton area.",
    neighborhoods: ["Stockton", "Tracy", "Manteca", "Lodi", "Ripon", "Escalon", "Lathrop"],
    situations: ["Properties in older Stockton neighborhoods", "Homes with deferred maintenance", "Inherited properties", "Pre-foreclosure situations", "Rental properties", "Vacant homes"],
    localFacts: ["Affordable prices attract high investor competition", "Our network has purchased 50+ homes in San Joaquin County", "Bay Area commuter demand drives strong investor interest"],
  },
  "modesto": {
    name: "Modesto / Stanislaus County",
    county: "Stanislaus County",
    h1: "Sell Your Modesto & Stanislaus County House Fast — Competing Investor Offers",
    description: "Stanislaus County's affordable housing market is a magnet for experienced investors. Whether you have a fixer in Modesto, Turlock, or anywhere in Stanislaus County, our network is ready to compete for your property.",
    neighborhoods: ["Modesto", "Turlock", "Ceres", "Riverbank", "Oakdale", "Patterson", "Newman"],
    situations: ["Agricultural properties", "Homes with well and septic systems", "Older homes needing renovation", "Inherited properties", "Pre-foreclosure situations", "Vacant properties"],
    localFacts: ["Stanislaus County's growth attracts strong investor interest", "Our network has purchased 40+ homes in the region", "Affordable entry points mean more competing investors"],
  },
  "santa-cruz": {
    name: "Santa Cruz County",
    county: "Santa Cruz County",
    h1: "Sell Your Santa Cruz County House Fast — Investors Compete for Top Dollar",
    description: "Santa Cruz County's unique coastal market blends beach town charm with strong investor demand. Whether you have a fixer in Santa Cruz, a cabin in the mountains, or a ranch home in Watsonville, our network of investors is ready to compete for your property — no repairs, no fees, and you choose the closing date.",
    neighborhoods: ["Santa Cruz", "Watsonville", "Scotts Valley", "Capitola", "Aptos", "Soquel", "Felton", "Ben Lomond", "Boulder Creek", "Live Oak", "Pleasure Point", "Davenport"],
    situations: ["Coastal properties needing renovation", "Mountain cabins and retreats", "Homes with deferred maintenance", "Inherited beach properties", "Properties with septic or well issues", "Homes in fire or flood zones"],
    localFacts: ["Coastal location drives premium investor interest even for fixers", "Our network has purchased 30+ homes in Santa Cruz County", "Strong demand from Bay Area buyers relocating to the coast"],
  },
  "monterey": {
    name: "Monterey County",
    county: "Monterey County",
    h1: "Sell Your Monterey County House Fast — Multiple Cash Offers from Competing Investors",
    description: "Monterey County offers a diverse real estate landscape from the Monterey Peninsula to the Salinas Valley. Our investor network actively seeks properties throughout the county — from coastal fixers in Pacific Grove to agricultural properties in Salinas. Get multiple competing offers without the hassle of a traditional sale.",
    neighborhoods: ["Monterey", "Salinas", "Seaside", "Marina", "Pacific Grove", "Carmel Valley", "Soledad", "Gonzales", "King City", "Greenfield", "Castroville", "Prunedale"],
    situations: ["Coastal properties needing updates", "Agricultural homes and ranch properties", "Inherited family homes", "Homes with foundation or structural issues", "Properties in pre-foreclosure", "Vacant or abandoned properties"],
    localFacts: ["Monterey Peninsula location adds premium value to all properties", "Our network has purchased 25+ homes in Monterey County", "Agricultural and residential properties both attract strong investor competition"],
  },
};

export default function ServiceAreaDetail() {
  const params = useParams<{ slug: string }>();
  const area = areaData[params.slug || ""];

  if (!area) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Service Area Not Found</h1>
        <p className="text-muted-foreground mb-6">We couldn't find that service area. Check our full list below.</p>
        <Link href="/service-areas">
          <Button>View All Service Areas</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/30 py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" /> {area.county}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                {area.h1}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {area.description}
              </p>
              <div className="mt-6 space-y-2">
                {area.localFacts.map(f => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl shadow-xl border border-border p-6">
              <h2 className="text-xl font-bold text-card-foreground mb-1">Get Competing Offers in {area.name}</h2>
              <p className="text-sm text-muted-foreground mb-4">Takes 60 seconds. No obligation.</p>
              <LeadCaptureForm variant="sidebar" />
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-foreground mb-6">
            Neighborhoods We Serve in <span className="text-primary">{area.name}</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {area.neighborhoods.map(n => (
              <div key={n} className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-6">
            Common Situations We Help With in <span className="text-primary">{area.name}</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {area.situations.map(s => (
              <div key={s} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Sell Your {area.name} House?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Submit your property info and let investors compete. No fees, no obligation, no pressure.
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
