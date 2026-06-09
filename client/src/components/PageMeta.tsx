/*
 * PageMeta — SunshineDrive Rentals
 * Sets Open Graph meta tags, Twitter cards, and page title dynamically
 * Uses useEffect to update document.head since this is a client-side SPA
 */
import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

const BASE_URL = "https://sunshinedriverentals.com";
const DEFAULT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663560999880/49fKAb8YKmx9TKxZnTNDi6/fleet-hero-SDFDkraW4voMzFBcXETjtg.png";

export default function PageMeta({ title, description, image, url, type = "website" }: PageMetaProps) {
  const fullTitle = title.includes("SunshineDrive") ? title : `${title} | SunshineDrive Rentals`;
  const ogImage = image || DEFAULT_IMAGE;
  const ogUrl = url ? `${BASE_URL}${url}` : BASE_URL;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper to set or create a meta tag
    const setMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setMetaName = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Open Graph
    setMeta("og:title", fullTitle);
    setMeta("og:description", description);
    setMeta("og:image", ogImage);
    setMeta("og:url", ogUrl);
    setMeta("og:type", type);
    setMeta("og:site_name", "SunshineDrive Rentals");

    // Twitter Card
    setMetaName("twitter:card", "summary_large_image");
    setMetaName("twitter:title", fullTitle);
    setMetaName("twitter:description", description);
    setMetaName("twitter:image", ogImage);

    // Standard meta description
    setMetaName("description", description);
  }, [fullTitle, description, ogImage, ogUrl, type]);

  return null;
}
