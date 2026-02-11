import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ar", "tr", "fr", "es", "de", "nl"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
});
