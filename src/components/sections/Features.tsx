import Image from "next/image";
import { useTranslations } from "next-intl";
import { FeatureCard } from "../ui/FeatureCard";

const imageMap: Record<string, string> = {
  halalScanner: "/images/features/halal-scanner.png",
  kabaLive: "/images/features/kaba-live.png",
  quranRadio: "/images/features/quran-radio.png",
  quranReader: "/images/features/quran-reader.png",
  dhikrCounter: "/images/features/dhikr-counter.png",
  dailyVerse: "/images/features/daily-verse.png",
  prayerTimes: "/images/features/prayer-times.png",
  qiblaFinder: "/images/features/qibla-finder.png",
  aiCoach: "/images/features/ai-coach.png",
  islamicStories: "/images/features/islamic-stories.png",
  widgets: "/images/features/widgets.png",
  notifications: "/images/features/notifications.png",
};

// Rows: 4 - 4 - 4 = 12 features
const featureRows = [
  ["prayerTimes", "qiblaFinder", "quranReader", "quranRadio"],
  ["kabaLive", "halalScanner", "dhikrCounter", "dailyVerse"],
  ["aiCoach", "islamicStories", "widgets", "notifications"],
];

export function Features() {
  const t = useTranslations("features");

  return (
    <section id="features" className="relative bg-gradient-to-b from-white to-primary-50 py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <Image
          src="/images/islamic-pattern.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-950 sm:text-4xl">
            {t("sectionTitle")}
          </h2>
          <p className="mx-auto max-w-2xl text-primary-600">
            {t("sectionSubtitle")}
          </p>
        </div>

        {/* Features Grid - Asymmetric Layout */}
        <div className="flex flex-col gap-6">
          {featureRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid auto-rows-fr gap-4 sm:gap-6 ${
                row.length === 2
                  ? "grid-cols-1 sm:grid-cols-2 sm:mx-auto sm:max-w-2xl lg:max-w-3xl"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {row.map((feature) => (
                <FeatureCard
                  key={feature}
                  image={imageMap[feature]}
                  title={t(`${feature}.title`)}
                  description={t(`${feature}.description`)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
