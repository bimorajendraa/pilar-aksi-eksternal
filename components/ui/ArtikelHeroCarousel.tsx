"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Typography from "@/components/ui/Typography";
import NextImage from "@/components/ui/NextImage";
import { Artikel } from "@/types/artikel";

export default function ArtikelHeroCarousel({
  artikels,
}: {
  artikels: Artikel[];
}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const current = artikels[activeIndex];

  if (!current) {
    return null;
  }

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? artikels.length - 1 : i - 1));
  const next = () =>
    setActiveIndex((i) => (i === artikels.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full rounded-4xl overflow-hidden h-[280px] md:h-[520px]">
      {/* Background image */}
      <NextImage
        src={current.cover_image.url || "/images/placeholder.webp"}
        alt={current.cover_image.alt}
        fill
        wrapperClassName="absolute inset-0"
        imageClassName="object-cover transition-all duration-500"
        showSkeleton={true}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-dark-300/45 z-[1]" />

      {/* Mobile-only: tombol prev/next mengambang */}
      {artikels.length > 1 && (
        <>
          <button
            onClick={prev}
            className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 z-[3] w-8 h-8 rounded-lg bg-blue-dark-300 flex items-center justify-center hover:bg-blue-dark-400 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={next}
            className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-[3] w-8 h-8 rounded-lg bg-blue-dark-300 flex items-center justify-center hover:bg-blue-dark-400 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </>
      )}

      {/* Content */}
      <div className="absolute inset-0 z-[2] flex flex-col gap-2 p-6 md:p-10">
        {/* Top: logo + kategori | label */}
        <div className="flex items-end justify-between">
          <div className="flex items-end gap-2">
            {/* Logo — kecil di mobile, normal di desktop */}
            <NextImage
              src="/images/logo-dept-6.svg"
              alt={current.category}
              width={56}
              height={56}
              showSkeleton={false}
              wrapperClassName="flex-shrink-0 md:hidden"
            />
            <NextImage
              src="/images/logo-dept-6.svg"
              alt={current.category}
              width={120}
              height={120}
              showSkeleton={false}
              wrapperClassName="flex-shrink-0 hidden md:block"
            />
          </div>

          {/* Label — kecil di mobile, h4 di desktop */}
          <Typography
            variant="body-small"
            font="coolvetica"
            color="white"
            className="leading-tight whitespace-nowrap md:hidden"
          >
            Keluaran Minggu Ini
          </Typography>
          <Typography
            variant="h4"
            font="coolvetica"
            color="white"
            className="leading-tight whitespace-nowrap hidden md:block"
          >
            Keluaran Minggu Ini
          </Typography>
        </div>
        <div className="w-full h-[3px] bg-white" />

        {/* Desktop-only: tombol prev/next row */}
        {artikels.length > 1 && (
          <div className="hidden md:flex items-end justify-between gap-4 mt-auto">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-lg bg-blue-dark-300 flex items-center justify-center flex-shrink-0 hover:bg-blue-dark-400 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-lg bg-blue-dark-300 flex items-center justify-center flex-shrink-0 hover:bg-blue-dark-400 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        )}

        {/* Judul */}
        <div className="flex items-center mt-auto">
          <Link href={`/Article/${current.slug}`} className="flex-1 group">
            {/* Mobile: variant lebih kecil */}
            <Typography
              variant="h4"
              font="coolvetica"
              weight="regular"
              color="white"
              className="line-clamp-2 leading-tight md:hidden"
            >
              {current.title}
            </Typography>
            {/* Desktop: tetap h2 */}
            <Typography
              variant="h2"
              font="coolvetica"
              weight="regular"
              color="white"
              className="line-clamp-2 leading-none hidden md:block"
            >
              {current.title}
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
}
