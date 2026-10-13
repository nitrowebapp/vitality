import en from "@/locales/en.json";
import pt from "@/locales/pt.json";
import es from "@/locales/es.json";
import { LOCALES, type Locale } from "@/lib/i18n";

export const SITE_URL = "https://www.vitalityneurorehab.com";
export const SITE_NAME = "Vitality Neuro Rehab";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const RESOURCES: Record<Locale, typeof en> = { en, pt, es };

export type PageKey = "home" | "about" | "services" | "conditions" | "contact";

const PATHS: Record<PageKey, string> = {
  home: "",
  about: "/about",
  services: "/services",
  conditions: "/conditions",
  contact: "/contact",
};

const OG_LOCALE: Record<Locale, string> = { en: "en_US", pt: "pt_BR", es: "es_ES" };

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

/** Head tags (title, description, Open Graph, canonical, hreflang) for a page in a locale. */
export function pageHead(page: PageKey, rawLocale: string | undefined) {
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const seo = RESOURCES[locale].seo[page];
  const path = PATHS[page];
  const canonical = `${SITE_URL}/${locale}${path}`;
  const title = `${seo.title} | ${SITE_NAME}`;

  return {
    meta: [
      { title },
      { name: "description", content: seo.description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: OG_LOCALE[locale] },
      { property: "og:title", content: title },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: seo.description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: canonical },
      ...LOCALES.map((l) => ({ rel: "alternate", hrefLang: l, href: `${SITE_URL}/${l}${path}` })),
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}/en${path}` },
    ],
  };
}

/** JSON-LD for the clinic (LocalBusiness / MedicalBusiness). */
export const CLINIC_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  image: OG_IMAGE,
  logo: `${SITE_URL}/logo-circle.png`,
  telephone: "+1-689-269-7762",
  email: "ellencsteixeira@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Windermere",
    addressRegion: "FL",
    postalCode: "34786",
    addressCountry: "US",
  },
  areaServed: "Greater Orlando, FL",
  medicalSpecialty: "PhysicalTherapy",
  availableLanguage: ["English", "Portuguese", "Spanish"],
  openingHours: "Mo-Fr 08:00-18:00",
  founder: {
    "@type": "Person",
    name: "Ellen Cristina Souza Teixeira",
    jobTitle: "Physical Therapist, DPT, NCS",
  },
};
