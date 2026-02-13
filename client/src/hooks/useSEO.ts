import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

/**
 * Sets the document title and meta description for SEO.
 * Call once at the top of each page component.
 */
export function useSEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = title;

    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", description);
      document.head.appendChild(metaDesc);
    }

    // Cleanup: restore defaults when component unmounts
    return () => {
      document.title = "HouseFlipDude | Investors Compete to Buy Your Bay Area House for Top Dollar";
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", "Sell your Bay Area house fast. Multiple investors compete to buy your property — any condition, no fees. Get competing cash offers today.");
      }
    };
  }, [title, description]);
}
