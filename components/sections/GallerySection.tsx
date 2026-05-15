// sections/GallerySection.tsx
"use client";

import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import NextImage from "@/components/ui/NextImage";

const galleryTop = Array.from({ length: 10 }, (_, i) => i + 1);
const galleryBottom = Array.from({ length: 10 }, (_, i) => i + 1);

export default function GallerySection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="absolute left-[-200] top-50 -translate-y-1/2 z-0 w-650">
        <NextImage
          src="/images/Star31.svg"
          alt="dekorasi"
          width={650.15}
          height={650.15}
          wrapperClassName="absolute"
        />
      </div>
      <div className="absolute left-280 top-10 -translate-y-1/2 z-0 w-730 blur opacity-60">
        <NextImage
          src="/images/Star31.svg"
          alt="dekorasi"
          width={730.15}
          height={730.15}
          wrapperClassName="absolute"
        />
      </div>
      <TypographyContainer
        as="div"
        maxWidth="xl"
        paddingX="md"
        paddingY="lg"
        className="relative z-10"
      >
        {/* ── Judul Desktop ── */}
        <div className="flex hidden md:block flex-row items-baseline gap-0 mb-0">
          {/* "G" - Merriweather */}
          <Typography
            as="span"
            variant="h2"
            font="merriweather"
            italic
            weight="bold"
            isGradient
            gradientPreset="blue-vertical"
            isStroke
            strokeValue="3"
            strokeColor="white"
            shadow="sm"
            shadowColor="#00000040"
          >
            G
          </Typography>

          {/* "allery" - Coolvetica */}
          <Typography
            as="span"
            variant="h2"
            font="coolvetica"
            italic
            isGradient
            gradientPreset="blue-vertical"
            isStroke
            strokeValue="3"
            strokeColor="white"
            shadow="sm"
            shadowColor="#00000040"
          >
            allery
          </Typography>

          <span className="w-3" />

          {/* "HMSI" - Merriweather */}
          <Typography
            as="span"
            variant="h2"
            font="merriweather"
            italic
            weight="bold"
            isGradient
            gradientPreset="blue-vertical"
            isStroke
            strokeValue="3"
            strokeColor="white"
            shadow="sm"
            shadowColor="#00000040"
          >
            HMSI
          </Typography>
        </div>
        {/* ── Judul Mobile ── */}
        <div className="flex md:hidden flex-row items-center justify-center gap-0 mb-0">
          {/* "G" - Merriweather */}
          <Typography
            as="span"
            variant="h3"
            font="merriweather"
            italic
            weight="bold"
            isGradient
            gradientPreset="blue-vertical"
            isStroke
            strokeValue="3"
            strokeColor="white"
            shadow="sm"
            shadowColor="#00000040"
          >
            G
          </Typography>

          {/* "allery" - Coolvetica */}
          <Typography
            as="span"
            variant="h3"
            font="coolvetica"
            italic
            isGradient
            gradientPreset="blue-vertical"
            isStroke
            strokeValue="3"
            strokeColor="white"
            shadow="sm"
            shadowColor="#00000040"
          >
            allery
          </Typography>

          <span className="w-3" />

          {/* "HMSI" - Merriweather */}
          <Typography
            as="span"
            variant="h3"
            font="merriweather"
            italic
            weight="bold"
            isGradient
            gradientPreset="blue-vertical"
            isStroke
            strokeValue="3"
            strokeColor="white"
            shadow="sm"
            shadowColor="#00000040"
          >
            HMSI
          </Typography>
        </div>
      </TypographyContainer>

      {/* ── Row Atas: scroll ke kiri (marquee) ── */}
      <div className="relative w-full overflow-hidden mb-4 -mt-6">
        <div className="flex flex-row gap-4 animate-marquee-left">
          {/* Duplikat 2x untuk infinite loop */}
          {[...galleryTop, ...galleryTop].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[363px] h-[185px] rounded-2xl overflow-hidden"
            >
              <NextImage
                src={`/images/gallery-${item}.jpg`}
                alt={`Gallery ${item}`}
                ratio="auto"
                width={363}
                height={185}
                wrapperClassName="w-[363px] h-[185px] bg-neutral-400"
                imageClassName="object-cover"
                showSkeleton={true}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Row Bawah: scroll ke kanan (marquee reverse) ── */}
      <div className="relative w-full overflow-hidden mb-16">
        <div className="flex flex-row gap-4 animate-marquee-right">
          {[...galleryTop, ...galleryTop].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[363px] h-[185px] rounded-2xl overflow-hidden"
            >
              <NextImage
                src={`/images/gallery-${item}.jpg`}
                alt={`Gallery ${item}`}
                ratio="auto"
                width={363}
                height={185}
                wrapperClassName="w-[363px] h-[185px] bg-neutral-400"
                imageClassName="object-cover"
                showSkeleton={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
