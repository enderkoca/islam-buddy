import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { locales } from "@/i18n/routing";

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";

  // Detect user's preferred language from browser
  let locale = "en"; // Default to English

  // Check each supported language in order of preference
  const languageMap: Record<string, string> = {
    tr: "tr", // Turkish
    ar: "ar", // Arabic
    fr: "fr", // French
    es: "es", // Spanish
    de: "de", // German
    nl: "nl", // Dutch
    en: "en", // English
  };

  // Parse Accept-Language header and find the best match
  for (const [code, lang] of Object.entries(languageMap)) {
    if (acceptLanguage.toLowerCase().includes(code)) {
      locale = lang;
      break;
    }
  }

  // Fallback to English if detected language is not supported
  if (!locales.includes(locale as any)) {
    locale = "en";
  }

  redirect(`/${locale}`);
}
