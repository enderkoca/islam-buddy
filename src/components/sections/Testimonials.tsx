"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const testimonials = [
  { id: 1, name: "Ahmed Hassan", location: "Dubai, UAE 🇦🇪", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
  { id: 2, name: "Fatima Al-Rashid", location: "London, UK 🇬🇧", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" },
  { id: 3, name: "Yusuf Demir", location: "Istanbul, Turkey 🇹🇷", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
  { id: 4, name: "Aisha Rahman", location: "Toronto, Canada 🇨🇦", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
  { id: 5, name: "Omar Benali", location: "Paris, France 🇫🇷", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
  { id: 6, name: "Mariam Yilmaz", location: "Berlin, Germany 🇩🇪", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face" },
  { id: 7, name: "Ibrahim Khalil", location: "Cairo, Egypt 🇪🇬", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face" },
  { id: 8, name: "Zahra Abbasi", location: "Tehran, Iran 🇮🇷", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face" },
  { id: 9, name: "Khalid Al-Farsi", location: "Riyadh, Saudi Arabia 🇸🇦", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop&crop=face" },
  { id: 10, name: "Amina Osman", location: "Nairobi, Kenya 🇰🇪", image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=150&h=150&fit=crop&crop=face" },
  { id: 11, name: "Bilal Ahmad", location: "Lahore, Pakistan 🇵🇰", image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=150&h=150&fit=crop&crop=face" },
  { id: 12, name: "Nadia Hussain", location: "Dhaka, Bangladesh 🇧🇩", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face" },
  { id: 13, name: "Tariq Mahmoud", location: "Amman, Jordan 🇯🇴", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face" },
  { id: 14, name: "Sara El-Amin", location: "Casablanca, Morocco 🇲🇦", image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=150&h=150&fit=crop&crop=face" },
  { id: 15, name: "Hassan Qureshi", location: "Karachi, Pakistan 🇵🇰", image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop&crop=face" },
  { id: 16, name: "Layla Farouk", location: "Alexandria, Egypt 🇪🇬", image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face" },
  { id: 17, name: "Mustafa Öztürk", location: "Ankara, Turkey 🇹🇷", image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=150&h=150&fit=crop&crop=face" },
  { id: 18, name: "Hana Sharif", location: "Kuala Lumpur, Malaysia 🇲🇾", image: "https://images.unsplash.com/photo-1546961342-ea5f71b193f3?w=150&h=150&fit=crop&crop=face" },
  { id: 19, name: "Adnan Malik", location: "Jakarta, Indonesia 🇮🇩", image: "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=150&h=150&fit=crop&crop=face" },
  { id: 20, name: "Khadija Noor", location: "Mogadishu, Somalia 🇸🇴", image: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=150&h=150&fit=crop&crop=face" },
  { id: 21, name: "Rashid Al-Maktoum", location: "Abu Dhabi, UAE 🇦🇪", image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=150&h=150&fit=crop&crop=face" },
  { id: 22, name: "Meryem Yıldız", location: "Izmir, Turkey 🇹🇷", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face" },
  { id: 23, name: "Imran Sheikh", location: "Mumbai, India 🇮🇳", image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&crop=face" },
  { id: 24, name: "Salma Abdullah", location: "Doha, Qatar 🇶🇦", image: "https://images.unsplash.com/photo-1592621385612-4d7129426394?w=150&h=150&fit=crop&crop=face" },
];

const totalPages = Math.ceil(testimonials.length / 6);

export function Testimonials() {
  const t = useTranslations("testimonials");
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const goToPage = (pageIndex: number) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth * pageIndex;
      sliderRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      setCurrentPage(pageIndex);
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const width = sliderRef.current.offsetWidth;
      const newPage = Math.round(scrollLeft / width);
      setCurrentPage(newPage);
    }
  };

  return (
    <section className="relative bg-primary-950">
      {/* Gold accent lines */}
      <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      {/* Islamic geometric pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: 'url(/images/islamic-pattern.png)', backgroundSize: '250px', backgroundRepeat: 'repeat', filter: 'invert(1)' }} />

      <div className="py-20">

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            {t("sectionTitle")}
          </h2>
          <p className="mx-auto max-w-2xl text-primary-300">
            {t("sectionSubtitle")}
          </p>
        </div>

        {/* Slider Controls */}
        <div className="mb-6 flex justify-end gap-2">
          <button
            onClick={() => scroll("left")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-700 bg-primary-900 text-white transition-all hover:border-gold-500 hover:bg-primary-800"
            aria-label="Previous"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-700 bg-primary-900 text-white transition-all hover:border-gold-500 hover:bg-primary-800"
            aria-label="Next"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Testimonials Slider - 6 cards per page (2 rows x 3 cols) */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Group testimonials into pages of 6 */}
          {Array.from({ length: Math.ceil(testimonials.length / 6) }, (_, pageIndex) => (
            <div
              key={pageIndex}
              className="grid w-full flex-shrink-0 snap-start grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {testimonials.slice(pageIndex * 6, pageIndex * 6 + 6).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="rounded-2xl border border-primary-800 bg-primary-900/80 p-5 backdrop-blur-sm transition-all duration-300 hover:border-gold-500/30 hover:bg-primary-800"
                >
                  {/* Stars - All 5 stars */}
                  <div className="mb-3 flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-4 w-4 text-gold-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="relative mb-4 text-sm leading-relaxed text-primary-200">
                    {t(`reviews.r${((testimonial.id - 1) % 6) + 1}`)}
                  </p>

                  {/* User info */}
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-gold-500/30">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                      <div className="text-xs text-primary-400">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`h-2 rounded-full transition-all ${
                currentPage === i
                  ? "w-8 bg-gold-500"
                  : "w-2 bg-primary-700 hover:bg-primary-600"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
      </div>

      {/* Gold accent line bottom */}
      <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
    </section>
  );
}
