import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function RootNotFound() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";

  // Detect user's preferred language
  let locale = "en"; // Default to English

  const languageMap: Record<string, string> = {
    tr: "tr",
    ar: "ar",
    fr: "fr",
    es: "es",
    de: "de",
    nl: "nl",
  };

  // Find the best match from Accept-Language header
  for (const [code, lang] of Object.entries(languageMap)) {
    if (acceptLanguage.toLowerCase().includes(code)) {
      locale = lang;
      break;
    }
  }

  // Redirect to detected locale
  redirect(`/${locale}`);
}
