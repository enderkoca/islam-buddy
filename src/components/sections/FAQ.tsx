import { useTranslations } from "next-intl";
import { FAQItem } from "../ui/FAQItem";
import { FAQ_COUNT } from "@/lib/constants";

export function FAQ() {
  const t = useTranslations("faq");

  const questions = Array.from({ length: FAQ_COUNT }, (_, i) => i + 1);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-950 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-gold-500" />
            <span className="text-sm font-medium text-gold-400">FAQ</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-primary-950 sm:text-4xl">
            {t("sectionTitle")}
          </h2>
          <p className="mx-auto max-w-2xl text-primary-600">
            {t("sectionSubtitle")}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {questions.map((q) => (
            <FAQItem
              key={q}
              question={t(`q${q}.question`)}
              answer={t(`q${q}.answer`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
