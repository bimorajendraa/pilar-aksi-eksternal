"use client";

import * as React from "react";
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
            font="coolvetica"
            italic
            isGradient
            gradientValue="linear-gradient(180deg, #00cfff 0%, #0066ff 45%, #0022cc 100%)"
            isStroke
            strokeValue="8px"
            strokeColor="white"
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
            gradientValue="linear-gradient(180deg, #60a5fa 0%, #2563eb 50%, #1e40af 100%)"
            isStroke
            strokeValue="8px"
            strokeColor="white"
            align="center"
            className="!text-[96px] md:!text-[130px] lg:!text-[150px] leading-none -mt-2 !font-black"
          >
            HMSI
          </Typography>

          {/* Tagline pill */}
          <div
            className="mt-6 px-70 py-0 rounded-full bg-gradient-to-r from-blue-light-200 to-blue-dark-300"
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
