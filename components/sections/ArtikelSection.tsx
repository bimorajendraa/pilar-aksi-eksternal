import Link from "next/link";
import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import Button from "@/components/ui/Button";
import ArtikelCard from "@/components/ui/ArtikelCard";
import { getArtikels } from "@/lib/api/artikel";
import NextImage from "../ui/NextImage";

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
    <section className="relative w-full overflow-hidden bg-white pt-10 pb-26">
      {/* dekorasi */}
      <NextImage
        src="/images/vector-artikel.svg"
        alt="dekorasi"
        width={720}
        height={0}
        wrapperClassName="hidden md:block absolute left-[-17vw] bottom-[-35vh] -translate-y-1/2 z-[0]"
      />
      <NextImage
        src="/images/vector-artikel.svg"
        alt="dekorasi"
        width={700}
        height={0}
        wrapperClassName="hidden md:block absolute right-[-15vw] top-[35vh] -translate-y-1/2 z-[0] rotate-[-10deg]"
      />
      {/* <NextImage
        src="/images/vector-artikel.svg"
        alt="dekorasi"
        width={800}
        height={200}
        wrapperClassName="block md:hidden absolute left-[0] bottom-[0] -translate-y-1/2 z-[0]"
        imageClassName="!w-[800px] !h-[200px]"
      /> */}
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
      </TypographyContainer>

      {/* ── Grid Artikel ── */}
      <TypographyContainer as="div" maxWidth="xl" paddingX="md" paddingY="none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[460px]">
          {/* Card Featured — terbaru ke-1 */}
          <ArtikelCard artikel={featuredArtikel} featured />

          <div className="flex flex-col gap-4">
            {others.map((artikel, index) => (
              <div
                key={artikel.slug}
                className={index === 1 ? "hidden md:block" : ""}
              >
                <ArtikelCard artikel={artikel} />
              </div>
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
