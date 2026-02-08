import { useEffect } from "react";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "HouseFlipDude",
  "alternateName": "House Flip Dude - Bay Area Cash Home Buyers",
  "description": "Multiple investors compete to buy your San Francisco Bay Area house for top dollar. Any condition, no fees, close on your timeline.",
  "url": "https://www.houseflipdude.com",
  "telephone": "(415) 686-2846",
  "email": "kb@houseflipdude.com",
  "founder": {
    "@type": "Person",
    "name": "Kelly Beardslee",
    "jobTitle": "Licensed Real Estate Broker",
    "identifier": {
      "@type": "PropertyValue",
      "name": "California DRE License",
      "value": "01205925"
    }
  },
  "areaServed": [
    { "@type": "City", "name": "San Francisco", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "City", "name": "Oakland", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "City", "name": "San Jose", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "AdministrativeArea", "name": "San Mateo County", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "AdministrativeArea", "name": "Contra Costa County", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "AdministrativeArea", "name": "Marin County", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "AdministrativeArea", "name": "Sonoma County", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "AdministrativeArea", "name": "Solano County", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "AdministrativeArea", "name": "Napa County", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "City", "name": "Sacramento", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "City", "name": "Stockton", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "City", "name": "Modesto", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "AdministrativeArea", "name": "Santa Cruz County", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "AdministrativeArea", "name": "Monterey County", "containedInPlace": { "@type": "State", "name": "California" } },
  ],
  "knowsAbout": [
    "Cash home buying",
    "House flipping",
    "Distressed property acquisition",
    "Probate property sales",
    "Foreclosure prevention",
    "As-is home sales"
  ],
  "slogan": "Investors Compete to Buy Your House for Top Dollar",
  "priceRange": "$$$$",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of houses does HouseFlipDude buy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We buy houses in any condition — fixer-uppers, inherited properties, homes with tenant issues, properties behind on payments, fire-damaged, outdated, and more. If it's a house in the Bay Area, Sacramento, or Central Valley, our investors are interested."
      }
    },
    {
      "@type": "Question",
      "name": "How is HouseFlipDude different from typical 'We Buy Houses' companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most cash buyer companies give you a single take-it-or-leave-it offer. At HouseFlipDude, multiple investors compete for your property, which means you get a better price. Think of it like LendingTree for home selling — competition works in your favor."
      }
    },
    {
      "@type": "Question",
      "name": "Do I have to pay any fees or commissions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely not. You pay zero fees, zero commissions, and zero closing costs. The investor buyer covers all of that. What we offer you is what you walk away with."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can I close on my house?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That's entirely up to you. Some sellers close in as little as 7 days. Others need 30-60 days to get their affairs in order. You pick the timeline that works for your life."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to make repairs before selling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Our investors buy houses as-is. Leave the old furniture, the overgrown yard, the leaky roof — that's what our investors specialize in. You don't need to lift a finger."
      }
    },
    {
      "@type": "Question",
      "name": "What areas does HouseFlipDude serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve all 14 Greater Bay Area counties (San Francisco, Alameda, Santa Clara, San Mateo, Contra Costa, Marin, Sonoma, Solano, Napa, Santa Cruz, and Monterey), plus Sacramento and the Central Valley (Stockton, Modesto/Stanislaus County, and surrounding areas)."
      }
    }
  ]
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "HouseFlipDude",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "9",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export default function SchemaMarkup() {
  useEffect(() => {
    const schemas = [localBusinessSchema, faqSchema, reviewSchema];
    const scriptElements: HTMLScriptElement[] = [];

    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    return () => {
      scriptElements.forEach(el => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
    };
  }, []);

  return null;
}
