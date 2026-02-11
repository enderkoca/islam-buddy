"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { APP_STORE_URL } from "@/lib/constants";

export function Header() {
  const t = useTranslations("header");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if we're on the homepage
  const isHomePage = pathname === "/";

  const navLinks = [
    { href: isHomePage ? "#ramadan" : "/#ramadan", label: t("ramadan") },
    { href: isHomePage ? "#features" : "/#features", label: t("features") },
    { href: isHomePage ? "#faq" : "/#faq", label: t("faq") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary-950">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Islam Buddy"
          >
            <Image
              src="/app-icon.png"
              alt={t("appName")}
              width={44}
              height={44}
              className="rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white">
                {t("appName")}
              </span>
              <span className="text-[10px] font-medium text-primary-300">
                {t("appTagline")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              isHomePage ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-primary-200 transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold-500 transition-all duration-300 hover:w-full" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-primary-200 transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold-500 transition-all duration-300 hover:w-full" />
                </Link>
              )
            ))}

            <div className="h-5 w-px bg-primary-700" />

            <LocaleSwitcher />

            <a
              href={APP_STORE_URL}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-2.5 text-sm font-semibold text-primary-950 shadow-lg shadow-gold-500/20 transition-all hover:shadow-xl hover:shadow-gold-500/30"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              {t("download")}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-800 text-primary-200 transition-colors hover:bg-primary-700 hover:text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h18M3 6h18M3 18h18"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          className="border-t border-primary-800 bg-primary-900 px-4 pb-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              isHomePage ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-primary-200 transition-colors hover:bg-primary-800 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-primary-200 transition-colors hover:bg-primary-800 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}

            <div className="my-2 h-px bg-primary-800" />

            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-sm text-primary-400">{t("language")}</span>
              <LocaleSwitcher />
            </div>

            <a
              href={APP_STORE_URL}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-3 text-sm font-semibold text-primary-950"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              {t("download")}
            </a>
          </div>
        </nav>
      )}

    </header>
  );
}
