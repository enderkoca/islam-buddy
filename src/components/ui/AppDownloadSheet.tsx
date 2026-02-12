"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { APP_STORE_URL } from "@/lib/constants";

export function AppDownloadSheet() {
  const t = useTranslations("appDownloadSheet");
  const [isVisible, setIsVisible] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);

  useEffect(() => {
    // Check if user has dismissed before
    const dismissed = localStorage.getItem("app-download-sheet-v1");
    if (dismissed) {
      return;
    }

    // Show on mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setIsVisible(true);

      // Show close button after 5 seconds
      const timer = setTimeout(() => {
        setShowCloseButton(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("app-download-sheet-v1", "true");
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-[100] md:hidden" onClick={handleDismiss} />

      {/* Bottom Sheet */}
      <div className="fixed inset-x-0 bottom-0 z-[101] md:hidden animate-in slide-in-from-bottom duration-300">
        <div className="bg-gradient-to-b from-white to-surface-50 rounded-t-3xl shadow-2xl px-6 py-8 relative border-t-4 border-gold-500">
          {/* Close Button - Appears after 5 seconds */}
          {showCloseButton && (
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-primary-100 hover:bg-primary-200 transition-colors shadow-md"
              aria-label="Close"
            >
              <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* App Logo */}
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-3xl blur-md opacity-40" />
              <Image
                src="/app-icon.png"
                alt="Islam & Deen Buddy"
                width={88}
                height={88}
                className="relative rounded-3xl shadow-xl"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Text */}
          <h3 className="text-center text-xl font-bold text-primary-950 mb-2">
            {t("title")}
          </h3>
          <p className="text-center text-sm text-primary-700 mb-6">
            {t("description")}
          </p>

          {/* Download Button */}
          <a
            href={APP_STORE_URL}
            className="block w-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-primary-950 text-center py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98] hover:from-gold-600 hover:via-gold-500 hover:to-gold-600"
          >
            {t("downloadButton")}
          </a>

          {/* Safe area for mobile devices */}
          <div className="h-4" />
        </div>
      </div>
    </>
  );
}
