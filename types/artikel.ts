export type Artikel = {
  title: string;
  slug: string;
  category: string;
  published_at: { label: string };
  cover_image: { url: string; alt: string };
  author: { name: string };
  editor: { name: string } | null;
  content: string;
};
