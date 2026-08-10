# Dokumentasi Komponen UI

Semua yang ada di `components/ui/` itu **wajib dipakai** buat slicing — jangan
tulis `<h1>`, `<img>`, `<button>` mentah kalau ada komponen yang udah nyediain
itu. Tujuannya biar hasil slicing dari orang yang beda-beda tetep konsisten
(warna, spacing, font selalu ngikutin design system, bukan ngetik manual
tiap kali).

Kalau ternyata butuh sesuatu yang gak ada di sini, cek dulu **shadcn/ui**
sebelum bikin dari nol sendiri.

---

## Typography

Buat semua teks — judul, paragraf, label, apapun. **Jangan pakai** `<h1>`,
`<p>`, dst langsung.

```tsx
import Typography from "@/components/ui/Typography";

<Typography variant="h2" font="merriweather" weight="bold">
  Judul Section
</Typography>

<Typography variant="body-large" font="body" color="neutral-text">
  Paragraf biasa di sini.
</Typography>
```

| Prop      | Pilihan                                                                                                                                               | Default                   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `variant` | `h1` `h2` `h3` `h4` `h5` `h6` `body-large` `body-small` `title` `caption`                                                                             | `body-large`              |
| `font`    | `coolvetica` `coolvetica-regular` `merriweather` `body`                                                                                               | `body`                    |
| `weight`  | `regular` `bold`                                                                                                                                      | `regular`                 |
| `color`   | `default` `white` `muted` `neutral-text` `neutral-600` `blue-dark-300` `blue-light-300` `coral-300` `pink-300` `lavender-300` `yellow-300` `gradient` | `default`                 |
| `align`   | `left` `center` `right` `justify`                                                                                                                     | —                         |
| `italic`  | boolean                                                                                                                                               | `false`                   |
| `as`      | override tag HTML (misal render `variant="h2"` tapi taginya `<p>`)                                                                                    | otomatis sesuai `variant` |

**⚠️ Gak ada `variant="body"`** — yang ada `body-large` dan `body-small`.
Ini kesalahan ketik yang paling sering kejadian, TypeScript bakal langsung
nolak kalau salah ketik gini, jadi kalau tiba-tiba error di baris
`<Typography variant="...">`, cek dulu ejaan variant-nya.

### Efek tambahan (buat judul besar/hero)

```tsx
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
  Judul Bergaya
</Typography>
```

- `isGradient` + `gradientPreset`: `blue` `blue-vertical` `blue-hero` `pastel` `pastel-vertical` — teks jadi gradient warna, bukan warna solid (kalau `isGradient` aktif, prop `color` diabaikan)
- `isStroke` + `strokeValue` (px) + `strokeColor`: kasih outline di sekitar teks (efek "sticker")
- `shadow`: `sm` `md` `lg` + `shadowColor`: drop shadow di bawah teks

Pola ini yang dipakai buat judul "Seputar Artikel" — kalau butuh judul dengan
efek serupa, contek langsung dari `ArtikelSection.tsx`.

---

## TypographyContainer

Wrapper layout — ngatur `max-width`, padding, dan centering biar konsisten
antar section. **Tiap section besar di halaman idealnya dibungkus ini.**

```tsx
import TypographyContainer from "@/components/ui/TypographyContainer";

<TypographyContainer maxWidth="xl" paddingX="md" paddingY="lg">
  {/* konten section */}
</TypographyContainer>;
```

| Prop       | Pilihan                                                  | Default   |
| ---------- | -------------------------------------------------------- | --------- |
| `maxWidth` | `sm`(672px) `md`(896px) `lg`(1152px) `xl`(1280px) `full` | `lg`      |
| `paddingX` | `none` `sm` `md` `lg`                                    | `md`      |
| `paddingY` | `none` `sm` `md` `lg` `xl`                               | `md`      |
| `as`       | ganti tag pembungkus (default `<section>`)               | `section` |
| `centered` | center konten secara horizontal                          | `true`    |

---

## TypographyLine

Bungkus `Typography` dengan garis dekoratif (underline, border kiri, atau dot).

```tsx
import TypographyLine from "@/components/ui/TypographyLine";

<TypographyLine variant="underline-short" color="blue-dark">
  <Typography variant="h3">Judul dengan garis bawah</Typography>
</TypographyLine>;
```

