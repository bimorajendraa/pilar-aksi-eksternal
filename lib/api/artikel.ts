import { Artikel } from "@/types/artikel";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getArtikels(): Promise<Artikel[]> {
  const res = await fetch(`${API_URL}/articles`, {
    next: { revalidate: 60 }, // revalidate tiap 60 detik
  });
  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
}

export async function getArtikelBySlug(slug: string): Promise<Artikel> {
  const res = await fetch(`${API_URL}/articles/${slug}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch article");
  return res.json();
}
