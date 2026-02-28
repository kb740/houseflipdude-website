import { useEffect } from "react";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "HouseFlipDude",
  "alternateName": "House Flip Dude - Bay Area Cash Home Buyers",
  "description": "Multiple investors compete to buy your San Francisco Bay Area house for top dollar. Any condition, no fees, close on your timeline.",
  "url": "https://www.houseflipdude.com",
  "telephone": "(925) 588-7804",
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
  "sameAs": [
    "https://www.youtube.com/@HouseFlipDude",
    "https://www.instagram.com/houseflipdude/",
    "https://www.facebook.com/profile.php?id=100014916131942",
    "https://www.linkedin.com/in/houseflipdude/",
    "https://x.com/HouseFlipDude"
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
    const schemas = [localBusinessSchema, reviewSchema];
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
