"use client";

import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import NextImage from "@/components/ui/NextImage";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* ── Background: foto bersama HMSI ── */}
      <NextImage
        src="/images/foto-bersama-hmsi-1.png"
        alt="Foto Bersama HMSI"
        fill
        wrapperClassName="absolute inset-0 z-0"
        imageClassName="object-cover object-top opacity-100"
        showSkeleton={false}
      />

      <div className="absolute inset-0 z-[2] bg-white/80" />

      {/* ── Overlay: SVG gradient (biru bawah → transparan atas) ── */}
      <Image
        src="/images/overlay-gradient.svg"
        alt=""
        fill
        className="absolute inset-0 z-[5] object-cover pointer-events-none"
        priority
        aria-hidden
      />

      <div className="hidden md:block absolute left-210 top-0 -translate-y-1/2 z-[7] w-619">
        <NextImage
          src="/images/Pattern.svg"
          alt="dekorasi"
          width={619}
          height={606}
          wrapperClassName="absolute"
        />
      </div>
      <div className="hidden md:block absolute left-40 top-30 -translate-y-1/2 z-[7] w-619">
        <NextImage
          src="/images/Pattern.svg"
          alt="dekorasi"
          width={600}
          height={593}
          wrapperClassName="absolute"
        />
      </div>
      <div className="hidden md:block absolute left-[-20] top-20 -translate-y-1/2 z-[6] w-397 opacity-60">
        <NextImage
          src="/images/Exclude.svg"
          alt="dekorasi"
          width={397}
          height={392}
          wrapperClassName="absolute"
        />
      </div>
      <div className="hidden md:block absolute left-300 top-70 -translate-y-1/2 z-[6] w-397 opacity-60">
        <NextImage
          src="/images/Union.svg"
          alt="dekorasi"
          width={397}
          height={392}
          wrapperClassName="absolute"
        />
      </div>

      {/* ── Konten utama ── */}
      <TypographyContainer
        as="div"
        maxWidth="xl"
        paddingX="md"
        paddingY="none"
        className="relative z-20 min-h-screen flex items-center justify-center"
      >
        <div className="flex flex-col items-center gap-2">
          {/* "Satu Pintu" */}
          <Typography
            variant="h1"
            font="coolvetica-regular"
            italic
            isGradient
            gradientPreset="blue-vertical"
            isStroke
            strokeValue="8px"
            strokeColor="white"
            shadow="md"
            shadowColor="#002590"
            align="center"
            className="!text-[72px] md:!text-[96px] lg:!text-[112px] leading-none"
          >
            Satu Pintu
          </Typography>

          {/* "HMSI" */}
          <Typography
            variant="h1"
            font="merriweather"
            italic
            isGradient
            gradientPreset="blue-vertical"
            isStroke
            strokeValue="8px"
            strokeColor="white"
            shadow="md"
            shadowColor="#002590"
            align="center"
            className="!text-[96px] md:!text-[130px] lg:!text-[150px] leading-none -mt-2 !font-black"
          >
            HMSI
          </Typography>

          {/* Tagline pill */}
          <div
            className="mt-6 px-17 md:px-30 lg:px-70 py-0 rounded-full bg-gradient-to-r from-blue-light-200 to-blue-dark-300"
            style={{ outline: "7px solid white", outlineOffset: "0px" }}
          >
            <Typography
              variant="h6"
              font="coolvetica"
              italic
              color="white"
              align="center"
            >
              #KuatkanPilar, Satukan Aksi Nyata
            </Typography>
          </div>
        </div>
      </TypographyContainer>
    </section>
  );
}
