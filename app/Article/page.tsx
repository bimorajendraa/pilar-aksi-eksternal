"use client";

import * as React from "react";
import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import ArtikelCard from "@/components/ui/ArtikelCard";
import ArtikelHeroCarousel from "@/components/ui/ArtikelHeroCarousel";
import Pagination from "@/components/ui/Pagination";
import { Artikel } from "@/types/artikel";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const ITEMS_PER_PAGE = 4;

// Ganti dengan getArtikels() dari lib/api/artikel.ts saat API sudah siap
const dummyArtikels: Artikel[] = [
  {
    title: "Ekonomi Digital Roblox Melalui User-Generated Content",
    slug: "ekonomi-digital-roblox",
    category: "Teknologi Keuangan",
    published_at: { label: "14 Mei 2026" },
    cover_image: { url: "/images/artikel-1.webp", alt: "Artikel 1" },
    author: { name: "Lorem Ipsum" },
    editor: null,
    content: "",
  },
  {
    title: "Dampak Kecerdasan Buatan pada Game Interaktif",
    slug: "dampak-ai-game-interaktif",
    category: "Sains Teknologi",
    published_at: { label: "16 Mei 2026" },
    cover_image: { url: "/images/artikel-2.webp", alt: "Artikel 2" },
    author: { name: "Lorem Ipsum" },
    editor: null,
    content: "",
  },
  {
    title: "Tren Desain Game Berbasis Virtual Reality",
    slug: "tren-desain-game-vr",
    category: "Desain Pengalaman Pengguna",
    published_at: { label: "17 Mei 2026" },
    cover_image: { url: "/images/artikel-3.webp", alt: "Artikel 3" },
    author: { name: "Lorem Ipsum" },
    editor: null,
    content: "",
  },
  {
    title: "Analisis Pertumbuhan Pasar Game Mobile",
    slug: "analisis-pasar-game-mobile",
    category: "Bisnis Pemasaran",
    published_at: { label: "18 Mei 2026" },
    cover_image: { url: "/images/artikel-4.webp", alt: "Artikel 4" },
    author: { name: "Lorem Ipsum" },
    editor: null,
    content: "",
  },
  {
    title: "Masa Depan Augmented Reality dalam Pendidikan",
    slug: "ar-dalam-pendidikan",
    category: "Teknologi Pendidikan",
    published_at: { label: "19 Mei 2026" },
    cover_image: { url: "/images/artikel-5.webp", alt: "Artikel 5" },
    author: { name: "Lorem Ipsum" },
    editor: null,
    content: "",
  },
  {
    title: "Keamanan Siber di Era Digital",
    slug: "keamanan-siber-era-digital",
    category: "Keamanan Digital",
    published_at: { label: "20 Mei 2026" },
    cover_image: { url: "/images/artikel-6.webp", alt: "Artikel 6" },
    author: { name: "Lorem Ipsum" },
    editor: null,
    content: "",
  },
];

// Artikel keluaran minggu ini (misal 2 artikel terbaru)
const thisWeekArtikels = dummyArtikels.slice(0, 2);

export default function ArticlePage() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(dummyArtikels.length / ITEMS_PER_PAGE);
  const paginatedArtikels = dummyArtikels.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <TypographyContainer
        as="div"
        maxWidth="xl"
        paddingX="md"
        paddingY="xl"
        className="flex flex-col gap-10"
      >
        {/* ── Hero Carousel ── */}
        <ArtikelHeroCarousel artikels={thisWeekArtikels} />

        {/* ── Heading Seputar Artikel ── */}
        <div className="flex flex-row items-baseline justify-center mt-10 mb-10">
          <Typography
            variant="h2"
            font="merriweather"
            italic
            weight="bold"
            isGradient
            gradientPreset="pastel-vertical"
            isStroke
            strokeValue="3"
            strokeColor="white"
            shadow="sm"
            shadowColor="#00000040"
            className="!text-[48px] md:!text-[64px]"
          >
            S
          </Typography>
          <Typography
            variant="h2"
            font="coolvetica"
            italic
            isGradient
            gradientPreset="pastel-vertical"
            isStroke
            strokeValue="3"
            strokeColor="white"
            shadow="sm"
            shadowColor="#00000040"
            className="!text-[48px] md:!text-[64px]"
          >
            eputar
          </Typography>
          <span className="w-2 md:w-4" />
          <Typography
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
            className="!text-[48px] md:!text-[64px]"
          >
            A
          </Typography>
          <Typography
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
            className="!text-[48px] md:!text-[64px]"
          >
            rtikel
          </Typography>
        </div>

        {/* ── Grid Artikel ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {paginatedArtikels.map((artikel) => (
            <ArtikelCard key={artikel.slug} artikel={artikel} size="lg" />
          ))}
        </div>

        {/* ── Pagination ── */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="mb-0"
        />
      </TypographyContainer>
      <Footer />
    </main>
  );
}
