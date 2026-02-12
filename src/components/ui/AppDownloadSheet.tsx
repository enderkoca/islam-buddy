"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { APP_STORE_URL } from "@/lib/constants";

export function AppDownloadSheet() {
  const t = useTranslations("header");
  const [isVisible, setIsVisible] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed before
    const dismissed = localStorage.getItem("app-sheet-dismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show immediately on mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setIsVisible(true);

      // Show close button after 5 seconds
      const closeButtonTimer = setTimeout(() => {
        setShowCloseButton(true);
      }, 5000);

      return () => clearTimeout(closeButtonTimer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem("app-sheet-dismissed", "true");
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[101] md:hidden">
      <div className="bg-white shadow-2xl border-t border-primary-200">
        {/* Close Button - Appears after 5 seconds */}
        {showCloseButton && (
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition-all shadow-lg animate-in zoom-in duration-300"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Content */}
        <div className="px-5 pt-5 pb-3">
          {/* Main Button */}
          <div className="bg-gradient-to-r from-[#C4A052] via-[#B8975A] to-[#C4A052] rounded-2xl p-5 mb-3 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/20">
                <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-black text-black uppercase tracking-wide">
                  {t("language") === "Language" ? "FREE DOWNLOAD" : "ÜCRETSİZ İNDİR"}
                </h3>
                <p className="text-sm font-medium text-black/80">
                  {t("language") === "Language" ? "Download the app now" : "Uygulamayı şimdi indir"}
                </p>
              </div>
            </div>
          </div>

          {/* App Store Badges */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={APP_STORE_URL}
              className="bg-black rounded-lg px-3 py-2.5 flex items-center gap-2 hover:bg-black/90 transition-colors"
            >
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="flex-1 text-left">
                <p className="text-[9px] text-white/80 leading-tight">Download on the</p>
                <p className="text-xs font-semibold text-white leading-tight">App Store</p>
              </div>
            </a>

            <a
              href={APP_STORE_URL}
              className="bg-black rounded-lg px-3 py-2.5 flex items-center gap-2 hover:bg-black/90 transition-colors"
            >
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="flex-1 text-left">
                <p className="text-[9px] text-white/80 leading-tight">GET IT ON</p>
                <p className="text-xs font-semibold text-white leading-tight">Google Play</p>
              </div>
            </a>
          </div>
        </div>

        {/* Safe Area Bottom */}
        <div className="h-2 bg-white" />
      </div>
    </div>
  );
}
