# Conventional Commits

Aturan format pesan commit di project ini. Tujuannya biar riwayat `git log`
gampang dibaca — orang lain (atau kamu sendiri 2 minggu lagi) bisa langsung
tau **apa** yang berubah dan **kenapa**, cukup dari judul commit-nya doang,
tanpa perlu buka diff-nya satu-satu.

**Catatan**: di project ini belum ada tool yang otomatis nolak commit kalau
formatnya salah (beda dari beberapa project lain yang pakai `husky` buat
ngecek ini otomatis pas commit). Jadi ini murni disiplin manual — bakal dicek
pas review PR, bukan di-block otomatis.

---

## Format

```
tipe: deskripsi singkat
```

- **Tipe** selalu bahasa Inggris, huruf kecil, diikuti titik dua
- **Deskripsi** boleh bahasa Indonesia (ini yang kita pakai di sini)
- Deskripsi pakai kalimat perintah ("tambah", "benerin"), bukan lampau
  ("menambahkan", "telah dibenerin")
- Gak pakai titik di akhir
- Kalau butuh detail lebih, tambahin di baris kosong setelah judul (commit
  body) — judulnya tetep singkat

## Tipe yang dipakai

| Tipe       | Buat apa                                                                     | Contoh                                                  |
| ---------- | ---------------------------------------------------------------------------- | ------------------------------------------------------- |
| `feat`     | Fitur/halaman/komponen baru                                                  | `feat: slicing halaman detail info center`              |
| `fix`      | Benerin bug                                                                  | `fix: gambar hero carousel gak muncul di mobile`        |
| `style`    | Perubahan visual/CSS doang, gak ngubah logic                                 | `style: rapihin spacing card artikel`                   |
| `refactor` | Rapihin/restruktur kode, tapi hasil tampilan/perilaku sama persis            | `refactor: pecah ArtikelCard jadi komponen lebih kecil` |
| `docs`     | Dokumentasi (README, `docs/`, komentar kode)                                 | `docs: tambah panduan komponen UI`                      |
| `chore`    | Kerjaan beres-beres yang gak masuk kategori lain (update dependency, config) | `chore: update next ke versi 16.2.4`                    |

Buat kerjaan slicing sehari-hari, kemungkinan besar kamu bakal paling sering
pakai `feat` (lagi bikin bagian baru) dan `fix` (benerin yang udah ada tapi
salah).

## Contoh dari commit asli project ini

```
fix: guard ArtikelHeroCarousel against empty artikels array
docs: tambah panduan komponen UI dan dokumentasi API Info Center
feat: add artikel this-week endpoint for hero carousel
```

## Contoh baik vs buruk

```
❌ update
❌ fix bug
❌ perubahan
❌ asdsadasd
❌ commit ke 5
```

Semua ini gak ngasih tau apa-apa — orang lain harus buka diff buat tau ini
ngubah apa.

```
✅ feat: slicing hero section homepage
✅ fix: card artikel kepotong di layar mobile kecil
✅ style: samain warna tombol pagination
✅ docs: update cara pakai NextImage buat dekorasi SVG
```

Ini langsung jelas cakupannya dari judul doang.

## Satu commit, satu perubahan

Jangan numpuk banyak perubahan gak nyambung dalam 1 commit (misal sekalian
benerin bug DAN nambah fitur baru DAN ganti warna tombol dalam 1x
`git commit`). Pisah jadi beberapa commit kecil — lebih gampang di-review,
dan kalau ternyata salah satu bagian perlu di-revert, gak ikut kebawa yang
lain.

```
❌ 1 commit: "feat: slicing halaman artikel + benerin navbar + update warna button"

✅ 3 commit terpisah:
   feat: slicing halaman artikel
   fix: navbar ketutup pas scroll
   style: update warna button jadi biru dark-300
```

## Kalau butuh detail lebih dari 1 baris

```
fix: gambar hero carousel gak muncul di mobile

Root cause: height={0} di NextImage bikin box-nya collapse.
Diganti pakai height proporsional sesuai rasio SVG aslinya.
```

Baris pertama tetep judul singkat (ini yang muncul di `git log --oneline`),
baris kosong, baru penjelasan lebih detail kalau emang perlu.
