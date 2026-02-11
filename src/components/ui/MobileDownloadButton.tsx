"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { APP_STORE_URL } from "@/lib/constants";

export function MobileDownloadButton() {
  const t = useTranslations("header");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 px-4 md:hidden">
      <a
        href={APP_STORE_URL}
        className="flex items-center justify-center gap-3 w-full rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 px-8 py-6 shadow-2xl shadow-gold-500/40 active:scale-95 transition-transform"
      >
        {/* Download icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-950/15">
          <svg
            className="h-6 w-6 text-primary-950"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </div>

        {/* Text */}
        <div className="flex flex-col items-start">
          <span className="text-sm font-black text-primary-900 uppercase tracking-wider">
            {t("language") === "Language" ? "Free Download" : "Ücretsiz İndir"}
          </span>
          <span className="text-xs font-bold text-primary-800">
            {t("language") === "Language" ? "Get the app now" : "Uygulamayı şimdi indir"}
          </span>
        </div>
      </a>

      {/* Bottom safe area spacer */}
      <div className="h-2" />
    </div>
  );
}
