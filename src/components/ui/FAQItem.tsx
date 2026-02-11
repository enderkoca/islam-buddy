interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group rounded-xl border border-primary-100 bg-primary-50/50 transition-all hover:border-primary-200 open:border-gold-500/30 open:bg-white open:shadow-lg open:shadow-primary-900/5">
      <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-start font-semibold text-primary-900 [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <div className="ms-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 transition-all group-open:bg-gold-500 group-open:text-primary-950">
          <svg
            className="h-4 w-4 transition-transform group-open:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </summary>
      <div className="px-6 pb-5">
        <p className="text-sm leading-relaxed text-primary-600">{answer}</p>
      </div>
    </details>
  );
}
