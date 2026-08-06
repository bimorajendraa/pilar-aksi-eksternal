import Link from "next/link";
import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import Button from "@/components/ui/Button";
import ArtikelCard from "@/components/ui/ArtikelCard";
import { Artikel } from "@/types/artikel";

const dummyArtikels: Artikel[] = [
  {
    title:
      "Membangun Ekonomi Digitalnya Sendiri, Bagaimana Hal Itu Dapat Diwujudkan oleh Platform User-Generated Content seperti Roblox?",
    slug: "membangun-ekonomi-digital-roblox",
    category: "Information Media",
    published_at: { label: "14 Mei 2026" },
    cover_image: {
      url: "/images/artikel-1.webp",
      alt: "Artikel 1",
    },
    author: { name: "Mukhammad Bagas Aditya" },
    editor: { name: "Adityo Rafi Wardhana" },
    content: "",
  },
  {
    title: "Dampak Kecerdasan Buatan pada Game Interaktif",
    slug: "dampak-ai-game-interaktif",
    category: "Information Media",
    published_at: { label: "14 Mei 2026" },
    cover_image: {
      url: "/images/artikel-2.webp",
      alt: "Artikel 2",
    },
    author: { name: "Lorem Ipsum" },
    editor: null,
    content: "",
  },
  {
    title: "Tren Desain Game Berbasis Virtual Reality",
    slug: "tren-desain-game-vr",
    category: "Information Media",
    published_at: { label: "14 Mei 2026" },
    cover_image: {
      url: "/images/artikel-3.webp",
      alt: "Artikel 3",
    },
    author: { name: "Lorem Ipsum" },
    editor: null,
    content: "",
  },
];

export default function ArtikelSection() {
  const featured = dummyArtikels[0];
  const others = dummyArtikels.slice(1, 3);

  return (
    <section className="relative w-full overflow-hidden bg-white py-16">
      {/* ── Judul ── */}
      <TypographyContainer
        as="div"
        maxWidth="xl"
        paddingX="md"
        paddingY="none"
        className="mb-10"
      >
        <div className="flex flex-row items-baseline justify-center">
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
          >
            eputar
          </Typography>
          <span className="w-4" />
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
          >
            rtikel
          </Typography>
        </div>
      </TypographyContainer>

      {/* ── Grid Artikel ── */}
      <TypographyContainer as="div" maxWidth="xl" paddingX="md" paddingY="none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[460px]">
          {/* Card Featured — terbaru ke-1 */}
          <ArtikelCard artikel={featured} featured />

          {/* 2 Card Kecil — terbaru ke-2 & ke-3 */}
          <div className="flex flex-col gap-4">
            {others.map((artikel) => (
              <ArtikelCard key={artikel.slug} artikel={artikel} />
            ))}
          </div>
        </div>

        {/* Tombol Lihat Selengkapnya */}
        <div className="flex justify-end mt-6">
          <Link href="/Article">
            <Button
              variant="outline"
              size="md"
              rounded="lg"
              rightIcon={<span>→</span>}
            >
              Lihat Selengkapnya
            </Button>
          </Link>
        </div>
      </TypographyContainer>
    </section>
  );
}
