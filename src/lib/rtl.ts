import type { Locale } from "@/i18n/routing";

const rtlLocales = new Set(["ar"]);

export function isRtl(locale: Locale): boolean {
  return rtlLocales.has(locale);
}

export function getDir(locale: Locale): "rtl" | "ltr" {
  return isRtl(locale) ? "rtl" : "ltr";
}
