"use client";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Typography from "@/components/ui/Typography";
import NextImage from "@/components/ui/NextImage";
import { Artikel } from "@/types/artikel";

export default function ArtikelCard({
  artikel,
  featured = false,
  size = "sm",
}: {
  artikel: Artikel;
  featured?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <Link href={`/Article/${artikel.slug}`} className="block group">
      <div
        className={`relative overflow-hidden rounded-lg ${
          featured
            ? "h-[230px] md:h-full"
            : size === "lg"
              ? "h-[340px] md:h-[460px]"
              : size === "md"
                ? "h-[340px] md:h-[340px]"
                : "h-[230px] md:h-[230px]"
        }`}
      >
        {/* Background image */}
        <img
          src={artikel.cover_image.url || "/images/placeholder.webp"}
          alt={artikel.cover_image.alt}
          onError={(e) => {
            e.currentTarget.src = "/images/placeholder.webp";
          }}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-blue-dark-300/45 z-[1]" />

        {/* Content */}
        <div className="absolute inset-0 z-[2] flex flex-col justify-between p-5">
          {/* Tanggal */}
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-white" />
            <Typography variant="body-small" font="body" color="white">
              {artikel.published_at.label}
            </Typography>
          </div>

          {/* Judul + Departemen + Arrow */}
          <div className="flex flex-col gap-3">
            <Typography
              variant="h4"
              font="coolvetica"
              weight="regular"
              color="white"
              className="line-clamp-2 leading-tight"
            >
              {artikel.title}
            </Typography>

            {/* Divider */}
            <div className="w-full h-[3px] bg-white" />
            <div className="flex flex-row items-center justify-between">
              {/* Logo + Kategori */}
              <div className="flex flex-row items-center gap-2">
                <NextImage
                  src="/images/logo-im-artikel.svg"
                  alt={artikel.category}
                  width={32}
                  height={32}
                  showSkeleton={false}
                  wrapperClassName="flex-shrink-0 w-8 h-8"
                />
                <Typography
                  variant="body-small"
                  italic
                  font="coolvetica"
                  color="white"
                  className="leading-tight"
                >
                  {(() => {
                    const [firstWord, ...rest] = artikel.category.split(" ");
                    const restText = rest.join(" ");
                    return (
                      <>
                        {firstWord}
                        {restText && <br />}
                        {restText}
                      </>
                    );
                  })()}
                </Typography>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center flex-shrink-0">
                <NextImage
                  src="/images/arrow-right.svg"
                  alt="lihat artikel"
                  width={32}
                  height={32}
                  showSkeleton={false}
                  imageClassName="transition-all group-hover:opacity-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