| Prop          | Pilihan                                                                        | Default     |
| ------------- | ------------------------------------------------------------------------------ | ----------- |
| `variant`     | `underline` `underline-short` `left-border` `dot` `none`                       | `underline` |
| `color`       | `blue-dark` `blue-light` `coral` `pink` `lavender` `yellow` `gradient` `white` | `blue-dark` |
| `lineHeight`  | px, buat variant underline                                                     | `3`         |
| `borderWidth` | px, buat variant left-border                                                   | `4`         |
| `gap`         | jarak teks ke garis (px)                                                       | `8`         |

---

## SectionHeader

Gabungan siap-pakai `Typography` + `TypographyLine` — buat heading section
yang standar tanpa nulis ulang kombinasi keduanya tiap kali.

```tsx
import SectionHeader from "@/components/ui/SectionHeader";

<SectionHeader
  label="Kenali Kami"
  title="HMSI ITS"
  subtitle="Himpunan Mahasiswa Sistem Informasi ITS."
  centered
  showLine
/>;
```

| Prop                                     | Keterangan                                                      |
| ---------------------------------------- | --------------------------------------------------------------- |
| `label`                                  | teks kecil di atas judul (opsional)                             |
| `title`                                  | **wajib**, judul utama                                          |
| `subtitle`                               | teks di bawah judul (opsional)                                  |
| `centered`                               | rata tengah semua teks                                          |
| `font`                                   | `coolvetica`(default) `merriweather` `body`                     |
| `variant`                                | ukuran heading: `h1` `h2`(default) `h3` `h4`                    |
| `showLine` + `lineColor` + `lineVariant` | tampilkan garis dekoratif di bawah judul                        |
| `isGradient` + `gradientValue`           | judul pakai gradient (custom CSS gradient string, bukan preset) |

Pakai ini dulu sebelum nulis manual `Typography` + `TypographyLine` sendiri —
kalau butuh heading standar (label + title + subtitle), ini lebih singkat.

---

## Button

```tsx
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

<Button variant="primary" size="md">Lihat Selengkapnya</Button>

<Button variant="outline" rightIcon={<ArrowRight size={16} />}>
  Daftar Sekarang
</Button>
```

| Prop                     | Pilihan                                                                                                                     | Default   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------- | --------- |
| `variant`                | `primary` `secondary` `outline` `outline-white` `ghost` `ghost-white` `gradient` `gradient-pastel` `danger` `outline-black` | `primary` |
| `size`                   | `xs` `sm` `md` `lg`                                                                                                         | `md`      |
| `rounded`                | `none` `sm` `md` `lg` `full`                                                                                                | `lg`      |
| `isLoading`              | tampilkan spinner, otomatis disable tombol                                                                                  | `false`   |
| `leftIcon` / `rightIcon` | `React.ReactNode`, biasanya icon dari `lucide-react`                                                                        | —         |
| `fullWidth`              | tombol selebar container                                                                                                    | `false`   |

Semua atribut `<button>` HTML biasa (`onClick`, `disabled`, `type`, dst) juga
bisa langsung dipakai — komponen ini nerima semuanya.

---

## Card

Card serbaguna, punya sub-komponen `Card.Header`, `Card.Body`, `Card.Footer`
buat struktur yang konsisten (gambar di atas, konten di tengah, aksi di bawah).

```tsx
import Card from "@/components/ui/Card";

<Card variant="elevated" hoverable rounded="lg">
  <Card.Header>{/* gambar */}</Card.Header>
  <Card.Body>
    <Typography variant="h5">Judul Card</Typography>
    <Typography variant="body-small">Deskripsi singkat.</Typography>
  </Card.Body>
  <Card.Footer>
    <Button size="sm">Aksi</Button>
  </Card.Footer>
</Card>;
```

