import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { MapPin, ArrowRight, CheckCircle, Phone, Building2, Home, Trees } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

interface AreaData {
  name: string;
  county: string;
  h1: string;
  description: string;
  cities: string[];
  unincorporated: string[];
  situations: string[];
  localFacts: string[];
}

const areaData: Record<string, AreaData> = {
  "san-francisco": {
    name: "San Francisco",
    county: "San Francisco County",
    h1: "Sell Your San Francisco House Fast — Investors Compete for Top Dollar",
    description: "San Francisco's real estate market moves fast, but selling a fixer or distressed property through traditional channels can take months and cost you tens of thousands in repairs and commissions. At HouseFlipDude, multiple investors compete to buy your SF property as-is — no repairs, no fees, and you pick the closing date.",
    cities: ["San Francisco"],
    unincorporated: ["Pacific Heights", "Sunset District", "Richmond District", "Mission District", "Bayview-Hunters Point", "Excelsior", "Visitacion Valley", "Outer Mission", "Ingleside", "Bernal Heights", "Potrero Hill", "SoMa", "Noe Valley", "Castro", "Haight-Ashbury", "Marina District", "North Beach", "Chinatown", "Financial District", "Tenderloin", "Western Addition", "Fillmore", "Dogpatch", "Glen Park", "Crocker-Amazon", "Portola", "Silver Terrace", "Oceanview", "Merced Heights", "Lakeshore", "Parkside", "Outer Sunset", "Inner Sunset", "Inner Richmond", "Outer Richmond", "Sea Cliff", "Presidio Heights", "Laurel Heights", "Cole Valley", "Twin Peaks", "Diamond Heights", "Miraloma Park", "West Portal", "Forest Hill", "St. Francis Wood", "Balboa Terrace", "Sunnyside", "Stonestown"],
    situations: ["Victorian homes needing major renovation", "Inherited properties in probate", "Tenant-occupied buildings", "Fire-damaged properties", "Homes with code violations", "Properties with foundation issues"],
    localFacts: ["Median home price over $1.3M — even fixers command strong offers", "Our investors have purchased 100+ homes across SF neighborhoods", "Average time from first call to closing: 14 days"],
  },
  "oakland": {
    name: "Oakland / Alameda County",
    county: "Alameda County",
    h1: "Sell Your Oakland & Alameda County House Fast — Competing Cash Offers",
    description: "Oakland and Alameda County have some of the Bay Area's most active investor markets. Whether you have a fixer in East Oakland, a bungalow in Berkeley, or a ranch home in Fremont, our network of investors is ready to compete for your property. No repairs needed, no fees to you.",
    cities: ["Alameda", "Albany", "Berkeley", "Dublin", "Emeryville", "Fremont", "Hayward", "Livermore", "Newark", "Oakland", "Piedmont", "Pleasanton", "San Leandro", "Union City"],
    unincorporated: ["Ashland", "Castro Valley", "Cherryland", "Fairview", "San Lorenzo", "Sunol", "Altamont", "Brightside", "Canyon", "East Pleasanton"],
    situations: ["Craftsman bungalows needing updates", "Multi-unit properties", "Homes in pre-foreclosure", "Inherited properties", "Vacant lots and teardowns", "Properties with deferred maintenance"],
    localFacts: ["One of the Bay Area's hottest markets for investor activity", "Our network has purchased 150+ homes in Alameda County", "Strong demand for fixers in every Oakland neighborhood"],
  },
  "san-jose": {
    name: "San Jose / Santa Clara County",
    county: "Santa Clara County",
    h1: "Sell Your San Jose & South Bay House Fast — Multiple Investors Compete",
    description: "The South Bay's tech-driven market means even distressed properties have significant value. Our investor network actively seeks fixer-uppers across San Jose, Sunnyvale, Santa Clara, and the entire South Bay. Multiple investors compete for your property, ensuring you get top dollar.",
    cities: ["Campbell", "Cupertino", "Gilroy", "Los Altos", "Los Altos Hills", "Los Gatos", "Milpitas", "Monte Sereno", "Morgan Hill", "Mountain View", "Palo Alto", "San Jose", "Santa Clara", "Saratoga", "Sunnyvale"],
    unincorporated: ["Alviso", "Alum Rock", "Burbank", "Cambrian", "Coyote", "East Foothills", "Fruitdale", "Lexington Hills", "Loyola", "Mount Hamilton", "New Almaden", "Rancho Rinconada", "San Martin", "Stanford"],
    situations: ["Outdated homes in prime locations", "Properties needing seismic retrofitting", "Homes with unpermitted additions", "Rental properties with problem tenants", "Estate sales", "Divorce situations"],
    localFacts: ["Silicon Valley location drives premium investor interest", "Our investors have purchased 120+ homes in Santa Clara County", "Tech worker demand keeps fixer values strong"],
  },
  "san-mateo": {
    name: "San Mateo County",
    county: "San Mateo County",
    h1: "Sell Your San Mateo County House Fast — Cash Offers from Competing Investors",
    description: "The Peninsula's prime location between San Francisco and Silicon Valley makes every property valuable — even fixers. Our investor network covers Daly City to Redwood City and everywhere in between. Get competing cash offers with no repairs and no fees.",
    cities: ["Atherton", "Belmont", "Brisbane", "Burlingame", "Colma", "Daly City", "East Palo Alto", "Foster City", "Half Moon Bay", "Hillsborough", "Menlo Park", "Millbrae", "Pacifica", "Portola Valley", "Redwood City", "San Bruno", "San Carlos", "San Mateo", "South San Francisco", "Woodside"],
    unincorporated: ["Broadmoor", "Devonshire", "El Granada", "Emerald Lake Hills", "Fair Oaks", "Highlands-Baywood Park", "La Honda", "Ladera", "Loma Mar", "Los Trancos", "Montara", "Moss Beach", "North Fair Oaks", "Palomar Park", "Pescadero", "San Gregorio", "Sequoia Tract", "Sky Londa", "West Menlo Park"],
    situations: ["Mid-century homes needing modernization", "Properties with termite damage", "Homes on hillside lots", "Inherited Peninsula properties", "Condos and townhomes", "Properties with HOA issues"],
    localFacts: ["Peninsula location commands premium prices even for fixers", "Our network has purchased 80+ homes in San Mateo County", "Average competing offer is 10-15% above single-buyer offers"],
  },
  "contra-costa": {
    name: "Contra Costa County",
    county: "Contra Costa County",
    h1: "Sell Your Contra Costa County House Fast — Investors Compete for Your Property",
    description: "From Concord to Walnut Creek, Richmond to Antioch, Contra Costa County is one of the Bay Area's most active markets for investor purchases. Our network of experienced buyers is ready to compete for your property in any condition.",
    cities: ["Antioch", "Brentwood", "Clayton", "Concord", "Danville", "El Cerrito", "Hercules", "Lafayette", "Martinez", "Moraga", "Oakley", "Orinda", "Pinole", "Pittsburg", "Pleasant Hill", "Richmond", "San Pablo", "San Ramon", "Walnut Creek"],
    unincorporated: ["Acalanes Ridge", "Alamo", "Alhambra Valley", "Bay Point", "Bayview", "Bethel Island", "Blackhawk", "Byron", "Camino Tassajara", "Castle Hill", "Clyde", "Contra Costa Centre", "Crockett", "Diablo", "Discovery Bay", "East Richmond Heights", "El Sobrante", "Kensington", "Knightsen", "Montalvin Manor", "Norris Canyon", "North Gate", "North Richmond", "Pacheco", "Port Costa", "Reliez Valley", "Rodeo", "Rollingwood", "San Miguel", "Saranap", "Shell Ridge", "Tara Hills", "Vine Hill"],
    situations: ["Ranch homes needing updates", "Properties in flood zones", "Homes with pool issues", "Pre-foreclosure properties", "Inherited homes", "Vacant properties"],
    localFacts: ["High investor demand across all Contra Costa cities", "Our network has purchased 90+ homes in the county", "Fast-growing communities attract strong investor interest"],
  },
  "marin": {
    name: "Marin County",
    county: "Marin County",
    h1: "Sell Your Marin County House Fast — Competing Cash Offers for Top Dollar",
    description: "Marin County's premium real estate market means even distressed properties carry significant value. Our investor network includes specialists who focus on Marin's unique properties. Get multiple competing offers without the hassle of a traditional sale.",
    cities: ["Belvedere", "Corte Madera", "Fairfax", "Larkspur", "Mill Valley", "Novato", "Ross", "San Anselmo", "San Rafael", "Sausalito", "Tiburon"],
    unincorporated: ["Alto", "Belvedere Tiburon", "Black Point-Green Point", "Bolinas", "Dillon Beach", "Forest Knolls", "Greenbrae", "Inverness", "Kentfield", "Lagunitas", "Lucas Valley-Marinwood", "Marshall", "Muir Beach", "Nicasio", "Olema", "Point Reyes Station", "San Geronimo", "San Quentin", "Santa Venetia", "Sleepy Hollow", "Stinson Beach", "Strawberry", "Tamalpais-Homestead Valley", "Tomales", "Woodacre"],
    situations: ["Hillside properties with access challenges", "Homes with septic system issues", "Fire-zone properties", "Luxury fixers", "Inherited family homes", "Properties with environmental concerns"],
    localFacts: ["Premium market — even fixers command strong prices", "Specialized investors who understand Marin's unique market", "Discreet, off-market sales for privacy-conscious sellers"],
  },
  "sonoma": {
    name: "Sonoma County",
    county: "Sonoma County",
    h1: "Sell Your Sonoma County House Fast — Cash Buyers Compete for Your Property",
    description: "Whether you have a fixer in Santa Rosa, a rural property in Petaluma, or a home in Rohnert Park, our investor network covers all of Sonoma County. Multiple investors compete for your property, ensuring you get the best possible price.",
    cities: ["Cloverdale", "Cotati", "Healdsburg", "Petaluma", "Rohnert Park", "Santa Rosa", "Sebastopol", "Sonoma", "Windsor"],
    unincorporated: ["Annapolis", "Asti", "Bodega", "Bodega Bay", "Boyes Hot Springs", "Camp Meeker", "Cazadero", "Duncans Mills", "El Verano", "Eldridge", "Forestville", "Freestone", "Fulton", "Geyserville", "Glen Ellen", "Graton", "Guerneville", "Jenner", "Kenwood", "Larkfield-Wikiup", "Monte Rio", "Occidental", "Penngrove", "Rio Nido", "Sea Ranch", "Timber Cove", "Two Rock", "Valley Ford", "Vineburg"],
    situations: ["Fire-damaged properties", "Rural homes with acreage", "Wine country estates needing work", "Homes with well and septic", "Inherited properties", "Vacant land"],
    localFacts: ["Strong investor interest in Sonoma County rebuilds", "Our network includes fire-damage specialists", "Rural and suburban properties both attract competing offers"],
  },
  "solano": {
    name: "Solano County",
    county: "Solano County",
    h1: "Sell Your Solano County House Fast — Multiple Investors Want Your Property",
    description: "Solano County offers some of the Bay Area's most affordable housing, which makes it a hotspot for investor activity. From Vallejo to Vacaville, our network of buyers is ready to compete for your property in any condition.",
    cities: ["Benicia", "Dixon", "Fairfield", "Rio Vista", "Suisun City", "Vacaville", "Vallejo"],
    unincorporated: ["Birds Landing", "Collinsville", "Denverton", "Elmira", "Green Valley", "Hartley", "Suisun Valley", "Travis AFB"],
    situations: ["Military relocation sales", "Properties near Mare Island", "Homes with deferred maintenance", "Pre-foreclosure situations", "Inherited properties", "Rental properties"],
    localFacts: ["Affordable price points attract high investor competition", "Our network has purchased 60+ homes in Solano County", "Growing demand from Bay Area commuters drives investor interest"],
  },
  "napa": {
    name: "Napa County",
    county: "Napa County",
    h1: "Sell Your Napa County House Fast — Competing Cash Offers from Investors",
    description: "Napa County's unique blend of wine country and residential communities creates opportunities for sellers with properties in any condition. Our investor network includes specialists who understand Napa's distinct market.",
    cities: ["American Canyon", "Calistoga", "Napa", "St. Helena", "Yountville"],
    unincorporated: ["Aetna Springs", "Angwin", "Berryessa Highlands", "Circle Oaks", "Deer Park", "Enchanted Hills", "Lake Berryessa", "Oakville", "Pope Valley", "Rutherford", "Silverado", "Spanish Flat"],
    situations: ["Wine country properties needing renovation", "Homes with agricultural zoning", "Inherited family estates", "Properties with water rights issues", "Vacation homes", "Fixer-uppers"],
    localFacts: ["Wine country location adds premium value to all properties", "Specialized investors who understand Napa's zoning and regulations", "Discreet sales for high-value properties"],
  },
  "sacramento": {
    name: "Sacramento",
    county: "Sacramento County",
    h1: "Sell Your Sacramento House Fast — Investors Compete to Buy Your Property",
    description: "Sacramento's booming real estate market has attracted significant investor interest. Whether you have a fixer in Midtown, a ranch home in Elk Grove, or a property in Roseville, our network of investors is ready to compete for your house.",
    cities: ["Sacramento", "Elk Grove", "Rancho Cordova", "Folsom", "Citrus Heights", "Galt"],
    unincorporated: ["Arden-Arcade", "Antelope", "Carmichael", "Fair Oaks", "Florin", "Gold River", "North Highlands", "Orangevale", "Rancho Murieta", "Rio Linda", "Rosemont", "Vineyard", "Wilton"],
    situations: ["Older homes needing modernization", "Properties in flood zones", "Inherited homes", "Rental properties with tenant issues", "Pre-foreclosure situations", "Homes with foundation problems"],
    localFacts: ["Sacramento is one of California's fastest-growing investor markets", "Our network has purchased 70+ homes in the Sacramento metro", "State capital location drives consistent demand"],
  },
  "stockton": {
    name: "Stockton / San Joaquin County",
    county: "San Joaquin County",
    h1: "Sell Your Stockton & San Joaquin County House Fast — Cash Buyers Compete",
    description: "Stockton and San Joaquin County offer tremendous value for investors, which means strong competing offers for sellers. Our network actively purchases properties throughout Tracy, Manteca, Lodi, and the greater Stockton area.",
    cities: ["Stockton", "Tracy", "Manteca", "Lodi", "Lathrop", "Ripon", "Escalon"],
    unincorporated: ["Acampo", "Country Club", "French Camp", "Garden Acres", "Lincoln Village", "Lockeford", "Morada", "Thornton", "Victor", "Woodbridge"],
    situations: ["Properties in older Stockton neighborhoods", "Homes with deferred maintenance", "Inherited properties", "Pre-foreclosure situations", "Rental properties", "Vacant homes"],
    localFacts: ["Affordable prices attract high investor competition", "Our network has purchased 50+ homes in San Joaquin County", "Bay Area commuter demand drives strong investor interest"],
  },
  "modesto": {
    name: "Modesto / Stanislaus County",
    county: "Stanislaus County",
    h1: "Sell Your Modesto & Stanislaus County House Fast — Competing Investor Offers",
    description: "Stanislaus County's affordable housing market is a magnet for experienced investors. Whether you have a fixer in Modesto, Turlock, or anywhere in Stanislaus County, our network is ready to compete for your property.",
    cities: ["Modesto", "Turlock", "Ceres", "Patterson", "Oakdale", "Riverbank", "Newman", "Hughson", "Waterford"],
    unincorporated: ["Denair", "Diablo Grande", "Empire", "Keyes", "Salida", "Westley"],
    situations: ["Agricultural properties", "Homes with well and septic systems", "Older homes needing renovation", "Inherited properties", "Pre-foreclosure situations", "Vacant properties"],
    localFacts: ["Stanislaus County's growth attracts strong investor interest", "Our network has purchased 40+ homes in the region", "Affordable entry points mean more competing investors"],
  },
  "santa-cruz": {
    name: "Santa Cruz County",
    county: "Santa Cruz County",
    h1: "Sell Your Santa Cruz County House Fast — Investors Compete for Top Dollar",
    description: "Santa Cruz County's unique coastal market blends beach town charm with strong investor demand. Whether you have a fixer in Santa Cruz, a cabin in the mountains, or a ranch home in Watsonville, our network of investors is ready to compete for your property — no repairs, no fees, and you choose the closing date.",
    cities: ["Santa Cruz", "Watsonville", "Scotts Valley", "Capitola"],
    unincorporated: ["Aptos", "Ben Lomond", "Bonny Doon", "Boulder Creek", "Corralitos", "Davenport", "Felton", "La Selva Beach", "Live Oak", "Rio del Mar", "Soquel"],
    situations: ["Coastal properties needing renovation", "Mountain cabins and retreats", "Homes with deferred maintenance", "Inherited beach properties", "Properties with septic or well issues", "Homes in fire or flood zones"],
    localFacts: ["Coastal location drives premium investor interest even for fixers", "Our network has purchased 30+ homes in Santa Cruz County", "Strong demand from Bay Area buyers relocating to the coast"],
  },
  "monterey": {
    name: "Monterey County",
    county: "Monterey County",
    h1: "Sell Your Monterey County House Fast — Multiple Cash Offers from Competing Investors",
    description: "Monterey County offers a diverse real estate landscape from the Monterey Peninsula to the Salinas Valley. Our investor network actively seeks properties throughout the county — from coastal fixers in Pacific Grove to agricultural properties in Salinas. Get multiple competing offers without the hassle of a traditional sale.",
    cities: ["Monterey", "Salinas", "Seaside", "Marina", "Pacific Grove", "Soledad", "Gonzales", "King City", "Greenfield"],
    unincorporated: ["Boronda", "Carmel Valley Village", "Castroville", "Chualar", "Moss Landing", "Pajaro", "Prunedale", "San Ardo", "San Lucas", "Spreckels"],
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

  const totalLocations = area.cities.length + area.unincorporated.length;

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

      {/* Cities & Towns */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-foreground mb-2">
            We Buy Houses in <span className="text-primary">{totalLocations} {area.county} Locations</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Our investor network actively purchases properties across every city, town, and community in {area.county}.
          </p>

          {/* Incorporated Cities */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">
                {area.county === "San Francisco County" ? "City & County" : "Cities & Towns"}
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {area.cities.map(c => (
                <div key={c} className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 hover:border-primary/50 transition-colors">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Unincorporated Areas */}
          {area.unincorporated.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trees className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  {area.county === "San Francisco County" ? "Neighborhoods & Districts" : "Unincorporated Communities & Census-Designated Places"}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {area.unincorporated.map(u => (
                  <div key={u} className="flex items-center gap-2 bg-muted/50 border border-border rounded-lg px-4 py-3 hover:border-primary/50 transition-colors">
                    <Home className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-sm font-medium text-foreground">{u}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Selling Your House in {area.county}
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              If you need to sell a house fast in {area.county}, HouseFlipDude connects you with multiple competing investors who buy properties in any condition. Whether your property is in {area.cities.slice(0, 3).join(", ")}, or any of the {area.unincorporated.length > 0 ? `${area.unincorporated.length} unincorporated communities` : "neighborhoods"} throughout {area.county}, our investor network is ready to make competing cash offers.
            </p>
            <p>
              Unlike traditional real estate listings that require repairs, staging, and months of showings, selling to our investor network means you can close in as little as 7 days. There are no agent commissions, no repair costs, and no fees of any kind. You simply submit your property information, receive competing offers, and choose the one that works best for you.
            </p>
            <p>
              We buy houses in every condition across {area.county} — from move-in ready homes to properties that need significant renovation. Whether you're dealing with an inherited property, facing foreclosure, going through a divorce, or simply need to sell quickly, our team is here to help you get the best possible price through competing investor offers.
            </p>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-16 lg:py-20 bg-background">
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
