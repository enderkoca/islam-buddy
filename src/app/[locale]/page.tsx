import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Ramadan } from "@/components/sections/Ramadan";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Ramadan />
        <Features />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <AudioPlayer />
    </>
  );
}