| Prop          | Pilihan                                                                                                              | Default   |
| ------------- | -------------------------------------------------------------------------------------------------------------------- | --------- |
| `variant`     | `default`(putih+border) `elevated`(shadow) `bordered` `ghost`(transparan) `filled` `gradient-blue` `gradient-pastel` | `default` |
| `borderColor` | cuma ngaruh kalau `variant="bordered"`: `blue-dark` `blue-light` `coral` `pink` `lavender` `yellow` `neutral`        | `neutral` |
| `padding`     | `none` `sm` `md` `lg`                                                                                                | `md`      |
| `rounded`     | `none` `sm` `md` `lg` `xl` `2xl`                                                                                     | `xl`      |
| `hoverable`   | efek scale + shadow pas di-hover                                                                                     | `false`   |
| `onClick`     | bikin card jadi clickable                                                                                            | —         |
| `as`          | ganti tag pembungkus (misal `"article"`)                                                                             | `div`     |

`Card.Body` punya prop `padding` sendiri (defaultnya `md`, override kalau
`Card` luarnya udah `padding="none"` tapi body-nya tetap butuh spacing —
ini pola yang dipakai di `ArticleSection` lama, cek kalau butuh contoh).

---

## NextImage

Wrapper `next/image`, nambahin skeleton loading otomatis, fallback kalau
gambar gagal load, dan preset aspect ratio.

```tsx
import NextImage from "@/components/ui/NextImage";

{
  /* Ukuran tetap */
}
<NextImage src="/images/logo.svg" alt="Logo" width={120} height={120} />;

{
  /* Isi penuh parent (parent WAJIB position: relative/absolute + ukuran jelas) */
}
<div className="relative w-full h-[300px]">
  <NextImage
    src="/images/cover.webp"
    alt="Cover"
    fill
    imageClassName="object-cover"
  />
</div>;

{
  /* Pakai preset aspect ratio (gak perlu fill manual) */
}
<NextImage src="/images/foto.webp" alt="Foto" ratio="16/9" rounded="lg" />;
```

| Prop               | Pilihan                                                              | Default                   |
| ------------------ | -------------------------------------------------------------------- | ------------------------- |
| `wrapperClassName` | class buat `<div>` pembungkus                                        | —                         |
| `imageClassName`   | class buat elemen `<img>`-nya sendiri (BEDA dari `wrapperClassName`) | —                         |
| `ratio`            | `1/1` `4/3` `3/4` `16/9` `21/9` `3/2` `2/3` `auto`                   | `auto`                    |
| `rounded`          | `none` `sm` `md` `lg` `xl` `2xl` `full`                              | `none`                    |
| `overlay`          | `none` `gradient-bottom` `gradient-top` `dark-50` `blue-gradient`    | `none`                    |
| `showSkeleton`     | skeleton abu-abu pas loading                                         | `true`                    |
| `fallbackSrc`      | gambar pengganti kalau `src` gagal load                              | `/images/placeholder.png` |

### ⚠️ Jebakan yang beneran kejadian — baca sebelum pakai

**1. Kalau gak pakai `ratio` atau `fill`, WAJIB isi `width` dan `height` beneran — jangan `height={0}`.**
Next.js `<Image>` butuh dua-duanya buat ngitung ukuran render. `height={0}`
bukan berarti "auto", tapi beneran bikin tinggi gambarnya 0px — gambar
collapse gak keliatan, walaupun `width`-nya udah bener.

```tsx
// ❌ SALAH — gambar bakal collapse, gak keliatan
<NextImage src="/images/dekorasi.svg" alt="dekorasi" width={800} height={0} />

// ✅ BENER — cek rasio asli SVG-nya (buka file, liat atribut width/height
// atau viewBox), hitung height proporsional buat width yang dipakai
<NextImage src="/images/dekorasi.svg" alt="dekorasi" width={800} height={200} />
```

**2. Kalau kasih `wrapperClassName` yang isinya class posisi (`absolute`), itu bakal NIMPA `relative` bawaan komponen ini — dan itu **disengaja**, bukan bug.**
Project ini pakai `tailwind-merge`, jadi kalau ada 2 class posisi berlawanan
dalam satu elemen, cuma yang terakhir yang menang. Manfaatin ini kalau
butuh gambar absolute-positioned (misal dekorasi), tapi jangan bikin 2 div
`absolute` bertumpuk (satu di `wrapperClassName`, satu lagi di div pembungkus
manual di luar `NextImage`) — itu bikin box-nya collapse ke ukuran 0. Taro
semua class posisi (`absolute`, `left-0`, `top-0`, dst) di **satu tempat**
aja, langsung di `wrapperClassName`, jangan dobel sama div luar.

