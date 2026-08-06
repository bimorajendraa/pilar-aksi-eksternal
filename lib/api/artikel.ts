import { Artikel } from "@/types/artikel";

// Nanti dihapus/diganti kalau API sudah siap
const dummyArtikels: Artikel[] = [
  {
    title: "Ekonomi Digital Roblox Melalui User-Generated Content",
    slug: "ekonomi-digital-roblox",
    category: "Teknologi Keuangan",
    published_at: { label: "14 Mei 2026" },
    cover_image: { url: "/images/artikel-1.webp", alt: "Artikel 1" },
    author: { name: "Lorem Ipsum" },
    editor: { name: "Adityo Rafi Wardhana" },
    content: "<p>Lorem ipsum dolor sit amet...</p>",
  },
  // ...artikel dummy lainnya, sesuai yang ada di page.tsx list-mu
];

export async function getArtikels(): Promise<Artikel[]> {
  return dummyArtikels;
}

export async function getArtikelBySlug(slug: string): Promise<Artikel> {
  const artikel = dummyArtikels.find((a) => a.slug === slug);
  if (!artikel) throw new Error("Failed to fetch article");
  return artikel;
}
