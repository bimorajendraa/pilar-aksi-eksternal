import Link from "next/link";
import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import NextImage from "@/components/ui/NextImage";
import { getArtikelBySlug } from "@/lib/api/artikel";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default async function ArtikelDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const artikel = await getArtikelBySlug(slug);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <TypographyContainer as="div" maxWidth="lg" paddingX="sm" paddingY="md">
        {/* Tombol back */}
        <Link
          href="/Article"
          className="inline-flex items-center gap-2 mt-8 mb-4"
        >
          <NextImage
            src="/images/arrow-right.svg"
            alt="Kembali"
            width={32}
            height={32}
            showSkeleton={false}
            imageClassName="transition-all group-hover:opacity-50 rotate-180 brightness-0"
          />
        </Link>

        {/* Judul artikel */}
        <Typography
          variant="h3"
          font="coolvetica"
          weight="regular"
          color="neutral-600"
          italic
          align="center"
          className="mb-4 !text-[24px] md:!text-[48px] leading-tight"
        >
          {artikel.title}
        </Typography>

        {/* Meta: tanggal + penulis + editor */}
        <div className="flex flex-col items-start gap-1 mb-8">
          <Typography variant="body-large" font="body" color="neutral-text">
            {artikel.published_at.label}
          </Typography>
          <div className="flex flex-col md:flex-row items-start gap-1 md:gap-4">
            <Typography variant="body-large" font="body" color="neutral-text">
              <span className="font-bold">Penulis:</span> {artikel.author.name}
            </Typography>
            {artikel.editor && (
              <Typography variant="body-large" font="body" color="neutral-text">
                <span className="font-bold">Editor:</span> {artikel.editor.name}
              </Typography>
            )}
          </div>
        </div>

        {/* Cover image */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-10">
          <NextImage
            src={artikel.cover_image.url}
            alt={artikel.cover_image.alt}
            fill
            wrapperClassName="absolute inset-0"
            imageClassName="object-cover"
            showSkeleton={true}
          />
        </div>

        {/* Konten artikel (HTML) */}
        <div
          className="prose prose-lg max-w-none text-neutral-700"
          dangerouslySetInnerHTML={{ __html: artikel.content }}
        />
      </TypographyContainer>
      <Footer />
    </main>
  );
}
