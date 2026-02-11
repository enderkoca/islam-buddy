"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { AppStoreBadges } from "../ui/AppStoreBadges";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();
  const pathname = usePathname();

  // Check if we're on the homepage
  const isHomePage = pathname === "/";

  const links = [
    { href: isHomePage ? "#features" : "/#features", label: t("features") },
    { href: isHomePage ? "#faq" : "/#faq", label: t("faq") },
  ];

  return (
    <footer className="relative bg-primary-950">
      {/* Islamic geometric pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: 'url(/images/islamic-pattern.png)', backgroundSize: '250px', backgroundRepeat: 'repeat', filter: 'invert(1)' }} />

      {/* Gold accent line */}
      <div className="relative h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      <div className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/app-icon.png"
                alt={t("appName")}
                width={52}
                height={52}
                className="rounded-xl"
              />
              <div>
                <h2 className="text-xl font-bold text-white">{t("appName")}</h2>
                <p className="text-xs text-primary-400">{t("appTagline")}</p>
              </div>
            </div>
            <p className="mb-6 text-sm text-primary-300">{t("tagline")}</p>
            <AppStoreBadges size="small" align="start" />
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-500">{t("links")}</h3>
            <nav className="flex flex-col gap-3" aria-label="Footer">
              {links.map((link) => (
                isHomePage ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-primary-300 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-primary-300 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-500">{t("legal")}</h3>
            <nav className="flex flex-col gap-3" aria-label="Legal">
              <Link href="/privacy-policy" className="text-sm text-primary-300 transition-colors hover:text-gold-400">
                {t("privacy")}
              </Link>
              <Link href="/terms-of-use" className="text-sm text-primary-300 transition-colors hover:text-gold-400">
                {t("terms")}
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-primary-800 pt-8">
          <div className="flex flex-col gap-1 text-xs text-primary-500 sm:flex-row sm:items-center sm:gap-2">
            <span>{t("copyright", { year })}</span>
            <span className="hidden sm:inline">•</span>
            <span>{t("developedBy")}</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
