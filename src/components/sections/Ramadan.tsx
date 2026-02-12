import Image from "next/image";
import { useTranslations } from "next-intl";
import { AppStoreBadges } from "../ui/AppStoreBadges";

const featureImages: Record<string, string> = {
  imsakiye: "/images/ramadan/imsakiye.png",
  iftar: "/images/ramadan/iftar.png",
  sahur: "/images/ramadan/sahur.png",
  tarawih: "/images/ramadan/tarawih.png",
  dua: "/images/ramadan/dua.png",
  quran: "/images/ramadan/quran.png",
};

export function Ramadan() {
  const t = useTranslations("ramadan");

  const features = ["imsakiye", "iftar", "sahur", "tarawih", "dua", "quran"];

  return (
    <section id="ramadan" className="relative overflow-hidden bg-gradient-to-b from-white to-primary-50 py-20">
      {/* Decorative pattern overlay */}
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
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-900 px-4 py-2 text-sm font-medium text-gold-400">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14 9.79 9.79 0 0 0 2.1-.22 8.11 8.11 0 0 1-7.18 4.32z"/>
            </svg>
            <span>{t("badge")}</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-primary-950 sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-primary-600">
            {t("subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-primary-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/10"
            >
              {/* Feature Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={featureImages[feature]}
                  alt={t(`features.${feature}.title`)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/50 to-transparent" />

                {/* Title on image */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-bold text-white drop-shadow-lg">
                    {t(`features.${feature}.title`)}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm leading-relaxed text-primary-600">
                  {t(`features.${feature}.description`)}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="mb-6 text-lg font-medium text-primary-700">{t("ctaSubtext")}</p>
          <AppStoreBadges />
        </div>
      </div>
    </section>
  );
}