```tsx
// ❌ SALAH — 2 layer absolute nested, box collapse
<div className="absolute left-0 top-10 w-[800px]">
  <NextImage src="..." alt="..." width={800} height={200} wrapperClassName="absolute" />
</div>

// ✅ BENER — satu layer aja
<NextImage
  src="..." alt="..." width={800} height={200}
  wrapperClassName="absolute left-0 top-10"
/>
```

**3. Kalau `width`/`height` yang dikasih kayaknya "diabaikan" browser (padahal angkanya udah bener)**, kemungkinan besar itu ketiban Tailwind base reset (`img, video { max-width: 100%; height: auto; }`) yang otomatis nempel ke semua tag `<img>`. Buktiin dulu lewat DevTools → Inspect elemen → tab **Computed**, cari rule yang dicoret. Kalau bener itu penyebabnya, paksa menang lewat `imageClassName` (bukan `wrapperClassName`) pakai prefix `!`:

```tsx
<NextImage
  src="..."
  alt="..."
  width={800}
  height={200}
  imageClassName="!w-[800px] !h-[200px]"
/>
```

---

## Pagination

Komponen tombol halaman — **murni tampilan**, gak tau soal URL atau state
sama sekali. Dia cuma manggil `onPageChange(page)` pas tombol diklik, terus
kamu yang nentuin itu ngapain.

```tsx
import Pagination from "@/components/ui/Pagination";

<Pagination
  currentPage={2}
  totalPages={5}
  onPageChange={(page) => console.log("pindah ke halaman", page)}
/>;
```

| Prop           | Keterangan                                                           |
| -------------- | -------------------------------------------------------------------- |
| `currentPage`  | halaman aktif sekarang                                               |
| `totalPages`   | total halaman                                                        |
| `onPageChange` | `(page: number) => void`, dipanggil pas user klik tombol angka/panah |
| `className`    | tambahan class buat wrapper                                          |

Otomatis `return null` (gak nongol sama sekali) kalau `totalPages <= 1` — gak
perlu dicek manual di luar.

Ini komponen presentational doang. Kalau butuh yang beneran mindah halaman
(misal integrasi Info Center nanti), gak edit `Pagination.tsx` ini
langsung — bikin wrapper baru yang connect `onPageChange` ke navigasi
beneran, contek pola `ArtikelPagination.tsx`:

```tsx
"use client";
import { useRouter } from "next/navigation";
import Pagination from "@/components/ui/Pagination";

export default function InfoCenterPagination({
  currentPage,
  totalPages,
  basePath,
}: {
  currentPage: number;
  totalPages: number;
  basePath: string;
}) {
  const router = useRouter();
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={(page) => router.push(`${basePath}?page=${page}`)}
    />
  );
}
```

---

## Contoh lengkap: nyusun card gabungan beberapa komponen

`ArtikelCard.tsx` itu contoh bagus gimana semua komponen di atas dipakai
bareng — worth dibaca langsung sebagai referensi pola:

- Background gambar full-bleed dengan overlay gelap
- `Typography` buat tanggal, judul, kategori — masing-masing `variant`/`color` beda sesuai hierarki visual
- `NextImage` buat logo kecil kategori
- Struktur `<Link>` yang bungkus seluruh card (biar semua area bisa diklik)

**Catatan konsistensi**: di `ArtikelCard.tsx`, background image-nya pakai
tag `<img>` HTML biasa (bukan `NextImage`) — itu pengecualian yang udah ada
dari awal, bukan pola yang harus ditiru. Kalau bikin card baru dari nol
(misal buat Info Center nanti), pakai `NextImage` dengan `fill` buat
background image, bukan `<img>` mentah — konsisten sama pola di
`ArtikelHeroCarousel.tsx` yang udah bener.

---

## Ringkasan aturan

1. Gak ada teks mentah di luar `Typography`
2. Gak ada `<img>` mentah — selalu `NextImage` (kecuali ada alasan khusus, tanyain dulu)
3. Section besar dibungkus `TypographyContainer`
4. Cek `variant`/prop yang valid di tabel atas sebelum nulis — TypeScript bakal marah kalau salah ketik, itu bagus, dengerin errornya
5. Kalau komponen yang dibutuhin belum ada di sini, cek shadcn/ui dulu sebelum bikin dari nol
