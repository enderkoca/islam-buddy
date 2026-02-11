import Image from "next/image";
import { useTranslations } from "next-intl";
import { AppStoreBadges } from "../ui/AppStoreBadges";
import { APP_STORE_URL } from "@/lib/constants";

export function Hero() {
  const t = useTranslations("hero");
  const tSocial = useTranslations("socialProof");

  return (
    <section className="relative overflow-hidden">
      {/* Background with dark green gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950">
        <Image
          src="/images/hero-mosque.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        {/* Islamic geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/images/islamic-pattern.png)', backgroundSize: '500px', backgroundRepeat: 'repeat', filter: 'invert(1)' }} />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center">
        {/* Decorative bismillah */}
        <div className="mb-8 text-4xl text-gold-400 sm:text-5xl" aria-hidden="true">
          ﷽
        </div>

        {/* Rating & Downloads - Stats Bar */}
        <div
          className="mb-10 flex items-stretch justify-center rounded-[22px] px-[34px] py-[22px]"
          style={{
            background: 'rgba(15, 60, 50, 0.55)',
            backdropFilter: 'blur(18px)',
            border: '1px solid rgba(230, 195, 106, 0.3)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4), inset 0 0 20px rgba(255,215,120,0.08)',
          }}
        >
          {/* Rating */}
          <div className="flex min-w-[120px] flex-col items-center justify-between px-5 text-center text-white">
            <div
              className="mb-2 grid h-[42px] w-[42px] place-items-center rounded-full text-lg"
              style={{
                background: 'rgba(230, 195, 106, 0.14)',
                border: '1px solid rgba(230, 195, 106, 0.28)',
                boxShadow: '0 0 18px rgba(230, 195, 106, 0.18)',
              }}
            >
              <span style={{ color: '#e6c36a', textShadow: '0 0 6px rgba(230,195,106,0.4)' }}>★</span>
            </div>
            <div
              className="text-[28px] font-bold leading-none tracking-wide"
              style={{ color: '#e6c36a', textShadow: '0 0 10px rgba(230,195,106,0.35)' }}
            >
              4.8
            </div>
            <div className="mt-1 text-[13px] opacity-85">15K+ Reviews</div>
          </div>

          {/* Divider 1 */}
          <div
            className="mx-3 w-px self-stretch"
            style={{ background: 'linear-gradient(to bottom, transparent, #e6c36a, transparent)', opacity: 0.35 }}
          />

          {/* Downloads */}
          <div className="flex min-w-[120px] flex-col items-center justify-between px-5 text-center text-white">
            <div
              className="mb-2 grid h-[42px] w-[42px] place-items-center rounded-full text-lg"
              style={{
                background: 'rgba(230, 195, 106, 0.14)',
                border: '1px solid rgba(230, 195, 106, 0.28)',
                boxShadow: '0 0 18px rgba(230, 195, 106, 0.18)',
              }}
            >
              <svg className="h-5 w-5" style={{ color: '#e6c36a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <div
              className="text-[28px] font-bold leading-none tracking-wide"
              style={{ color: '#e6c36a', textShadow: '0 0 10px rgba(230,195,106,0.35)' }}
            >
              {tSocial("downloadCount")}
            </div>
            <div className="mt-1 text-[13px] opacity-85">{tSocial("downloadLabel")}</div>
          </div>

          {/* Divider 2 */}
          <div
            className="mx-3 w-px self-stretch"
            style={{ background: 'linear-gradient(to bottom, transparent, #e6c36a, transparent)', opacity: 0.35 }}
          />

          {/* Countries */}
          <div className="flex min-w-[120px] flex-col items-center justify-between px-5 text-center text-white">
            <div
              className="mb-2 grid h-[42px] w-[42px] place-items-center rounded-full text-lg"
              style={{
                background: 'rgba(230, 195, 106, 0.14)',
                border: '1px solid rgba(230, 195, 106, 0.28)',
                boxShadow: '0 0 18px rgba(230, 195, 106, 0.18)',
              }}
            >
              <svg className="h-5 w-5" style={{ color: '#e6c36a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div
              className="text-[28px] font-bold leading-none tracking-wide"
              style={{ color: '#e6c36a', textShadow: '0 0 10px rgba(230,195,106,0.35)' }}
            >
              150+
            </div>
            <div className="mt-1 text-[13px] opacity-85">Countries</div>
          </div>
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t("headline")}
        </h1>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-primary-100 sm:text-xl">
          {t("subheadline")}
        </p>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center justify-center rounded-xl px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            style={{
              background: 'linear-gradient(180deg, rgba(55, 130, 130, 0.95) 0%, rgba(35, 95, 100, 0.98) 100%)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {t("downloadCta")}
          </a>
        </div>
        <AppStoreBadges />
      </div>

      {/* Gold accent line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
    </section>
  );
}
