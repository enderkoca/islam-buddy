import { useTranslations } from "next-intl";

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = [
    { icon: "download", number: 1 },
    { icon: "settings", number: 2 },
    { icon: "rocket", number: 3 },
  ];

  return (
    <section id="how-it-works" className="bg-gradient-to-b from-primary-50 to-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-950 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-gold-500" />
            <span className="text-sm font-medium text-gold-400">Get Started</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-primary-950 sm:text-4xl">
            {t("sectionTitle")}
          </h2>
          <p className="mx-auto max-w-2xl text-primary-600">
            {t("sectionSubtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-8 hidden h-0.5 w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-200 to-transparent sm:block" />

          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                {/* Step Number */}
                <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-950 text-2xl font-bold text-gold-500 shadow-lg shadow-primary-900/20">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-primary-900">
                  {t(`step${step.number}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-primary-600">
                  {t(`step${step.number}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
