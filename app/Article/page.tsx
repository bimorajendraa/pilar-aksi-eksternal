import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import ArtikelCard from "@/components/ui/ArtikelCard";
import ArtikelHeroCarousel from "@/components/ui/ArtikelHeroCarousel";
import ArtikelPagination from "@/components/ui/ArtikelPagination";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { getArtikels, getArtikelsThisWeek } from "@/lib/api/artikel";

const ITEMS_PER_PAGE = 4;

export const metadata = {
  title: "Artikel — Pilar Aksi",
};

type ArtikelPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function ArtikelPage({ searchParams }: ArtikelPageProps) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);

  const [{ articles, totalPages }, thisWeekArtikels] = await Promise.all([
    getArtikels(currentPage, ITEMS_PER_PAGE),
    getArtikelsThisWeek(),
  ]);

  return (
    <main className="relative bg-white min-h-screen">
      <Navbar />
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/bg-kotak.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          mixBlendMode: "multiply",
        }}
      />
      <TypographyContainer
        as="div"
        maxWidth="xl"
        paddingX="md"
        paddingY="xl"
        className="flex flex-col gap-10"
      >
        {/* ── Hero Carousel: artikel minggu ini ── */}
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
          {articles.map((artikel) => (
            <ArtikelCard key={artikel.slug} artikel={artikel} size="lg" />
          ))}
        </div>

        {/* ── Pagination ── */}
        <ArtikelPagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/Article"
        />
      </TypographyContainer>
      <Footer />
    </main>
  );
}
