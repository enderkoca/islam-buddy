import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { plusJakartaSans, notoSansArabic } from "@/lib/fonts";
import { getDir } from "@/lib/rtl";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import "@/styles/globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const meta = messages.metadata;

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(SITE_URL),
    icons: {
      icon: "/app-icon.png",
      apple: "/app-icon.png",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `/${l}`])
      ),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      siteName: SITE_NAME,
      locale: locale,
      type: "website",
      url: `/${locale}`,
      images: [
        {
          url: "/images/hero-mosque.jpg",
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/images/hero-mosque.jpg"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = getDir(locale as Locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${plusJakartaSans.variable} ${notoSansArabic.variable}`}
    >
      <body
        className={`min-h-screen bg-surface-50 text-primary-950 antialiased ${
          locale === "ar" ? "font-arabic" : "font-sans"
        }`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
