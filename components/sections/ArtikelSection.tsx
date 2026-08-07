import Link from "next/link";
import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import Button from "@/components/ui/Button";
import ArtikelCard from "@/components/ui/ArtikelCard";
import { getArtikels } from "@/lib/api/artikel";

export default async function ArtikelSection() {
  const { featured, articles } = await getArtikels(1, 4);

  const featuredArtikel = featured[0] ?? articles[0];

  const others = articles
    .filter((artikel) => artikel.slug !== featuredArtikel?.slug)
    .slice(0, 2);

  if (!featuredArtikel) {
    return null;
  }

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
          <ArtikelCard artikel={featuredArtikel} featured />

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
