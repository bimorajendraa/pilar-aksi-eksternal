import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import NextImage from "@/components/ui/NextImage";
import { getArtikelBySlug } from "@/lib/api/artikel";

export default async function ArtikelDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const artikel = await getArtikelBySlug(params.slug);

  return (
    <main className="bg-white min-h-screen">
      <TypographyContainer as="div" maxWidth="lg" paddingX="md" paddingY="xl">
        {/* Tombol back */}
        <Link
          href="/artikel"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-blue-dark-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <Typography variant="body-small" font="body">
            Kembali
          </Typography>
        </Link>

        {/* Judul artikel */}
        <Typography
          variant="h3"
          font="merriweather"
          italic
          weight="bold"
          isGradient
          gradientPreset="blue-vertical"
          isStroke
          strokeValue="2"
          strokeColor="white"
          align="center"
          className="mb-4"
        >
          {artikel.title}
        </Typography>

        {/* Meta: tanggal + penulis + editor */}
        <div className="flex flex-col items-center gap-1 mb-8">
          <Typography variant="caption" font="body" color="muted">
            {artikel.published_at.label}
          </Typography>
          <div className="flex items-center gap-4">
            <Typography variant="caption" font="body" color="muted">
              Penulis: {artikel.author.name}
            </Typography>
            {artikel.editor && (
              <Typography variant="caption" font="body" color="muted">
                Editor: {artikel.editor.name}
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
    </main>
  );
}
