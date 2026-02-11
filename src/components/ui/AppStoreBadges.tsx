import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";

interface AppStoreBadgesProps {
  size?: "default" | "small";
  align?: "center" | "start";
}

export function AppStoreBadges({ size = "default", align = "center" }: AppStoreBadgesProps) {
  const isSmall = size === "small";

  return (
    <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${align === "start" ? "justify-start" : "justify-center"}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center gap-2 bg-black text-white transition-all hover:scale-105 ${
          isSmall
            ? "rounded-lg px-3 py-2"
            : "rounded-2xl px-6 py-4 shadow-xl shadow-black/20 hover:shadow-2xl"
        }`}
        aria-label="Download on the App Store"
      >
        <svg className={isSmall ? "h-6 w-6" : "h-9 w-9"} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="text-start">
          <div className={`leading-none opacity-80 ${isSmall ? "text-[8px]" : "text-xs"}`}>Download on the</div>
          <div className={`font-bold leading-tight ${isSmall ? "text-sm" : "text-lg"}`}>App Store</div>
        </div>
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center gap-2 bg-black text-white transition-all hover:scale-105 ${
          isSmall
            ? "rounded-lg px-3 py-2"
            : "rounded-2xl px-6 py-4 shadow-xl shadow-black/20 hover:shadow-2xl"
        }`}
        aria-label="Get it on Google Play"
      >
        <svg className={isSmall ? "h-6 w-6" : "h-9 w-9"} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.56 1.19l-1.97 1.13-2.5-2.5 2.5-2.5 1.97 1.13M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
        </svg>
        <div className="text-start">
          <div className={`leading-none opacity-80 ${isSmall ? "text-[8px]" : "text-xs"}`}>GET IT ON</div>
          <div className={`font-bold leading-tight ${isSmall ? "text-sm" : "text-lg"}`}>Google Play</div>
        </div>
      </a>
    </div>
  );
}
