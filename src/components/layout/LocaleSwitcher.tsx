"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";

export function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    router.replace(pathname, { locale: e.target.value as Locale });
  }

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{t("label")}</span>
      <svg
        className="pointer-events-none absolute start-3 h-4 w-4 text-primary-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
      <select
        value={locale}
        onChange={onChange}
        className="cursor-pointer appearance-none rounded-lg border border-primary-700 bg-primary-800 py-2 pe-8 ps-9 text-sm font-medium text-primary-200 transition-all hover:border-primary-600 hover:bg-primary-700 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {t(l)}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute end-2.5 h-4 w-4 text-primary-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </label>
  );
}
