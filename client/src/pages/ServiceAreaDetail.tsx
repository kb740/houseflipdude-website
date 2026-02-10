import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { MapPin, ArrowRight, CheckCircle, Phone, Building2, Home, Trees } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { useEffect } from "react";

interface AreaData {
  name: string;
  county: string;
  h1: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
  seoContent: string[];
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
    seoTitle: "Sell Your House Fast in San Francisco | Cash Offers from Competing Investors",
    metaDescription: "Sell your San Francisco house fast for cash. Multiple investors compete to buy your property in any condition — Pacific Heights, Sunset, Mission, Bayview. No fees, no repairs.",
    description: "San Francisco's real estate market moves fast, but selling a fixer or distressed property through traditional channels can take months and cost you tens of thousands in repairs and commissions. At HouseFlipDude, multiple investors compete to buy your SF property as-is — no repairs, no fees, and you pick the closing date.",
    seoContent: [
      "Whether you need to sell a fixer-upper in the Sunset District, an inherited Victorian in Pacific Heights, or a distressed property in Bayview-Hunters Point, our investor network is actively buying across every San Francisco neighborhood. Homeowners in the Mission District, Excelsior, and Visitacion Valley have used HouseFlipDude to get competing cash offers — bypassing the expensive repairs, staging, and months of open houses that traditional listings require.",
      "Selling a house as-is in San Francisco doesn't mean settling for a lowball offer. When multiple experienced investors compete for your property in Noe Valley, Bernal Heights, or the Richmond District, competition drives the price up. Our investors understand the unique value of San Francisco real estate — from Potrero Hill cottages to SoMa lofts — and they bid aggressively because they know the renovation potential in this market.",
      "If you're facing foreclosure in San Francisco, dealing with an inherited home in Glen Park or West Portal, or simply need to sell quickly due to divorce, relocation, or financial hardship, HouseFlipDude connects you with cash buyers who can close in as little as 7 days. No agent commissions, no closing costs, and you choose the timeline that works for you."
    ],
    cities: ["San Francisco"],
    unincorporated: ["Pacific Heights", "Sunset District", "Richmond District", "Mission District", "Bayview-Hunters Point", "Excelsior", "Visitacion Valley", "Outer Mission", "Ingleside", "Bernal Heights", "Potrero Hill", "SoMa", "Noe Valley", "Castro", "Haight-Ashbury", "Marina District", "North Beach", "Chinatown", "Financial District", "Tenderloin", "Western Addition", "Fillmore", "Dogpatch", "Glen Park", "Crocker-Amazon", "Portola", "Silver Terrace", "Oceanview", "Merced Heights", "Lakeshore", "Parkside", "Outer Sunset", "Inner Sunset", "Inner Richmond", "Outer Richmond", "Sea Cliff", "Presidio Heights", "Laurel Heights", "Cole Valley", "Twin Peaks", "Diamond Heights", "Miraloma Park", "West Portal", "Forest Hill", "St. Francis Wood", "Balboa Terrace", "Sunnyside", "Stonestown"],
    situations: ["Victorian homes needing major renovation", "Inherited properties in probate", "Tenant-occupied buildings", "Fire-damaged properties", "Homes with code violations", "Properties with foundation issues"],
    localFacts: ["Median home price over $1.3M — even fixers command strong offers", "Our investors have purchased 100+ homes across SF neighborhoods", "Average time from first call to closing: 14 days"],
  },
  "oakland": {
    name: "Oakland / Alameda County",
    county: "Alameda County",
    h1: "Sell Your Oakland & Alameda County House Fast — Competing Cash Offers",
    seoTitle: "We Buy Houses in Oakland, Fremont, Berkeley & Alameda County | Competing Cash Offers",
    metaDescription: "Sell your house fast in Oakland, Fremont, Berkeley, Hayward, or Pleasanton. Multiple investors compete for your Alameda County property — any condition, no fees.",
    description: "Oakland and Alameda County have some of the Bay Area's most active investor markets. Whether you have a fixer in East Oakland, a bungalow in Berkeley, or a ranch home in Fremont, our network of investors is ready to compete for your property. No repairs needed, no fees to you.",
    seoContent: [
      "Homeowners looking to sell a house fast in Fremont, Pleasanton, or Dublin are discovering that competing investor offers consistently beat the single-buyer lowball approach. Whether you own a craftsman bungalow in Berkeley that needs a full renovation, a ranch home in Hayward with deferred maintenance, or a multi-unit property in Oakland, our investor network is actively buying across all of Alameda County.",
      "If you need to sell an inherited home in Livermore, a pre-foreclosure property in San Leandro, or a fixer-upper in Union City, HouseFlipDude's marketplace model ensures you're not leaving money on the table. Investors compete against each other for properties in Castro Valley, Newark, and Piedmont — driving up the price you receive while eliminating the fees, repairs, and uncertainty of a traditional sale.",
      "From the hills of Oakland to the suburban neighborhoods of Dublin and Pleasanton, our investors have purchased over 150 homes in Alameda County. They understand the local market in Emeryville, Albany, and Alameda, and they move fast — most sellers receive their first competing offer within 24 to 48 hours of connecting with our team."
    ],
    cities: ["Alameda", "Albany", "Berkeley", "Dublin", "Emeryville", "Fremont", "Hayward", "Livermore", "Newark", "Oakland", "Piedmont", "Pleasanton", "San Leandro", "Union City"],
    unincorporated: ["Ashland", "Castro Valley", "Cherryland", "Fairview", "San Lorenzo", "Sunol", "Altamont", "Brightside", "Canyon", "East Pleasanton"],
    situations: ["Craftsman bungalows needing updates", "Multi-unit properties", "Homes in pre-foreclosure", "Inherited properties", "Vacant lots and teardowns", "Properties with deferred maintenance"],
    localFacts: ["One of the Bay Area's hottest markets for investor activity", "Our network has purchased 150+ homes in Alameda County", "Strong demand for fixers in every Oakland neighborhood"],
  },
  "san-jose": {
    name: "San Jose / Santa Clara County",
    county: "Santa Clara County",
    h1: "Sell Your San Jose & South Bay House Fast — Multiple Investors Compete",
    seoTitle: "Sell Your House Fast in San Jose, Palo Alto, Sunnyvale & Santa Clara County",
    metaDescription: "Sell your house fast in San Jose, Palo Alto, Mountain View, Cupertino, or Los Gatos. Competing investors buy your Santa Clara County home as-is. No fees, no repairs.",
    description: "The South Bay's tech-driven market means even distressed properties have significant value. Our investor network actively seeks fixer-uppers across San Jose, Sunnyvale, Santa Clara, and the entire South Bay. Multiple investors compete for your property, ensuring you get top dollar.",
    seoContent: [
      "Selling a house as-is in Palo Alto, Mountain View, or Cupertino means tapping into one of the most valuable real estate markets in the country. Our investors understand that a fixer-upper in Los Altos or Saratoga isn't just a house — it's a premium Silicon Valley location where renovated homes command extraordinary prices. That's why they compete aggressively for properties in any condition throughout Santa Clara County.",
      "Whether you need to sell an inherited home in San Jose, a property with unpermitted additions in Sunnyvale, or a dated ranch home in Campbell, HouseFlipDude connects you with cash buyers who specialize in South Bay renovations. Homeowners in Milpitas, Santa Clara, and Los Gatos have used our marketplace to get competing offers that consistently beat single-buyer lowball bids.",
      "If you're going through a divorce in Palo Alto, facing foreclosure in San Jose, or relocating from Mountain View and need to sell quickly, our investor network can close in as little as 7 days. No agent commissions, no repair costs — just competing cash offers from experienced investors who have collectively purchased over 120 homes across Santa Clara County."
    ],
    cities: ["Campbell", "Cupertino", "Gilroy", "Los Altos", "Los Altos Hills", "Los Gatos", "Milpitas", "Monte Sereno", "Morgan Hill", "Mountain View", "Palo Alto", "San Jose", "Santa Clara", "Saratoga", "Sunnyvale"],
    unincorporated: ["Alviso", "Alum Rock", "Burbank", "Cambrian", "Coyote", "East Foothills", "Fruitdale", "Lexington Hills", "Loyola", "Mount Hamilton", "New Almaden", "Rancho Rinconada", "San Martin", "Stanford"],
    situations: ["Outdated homes in prime locations", "Properties needing seismic retrofitting", "Homes with unpermitted additions", "Rental properties with problem tenants", "Estate sales", "Divorce situations"],
    localFacts: ["Silicon Valley location drives premium investor interest", "Our investors have purchased 120+ homes in Santa Clara County", "Tech worker demand keeps fixer values strong"],
  },
  "san-mateo": {
    name: "San Mateo County",
    county: "San Mateo County",
    h1: "Sell Your San Mateo County House Fast — Cash Offers from Competing Investors",
    seoTitle: "Sell Your House Fast in Redwood City, Menlo Park, Atherton & San Mateo County",
    metaDescription: "Sell your house fast in Redwood City, Menlo Park, Atherton, Burlingame, or San Carlos. Competing investors buy your San Mateo County home as-is — no fees, no repairs.",
    description: "The Peninsula's prime location between San Francisco and Silicon Valley makes every property valuable — even fixers. Our investor network covers Daly City to Redwood City and everywhere in between. Get competing cash offers with no repairs and no fees.",
    seoContent: [
      "Homeowners selling a house in Redwood City, Menlo Park, or Atherton are sitting on some of the most valuable real estate in California. Even a dated fixer-upper in these Peninsula communities commands serious investor attention because of the location premium. Our investor network specializes in San Mateo County properties — from mid-century homes in San Carlos and Belmont to hillside estates in Woodside and Portola Valley.",
      "If you need to sell a house fast in Burlingame, sell an inherited home in Hillsborough, or unload a property with termite damage in South San Francisco, HouseFlipDude's competing-offers model ensures you get top dollar. Investors bid against each other for properties in Daly City, San Mateo, and Foster City — and that competition works in your favor, not theirs.",
      "Whether you're downsizing from a family home in Menlo Park, dealing with a probate property in Redwood City, or selling a condo in San Bruno, our investors have purchased over 80 homes across San Mateo County and can close in as little as 7 days. No agent commissions, no staging, no open houses — just competing cash offers from buyers who perform."
    ],
    cities: ["Atherton", "Belmont", "Brisbane", "Burlingame", "Colma", "Daly City", "East Palo Alto", "Foster City", "Half Moon Bay", "Hillsborough", "Menlo Park", "Millbrae", "Pacifica", "Portola Valley", "Redwood City", "San Bruno", "San Carlos", "San Mateo", "South San Francisco", "Woodside"],
    unincorporated: ["Broadmoor", "Devonshire", "El Granada", "Emerald Lake Hills", "Fair Oaks", "Highlands-Baywood Park", "La Honda", "Ladera", "Loma Mar", "Los Trancos", "Montara", "Moss Beach", "North Fair Oaks", "Palomar Park", "Pescadero", "San Gregorio", "Sequoia Tract", "Sky Londa", "West Menlo Park"],
    situations: ["Mid-century homes needing modernization", "Properties with termite damage", "Homes on hillside lots", "Inherited Peninsula properties", "Condos and townhomes", "Properties with HOA issues"],
    localFacts: ["Peninsula location commands premium prices even for fixers", "Our network has purchased 80+ homes in San Mateo County", "Average competing offer is 10-15% above single-buyer offers"],
  },
  "contra-costa": {
    name: "Contra Costa County",
    county: "Contra Costa County",
    h1: "Sell Your Contra Costa County House Fast — Investors Compete for Your Property",
    seoTitle: "Sell Your House Fast in Danville, San Ramon, Walnut Creek & Contra Costa County",
    metaDescription: "Sell your house fast in Danville, San Ramon, Walnut Creek, Concord, or Lafayette. Competing investors buy your Contra Costa County home — any condition, no fees.",
    description: "From Concord to Walnut Creek, Richmond to Antioch, Contra Costa County is one of the Bay Area's most active markets for investor purchases. Our network of experienced buyers is ready to compete for your property in any condition.",
    seoContent: [
      "Whether you're looking to sell a house fast in Danville, sell a fixer-upper in San Ramon, or get cash offers for a property in Walnut Creek, HouseFlipDude's investor marketplace delivers competing bids from experienced buyers who know Contra Costa County. Homeowners in Lafayette, Orinda, and Moraga have used our platform to sell homes in any condition — without the hassle of repairs, staging, or months on the MLS.",
      "Selling an inherited home in Concord, a pre-foreclosure property in Antioch, or a dated ranch home in Pleasant Hill doesn't have to mean accepting a lowball offer from a single buyer. Our investor network includes specialists who focus on every Contra Costa community — from the upscale neighborhoods of Alamo and Blackhawk to the growing cities of Brentwood and Oakley. Competition between buyers means a better price for you.",
      "If you need to sell your house quickly in Martinez, Pinole, or El Cerrito, our investors can close in as little as 7 days. Homeowners across Hercules, Richmond, and Clayton have received competing cash offers within 48 hours of contacting our team. No commissions, no closing costs, and you pick the date that works for your timeline."
    ],
    cities: ["Antioch", "Brentwood", "Clayton", "Concord", "Danville", "El Cerrito", "Hercules", "Lafayette", "Martinez", "Moraga", "Oakley", "Orinda", "Pinole", "Pittsburg", "Pleasant Hill", "Richmond", "San Pablo", "San Ramon", "Walnut Creek"],
    unincorporated: ["Acalanes Ridge", "Alamo", "Alhambra Valley", "Bay Point", "Bayview", "Bethel Island", "Blackhawk", "Byron", "Camino Tassajara", "Castle Hill", "Clyde", "Contra Costa Centre", "Crockett", "Diablo", "Discovery Bay", "East Richmond Heights", "El Sobrante", "Kensington", "Knightsen", "Montalvin Manor", "Norris Canyon", "North Gate", "North Richmond", "Pacheco", "Port Costa", "Reliez Valley", "Rodeo", "Rollingwood", "San Miguel", "Saranap", "Shell Ridge", "Tara Hills", "Vine Hill"],
    situations: ["Ranch homes needing updates", "Properties in flood zones", "Homes with pool issues", "Pre-foreclosure properties", "Inherited homes", "Vacant properties"],
    localFacts: ["High investor demand across all Contra Costa cities", "Our network has purchased 90+ homes in the county", "Fast-growing communities attract strong investor interest"],
  },
  "marin": {
    name: "Marin County",
    county: "Marin County",
    h1: "Sell Your Marin County House Fast — Competing Cash Offers for Top Dollar",
    seoTitle: "Sell Your House Fast in Mill Valley, San Rafael, Novato & Marin County",
    metaDescription: "Sell your Marin County house fast in Mill Valley, San Rafael, Novato, Tiburon, or Sausalito. Competing investors buy your home as-is — no fees, no repairs needed.",
    description: "Marin County's premium real estate market means even distressed properties carry significant value. Our investor network includes specialists who focus on Marin's unique properties. Get multiple competing offers without the hassle of a traditional sale.",
    seoContent: [
      "Selling a house in Mill Valley, Tiburon, or Sausalito means working with a market where even fixers carry premium value. Our investor network understands the unique appeal of Marin County real estate — from hillside homes in Corte Madera and Larkspur to family properties in San Anselmo and Fairfax. Multiple investors compete for your property, ensuring you capture that premium rather than settling for a single lowball offer.",
      "If you need to sell an inherited home in San Rafael, a property with septic issues in Novato, or a fire-zone home in the hills above Mill Valley, HouseFlipDude connects you with cash buyers who specialize in Marin's distinct challenges. Homeowners in Ross, Belvedere, and Kentfield have used our marketplace to sell discreetly and quickly — no yard signs, no open houses, no public listings.",
      "Whether you're downsizing from a family home in Greenbrae, relocating from Tiburon, or dealing with a probate property in San Rafael, our investors can close on your timeline. Marin County sellers typically receive their first competing offer within 24 to 48 hours — with no commissions, no repair requirements, and complete confidentiality throughout the process."
    ],
    cities: ["Belvedere", "Corte Madera", "Fairfax", "Larkspur", "Mill Valley", "Novato", "Ross", "San Anselmo", "San Rafael", "Sausalito", "Tiburon"],
    unincorporated: ["Alto", "Belvedere Tiburon", "Black Point-Green Point", "Bolinas", "Dillon Beach", "Forest Knolls", "Greenbrae", "Inverness", "Kentfield", "Lagunitas", "Lucas Valley-Marinwood", "Marshall", "Muir Beach", "Nicasio", "Olema", "Point Reyes Station", "San Geronimo", "San Quentin", "Santa Venetia", "Sleepy Hollow", "Stinson Beach", "Strawberry", "Tamalpais-Homestead Valley", "Tomales", "Woodacre"],
    situations: ["Hillside properties with access challenges", "Homes with septic system issues", "Fire-zone properties", "Luxury fixers", "Inherited family homes", "Properties with environmental concerns"],
    localFacts: ["Premium market — even fixers command strong prices", "Specialized investors who understand Marin's unique market", "Discreet, off-market sales for privacy-conscious sellers"],
  },
  "sonoma": {
    name: "Sonoma County",
    county: "Sonoma County",
    h1: "Sell Your Sonoma County House Fast — Cash Buyers Compete for Your Property",
    seoTitle: "Sell Your House Fast in Santa Rosa, Petaluma, Healdsburg & Sonoma County",
    metaDescription: "Sell your Sonoma County house fast in Santa Rosa, Petaluma, Healdsburg, or Rohnert Park. Competing investors buy your home in any condition — no fees, no repairs.",
    description: "Whether you have a fixer in Santa Rosa, a rural property in Petaluma, or a home in Rohnert Park, our investor network covers all of Sonoma County. Multiple investors compete for your property, ensuring you get the best possible price.",
    seoContent: [
      "Homeowners looking to sell a house fast in Santa Rosa, Petaluma, or Healdsburg are finding that HouseFlipDude's competing-offers model delivers better results than dealing with a single cash buyer. Whether you own a fire-damaged property in the Fountaingrove area, a wine country estate in Sonoma or Glen Ellen, or a suburban home in Rohnert Park or Windsor, our investor network is actively buying across all of Sonoma County.",
      "If you need to sell an inherited home in Sebastopol, a rural property in Cloverdale, or a fixer-upper in Cotati, multiple investors will compete for your property — driving the price up rather than down. Our investors include fire-damage specialists, rural property experts, and experienced renovators who understand the unique characteristics of Sonoma County real estate from Bodega Bay to Geyserville.",
      "Selling a house as-is in Sonoma County doesn't mean accepting a discount. Our investors have purchased homes across Santa Rosa, Petaluma, and the surrounding communities, and they know the value of properties in this market. Most sellers receive competing offers within 48 hours — with no commissions, no repair requirements, and the flexibility to close on whatever date works best for your situation."
    ],
    cities: ["Cloverdale", "Cotati", "Healdsburg", "Petaluma", "Rohnert Park", "Santa Rosa", "Sebastopol", "Sonoma", "Windsor"],
    unincorporated: ["Annapolis", "Asti", "Bodega", "Bodega Bay", "Boyes Hot Springs", "Camp Meeker", "Cazadero", "Duncans Mills", "El Verano", "Eldridge", "Forestville", "Freestone", "Fulton", "Geyserville", "Glen Ellen", "Graton", "Guerneville", "Jenner", "Kenwood", "Larkfield-Wikiup", "Monte Rio", "Occidental", "Penngrove", "Rio Nido", "Sea Ranch", "Timber Cove", "Two Rock", "Valley Ford", "Vineburg"],
    situations: ["Fire-damaged properties", "Rural homes with acreage", "Wine country estates needing work", "Homes with well and septic", "Inherited properties", "Vacant land"],
    localFacts: ["Strong investor interest in Sonoma County rebuilds", "Our network includes fire-damage specialists", "Rural and suburban properties both attract competing offers"],
  },
  "solano": {
    name: "Solano County",
    county: "Solano County",
    h1: "Sell Your Solano County House Fast — Multiple Investors Want Your Property",
    seoTitle: "Sell Your House Fast in Vallejo, Fairfield, Vacaville & Solano County",
    metaDescription: "Sell your Solano County house fast in Vallejo, Fairfield, Vacaville, or Benicia. Competing investors buy your home in any condition — no fees, no repairs needed.",
    description: "Solano County offers some of the Bay Area's most affordable housing, which makes it a hotspot for investor activity. From Vallejo to Vacaville, our network of buyers is ready to compete for your property in any condition.",
    seoContent: [
      "If you need to sell a house fast in Vallejo, Fairfield, or Vacaville, HouseFlipDude's investor marketplace connects you with multiple competing buyers who actively purchase properties throughout Solano County. Whether you own a home near Mare Island in Vallejo, a property in Suisun City, or a ranch home in Dixon, our investors are ready to make cash offers — no repairs required, no fees to you.",
      "Selling a house as-is in Benicia, dealing with a pre-foreclosure property in Fairfield, or trying to unload an inherited home in Vacaville doesn't have to mean settling for one lowball offer. Our investor network includes experienced buyers who specialize in Solano County and understand the value of properties in Rio Vista, Suisun City, and every community in between. Competition between investors means a better price for you.",
      "Solano County's affordable price points attract high investor competition — which is great news for sellers. Homeowners in Vallejo, Fairfield, and Vacaville typically receive their first competing offer within 24 to 48 hours. Our investors have purchased over 60 homes across the county and can close in as little as 7 days. No commissions, no staging, no open houses."
    ],
    cities: ["Benicia", "Dixon", "Fairfield", "Rio Vista", "Suisun City", "Vacaville", "Vallejo"],
    unincorporated: ["Birds Landing", "Collinsville", "Denverton", "Elmira", "Green Valley", "Hartley", "Suisun Valley", "Travis AFB"],
    situations: ["Military relocation sales", "Properties near Mare Island", "Homes with deferred maintenance", "Pre-foreclosure situations", "Inherited properties", "Rental properties"],
    localFacts: ["Affordable price points attract high investor competition", "Our network has purchased 60+ homes in Solano County", "Growing demand from Bay Area commuters drives investor interest"],
  },
  "napa": {
    name: "Napa County",
    county: "Napa County",
    h1: "Sell Your Napa County House Fast — Competing Cash Offers from Investors",
    seoTitle: "Sell Your House Fast in Napa, St. Helena, Calistoga & Napa County",
    metaDescription: "Sell your Napa County house fast in Napa, St. Helena, Calistoga, or American Canyon. Competing investors buy your home as-is — no fees, no repairs needed.",
    description: "Napa County's unique blend of wine country and residential communities creates opportunities for sellers with properties in any condition. Our investor network includes specialists who understand Napa's distinct market.",
    seoContent: [
      "Whether you need to sell a house fast in Napa, an inherited wine country estate in St. Helena, or a property in American Canyon, HouseFlipDude connects you with multiple competing investors who understand the unique value of Napa County real estate. Our investors specialize in everything from residential fixers in downtown Napa to agricultural properties in Calistoga and Yountville.",
      "Selling a home as-is in Napa County doesn't mean sacrificing value. When experienced investors compete for your property in Napa, St. Helena, or the surrounding communities, the competition drives prices up. Whether your home needs renovation, has agricultural zoning complications, or is tied up in probate, our investors have the experience and capital to close quickly and pay a fair price.",
      "Homeowners in Napa County who need to sell quickly — whether due to inheritance, divorce, relocation, or financial hardship — can receive competing cash offers within 48 hours. Our investors have purchased properties across Napa, American Canyon, and the wine country communities, and they close on your timeline with no commissions, no fees, and no surprises."
    ],
    cities: ["American Canyon", "Calistoga", "Napa", "St. Helena", "Yountville"],
    unincorporated: ["Aetna Springs", "Angwin", "Berryessa Highlands", "Circle Oaks", "Deer Park", "Enchanted Hills", "Lake Berryessa", "Oakville", "Pope Valley", "Rutherford", "Silverado", "Spanish Flat"],
    situations: ["Wine country properties needing renovation", "Homes with agricultural zoning", "Inherited family estates", "Properties with water rights issues", "Vacation homes", "Fixer-uppers"],
    localFacts: ["Wine country location adds premium value to all properties", "Specialized investors who understand Napa's zoning and regulations", "Discreet sales for high-value properties"],
  },
  "sacramento": {
    name: "Sacramento",
    county: "Sacramento County",
    h1: "Sell Your Sacramento House Fast — Investors Compete to Buy Your Property",
    seoTitle: "Sell Your House Fast in Sacramento, Elk Grove, Folsom & Roseville",
    metaDescription: "Sell your Sacramento house fast in Elk Grove, Folsom, Rancho Cordova, or Citrus Heights. Competing investors buy your home in any condition — no fees, no repairs.",
    description: "Sacramento's booming real estate market has attracted significant investor interest. Whether you have a fixer in Midtown, a ranch home in Elk Grove, or a property in Roseville, our network of investors is ready to compete for your house.",
    seoContent: [
      "If you need to sell a house fast in Sacramento, Elk Grove, or Folsom, HouseFlipDude's investor marketplace delivers competing cash offers from experienced buyers who know the Sacramento market. Whether you own a craftsman in Midtown, a ranch home in Carmichael, or a property with deferred maintenance in Rancho Cordova, our investors are actively buying across all of Sacramento County.",
      "Selling an inherited home in Fair Oaks, a pre-foreclosure property in Citrus Heights, or a fixer-upper in Arden-Arcade doesn't mean settling for one lowball offer. Our investor network competes for properties in every Sacramento neighborhood — from North Highlands and Antelope to Gold River and Orangevale. That competition means a better price for you, with none of the hassle of a traditional listing.",
      "Sacramento is one of California's fastest-growing investor markets, and our network has purchased over 70 homes in the metro area. Sellers in Sacramento, Elk Grove, and the surrounding communities typically receive competing offers within 48 hours — with no commissions, no repair costs, and the flexibility to close on your schedule."
    ],
    cities: ["Sacramento", "Elk Grove", "Rancho Cordova", "Folsom", "Citrus Heights", "Galt"],
    unincorporated: ["Arden-Arcade", "Antelope", "Carmichael", "Fair Oaks", "Florin", "Gold River", "North Highlands", "Orangevale", "Rancho Murieta", "Rio Linda", "Rosemont", "Vineyard", "Wilton"],
    situations: ["Older homes needing modernization", "Properties in flood zones", "Inherited homes", "Rental properties with tenant issues", "Pre-foreclosure situations", "Homes with foundation problems"],
    localFacts: ["Sacramento is one of California's fastest-growing investor markets", "Our network has purchased 70+ homes in the Sacramento metro", "State capital location drives consistent demand"],
  },
  "stockton": {
    name: "Stockton / San Joaquin County",
    county: "San Joaquin County",
    h1: "Sell Your Stockton & San Joaquin County House Fast — Cash Buyers Compete",
    seoTitle: "Sell Your House Fast in Stockton, Tracy, Manteca & San Joaquin County",
    metaDescription: "Sell your house fast in Stockton, Tracy, Manteca, or Lodi. Competing investors buy your San Joaquin County home in any condition — no fees, no repairs needed.",
    description: "Stockton and San Joaquin County offer tremendous value for investors, which means strong competing offers for sellers. Our network actively purchases properties throughout Tracy, Manteca, Lodi, and the greater Stockton area.",
    seoContent: [
      "Whether you need to sell a house fast in Stockton, Tracy, or Manteca, HouseFlipDude connects you with multiple investors who compete to buy your San Joaquin County property. Our investors are actively purchasing homes in Lodi, Lathrop, and Ripon — and the competition between buyers means you get a better price than dealing with a single cash buyer.",
      "Selling a house as-is in Stockton or the surrounding communities doesn't mean accepting a lowball offer. If you have an inherited home in Tracy, a pre-foreclosure property in Manteca, or a rental property in Lodi that you need to unload, our investor network has the experience and capital to close quickly. They've purchased over 50 homes across San Joaquin County.",
      "San Joaquin County's affordable price points attract high investor competition — which works in your favor as a seller. Homeowners in Stockton, Tracy, and Manteca typically receive competing cash offers within 48 hours, with no commissions, no repair requirements, and the ability to close in as little as 7 days."
    ],
    cities: ["Stockton", "Tracy", "Manteca", "Lodi", "Lathrop", "Ripon", "Escalon"],
    unincorporated: ["Acampo", "Country Club", "French Camp", "Garden Acres", "Lincoln Village", "Lockeford", "Morada", "Thornton", "Victor", "Woodbridge"],
    situations: ["Properties in older Stockton neighborhoods", "Homes with deferred maintenance", "Inherited properties", "Pre-foreclosure situations", "Rental properties", "Vacant homes"],
    localFacts: ["Affordable prices attract high investor competition", "Our network has purchased 50+ homes in San Joaquin County", "Bay Area commuter demand drives strong investor interest"],
  },
  "modesto": {
    name: "Modesto / Stanislaus County",
    county: "Stanislaus County",
    h1: "Sell Your Modesto & Stanislaus County House Fast — Competing Investor Offers",
    seoTitle: "Sell Your House Fast in Modesto, Turlock, Ceres & Stanislaus County",
    metaDescription: "Sell your house fast in Modesto, Turlock, Ceres, or Patterson. Competing investors buy your Stanislaus County home in any condition — no fees, no repairs.",
    description: "Stanislaus County's affordable housing market is a magnet for experienced investors. Whether you have a fixer in Modesto, Turlock, or anywhere in Stanislaus County, our network is ready to compete for your property.",
    seoContent: [
      "If you need to sell a house fast in Modesto, Turlock, or Ceres, HouseFlipDude's investor marketplace delivers competing cash offers from buyers who specialize in Stanislaus County properties. Whether you own an older home in downtown Modesto, a property with deferred maintenance in Patterson, or a ranch home in Oakdale, our investors are ready to compete for your property.",
      "Selling an inherited home in Turlock, a pre-foreclosure property in Riverbank, or a fixer-upper in Hughson doesn't have to mean accepting the first offer that comes along. Our investor network includes experienced buyers who understand the Central Valley market and compete against each other for properties in every Stanislaus County community — from Newman and Waterford to Salida and Empire.",
      "Stanislaus County's affordable entry points attract strong investor competition, which means better prices for sellers. Our network has purchased over 40 homes in the region, and most sellers receive their first competing offer within 48 hours. No commissions, no repairs, no fees — just cash offers from investors who close on your timeline."
    ],
    cities: ["Modesto", "Turlock", "Ceres", "Patterson", "Oakdale", "Riverbank", "Newman", "Hughson", "Waterford"],
    unincorporated: ["Denair", "Diablo Grande", "Empire", "Keyes", "Salida", "Westley"],
    situations: ["Agricultural properties", "Homes with well and septic systems", "Older homes needing renovation", "Inherited properties", "Pre-foreclosure situations", "Vacant properties"],
    localFacts: ["Stanislaus County's growth attracts strong investor interest", "Our network has purchased 40+ homes in the region", "Affordable entry points mean more competing investors"],
  },
  "santa-cruz": {
    name: "Santa Cruz County",
    county: "Santa Cruz County",
    h1: "Sell Your Santa Cruz County House Fast — Investors Compete for Top Dollar",
    seoTitle: "Sell Your House Fast in Santa Cruz, Capitola, Scotts Valley & Santa Cruz County",
    metaDescription: "Sell your Santa Cruz County house fast in Santa Cruz, Capitola, Scotts Valley, or Aptos. Competing investors buy your home in any condition — no fees, no repairs.",
    description: "Santa Cruz County's unique coastal market blends beach town charm with strong investor demand. Whether you have a fixer in Santa Cruz, a cabin in the mountains, or a ranch home in Watsonville, our network of investors is ready to compete for your property — no repairs, no fees, and you choose the closing date.",
    seoContent: [
      "Whether you need to sell a house fast in Santa Cruz, a coastal property in Capitola, or a mountain cabin in Scotts Valley, HouseFlipDude connects you with multiple investors who compete for your Santa Cruz County property. Our investors understand the unique value of coastal real estate — from beach bungalows in Aptos and Soquel to hillside homes in Ben Lomond and Boulder Creek.",
      "Selling a house as-is in Santa Cruz County means you don't have to invest in expensive repairs or wait months for a traditional sale. If you have an inherited beach property in Live Oak, a fixer-upper in Watsonville, or a home with septic issues in Felton, our investor network has the experience to handle any situation. Competition between buyers ensures you get a fair price.",
      "Santa Cruz County sellers typically receive competing cash offers within 48 hours of connecting with our team. Our investors have purchased over 30 homes across the county and can close in as little as 7 days — no commissions, no staging, no open houses. Whether you're dealing with inheritance, foreclosure, divorce, or simply need to sell quickly, we're here to help."
    ],
    cities: ["Santa Cruz", "Watsonville", "Scotts Valley", "Capitola"],
    unincorporated: ["Aptos", "Ben Lomond", "Bonny Doon", "Boulder Creek", "Corralitos", "Davenport", "Felton", "La Selva Beach", "Live Oak", "Rio del Mar", "Soquel"],
    situations: ["Coastal properties needing renovation", "Mountain cabins and retreats", "Homes with deferred maintenance", "Inherited beach properties", "Properties with septic or well issues", "Homes in fire or flood zones"],
    localFacts: ["Coastal location drives premium investor interest even for fixers", "Our network has purchased 30+ homes in Santa Cruz County", "Strong demand from Bay Area buyers relocating to the coast"],
  },
  "monterey": {
    name: "Monterey County",
    county: "Monterey County",
    h1: "Sell Your Monterey County House Fast — Multiple Cash Offers from Competing Investors",
    seoTitle: "Sell Your House Fast in Monterey, Salinas, Pacific Grove & Monterey County",
    metaDescription: "Sell your Monterey County house fast in Monterey, Salinas, Pacific Grove, or Marina. Competing investors buy your home in any condition — no fees, no repairs.",
    description: "Monterey County offers a diverse real estate landscape from the Monterey Peninsula to the Salinas Valley. Our investor network actively seeks properties throughout the county — from coastal fixers in Pacific Grove to agricultural properties in Salinas. Get multiple competing offers without the hassle of a traditional sale.",
    seoContent: [
      "Whether you need to sell a house fast in Monterey, a property in Salinas, or a coastal home in Pacific Grove, HouseFlipDude's investor marketplace connects you with multiple competing buyers who understand Monterey County's diverse real estate market. Our investors purchase everything from Monterey Peninsula cottages to Salinas Valley agricultural properties — in any condition, with no repairs required.",
      "Selling an inherited home in Marina, a fixer-upper in Seaside, or a property with structural issues in Gonzales doesn't mean accepting a single lowball offer. Our investor network competes for properties across all of Monterey County — from the coastal communities of Pacific Grove and Carmel Valley to the growing cities of Soledad and Greenfield. That competition means a better price for you.",
      "Monterey County sellers typically receive their first competing cash offer within 48 hours. Our investors have purchased over 25 homes across the county and can close in as little as 7 days. No agent commissions, no repair costs, no staging — just competing offers from experienced investors who close on your timeline."
    ],
    cities: ["Monterey", "Salinas", "Seaside", "Marina", "Pacific Grove", "Soledad", "Gonzales", "King City", "Greenfield"],
    unincorporated: ["Boronda", "Carmel Valley Village", "Castroville", "Chualar", "Moss Landing", "Pajaro", "Prunedale", "San Ardo", "San Lucas", "Spreckels"],
    situations: ["Coastal properties needing updates", "Agricultural homes and ranch properties", "Inherited family homes", "Homes with foundation or structural issues", "Properties in pre-foreclosure", "Vacant or abandoned properties"],
    localFacts: ["Monterey Peninsula location adds premium value to all properties", "Our network has purchased 25+ homes in Monterey County", "Agricultural and residential properties both attract strong investor competition"],
  },
};

export default function ServiceAreaDetail() {
  const params = useParams<{ slug: string }>();
  const area = areaData[params.slug || ""];

  useEffect(() => {
    if (area) {
      document.title = area.seoTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", area.metaDescription);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = area.metaDescription;
        document.head.appendChild(meta);
      }
    }
    return () => {
      document.title = "HouseFlipDude — Bay Area's Investor Marketplace for Home Sellers";
    };
  }, [area]);

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

      {/* SEO Content Block — Keyword-Rich Paragraphs */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Selling Your House in {area.county}
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            {area.seoContent.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
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
