import { Artikel } from "@/types/artikel";

/**
 * Semua fetch di sini jalan server-side (Server Component), makanya
 * API_BASE_URL sengaja TIDAK diprefix NEXT_PUBLIC_ — gak perlu nyampe ke
 * bundle browser. Jangan import file ini dari komponen "use client".
 */

const REVALIDATE_SECONDS = 60;

type ArtikelListResponse = {
  success: boolean;
  message: string;
  data: {
    featured: Artikel[];
    articles: Artikel[];
  };
  meta: {
    current_page: number;
    per_page: number;
    total: number;
    total_pages: number;
  };
};

type ArtikelDetailResponse = {
  success: boolean;
  message: string;
  data: Artikel | null;
};

type ArtikelThisWeekResponse = {
  success: boolean;
  message: string;
  data: Artikel[];
  meta: {
    week_start: string;
    week_end: string;
    total: number;
  };
};

export type ArtikelListResult = {
  featured: Artikel[];
  articles: Artikel[];
  currentPage: number;
  totalPages: number;
  total: number;
};

function getApiBaseUrl(): string {
  const baseUrl = process.env.API_BASE_URL;
  if (!baseUrl) {
    throw new Error(
      "API_BASE_URL belum di-set. Tambahkan ke .env.local, lihat .env.local.example.",
    );
  }
  return baseUrl.replace(/\/+$/, "");
}

export async function getArtikels(
  page = 1,
  perPage = 9,
): Promise<ArtikelListResult> {
  const url = `${getApiBaseUrl()}/api/articles?page=${page}&per_page=${perPage}`;

  const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
  if (!res.ok) {
    throw new Error(`Gagal mengambil daftar artikel (HTTP ${res.status})`);
  }

  const json: ArtikelListResponse = await res.json();

  return {
    featured: json.data.featured,
    articles: json.data.articles,
    currentPage: json.meta.current_page,
    totalPages: json.meta.total_pages,
    total: json.meta.total,
  };
}

export async function getArtikelBySlug(slug: string): Promise<Artikel | null> {
  const url = `${getApiBaseUrl()}/api/articles/${encodeURIComponent(slug)}`;

  const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });

  if (res.status === 404) {
    return null;
  }
  if (!res.ok) {
    throw new Error(`Gagal mengambil detail artikel (HTTP ${res.status})`);
  }

  const json: ArtikelDetailResponse = await res.json();
  return json.data;
}

/**
 * Artikel yang published_at-nya jatuh minggu kalender ini (Senin-Minggu).
 * Dipakai buat ArtikelHeroCarousel di beranda.
 */
export async function getArtikelsThisWeek(): Promise<Artikel[]> {
  const url = `${getApiBaseUrl()}/api/articles/this-week`;

  const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
  if (!res.ok) {
    throw new Error(`Gagal mengambil artikel minggu ini (HTTP ${res.status})`);
  }

  const json: ArtikelThisWeekResponse = await res.json();
  return json.data;
}
