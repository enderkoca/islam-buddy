import { useLocale, useTranslations } from "next-intl";
import { SITE_URL, SITE_NAME, APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";

export function JsonLd() {
  const locale = useLocale();
  const t = useTranslations();

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/app-icon.png`,
    sameAs: [
      APP_STORE_URL,
      PLAY_STORE_URL,
    ],
  };

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: SITE_NAME,
    operatingSystem: "iOS, Android",
    applicationCategory: "LifestyleApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    installUrl: APP_STORE_URL,
    description: t("metadata.description"),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "15000",
      bestRating: "5",
      worstRating: "1",
    },
    downloadUrl: APP_STORE_URL,
    softwareVersion: "1.0",
    inLanguage: ["en", "ar", "tr", "fr", "es", "de", "nl"],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: Array.from({ length: 10 }, (_, i) => ({
      "@type": "Question",
      name: t(`faq.q${i + 1}.question`),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`faq.q${i + 1}.answer`),
      },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/${locale}`,
      },
    ],
  };

  // Ramadan 2026 Event Schema for SEO
  const ramadanEvent = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: t("ramadan.title"),
    description: t("ramadan.subtitle"),
    startDate: "2026-02-17",
    endDate: "2026-03-18",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: `${SITE_URL}/${locale}`,
    },
    organizer: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: APP_STORE_URL,
      validFrom: "2026-01-01",
    },
    image: `${SITE_URL}/app-icon.png`,
    keywords: "Ramadan 2026, Imsakiye, Iftar, Sahur, Prayer Times, Ramadan Calendar, Islamic App",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ramadanEvent) }}
      />
    </>
  );
}
