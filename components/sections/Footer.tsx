import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";

const navLinks = [
  {
    kategori: "Tentang",
    links: [{ label: "HMSI ITS", href: "#" }],
  },
  {
    kategori: "Gallery",
    links: [{ label: "Gallery HMSI", href: "#" }],
  },
  {
    kategori: "Kalender",
    links: [{ label: "Kalender HMSI ITS", href: "#" }],
  },
  {
    kategori: "Departemen",
    links: [
      { label: "Executive Board", href: "#" },
      { label: "Human Resource Development", href: "#" },
      { label: "Information Media", href: "#" },
      { label: "Lihat selengkapnya →", href: "#", underline: true, bold: true },
    ],
  },
];

const socialMedia = [
  { icon: "in", href: "#", label: "LinkedIn" },
  { icon: "▶", href: "#", label: "YouTube" },
  { icon: "◻", href: "#", label: "Instagram" },
  { icon: "𝕏", href: "#", label: "X" },
  { icon: "♪", href: "#", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-blue-dark-500">
      <TypographyContainer as="div" maxWidth="xl" paddingX="md" paddingY="lg">
        {/* ── DESKTOP: Nav Links + Social Media ── */}
        <div className="hidden md:flex flex-row justify-between mb-16">
          {/* Nav Links */}
          <div className="flex flex-row gap-16">
            {navLinks.map((nav) => (
              <div key={nav.kategori} className="flex flex-col gap-4">
                <Typography
                  variant="body-large"
                  font="body"
                  weight="bold"
                  color="white"
                  italic
                >
                  {nav.kategori}
                </Typography>
                <div className="flex flex-col gap-2">
                  {nav.links.map((link) => (
                    <a key={link.label} href={link.href}>
                      <Typography
                        variant="body-small"
                        font="body"
                        color="white"
                        weight={link.bold ? "bold" : "regular"}
                        className={link.underline ? "underline" : ""}
                      >
                        {link.label}
                      </Typography>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4">
            <Typography
              variant="body-large"
              font="body"
              weight="bold"
              color="white"
              italic
            >
              Media Sosial HMSI ITS
            </Typography>
            <div className="flex flex-row gap-3">
              {socialMedia.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <Typography variant="body-small" font="body" color="white">
                    {social.icon}
                  </Typography>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── MOBILE: Nav Links (hanya kategori) + Social Media ── */}
        <div className="flex md:hidden flex-col gap-8 mb-12">
          {/* Kategori saja, tanpa sub-links */}
          <div className="flex flex-col gap-4">
            {navLinks.map((nav) => (
              <a key={nav.kategori} href="#">
                <Typography
                  variant="body-large"
                  font="body"
                  weight="bold"
                  color="white"
                  italic
                >
                  {nav.kategori}
                </Typography>
              </a>
            ))}
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <Typography
              variant="body-large"
              font="body"
              weight="bold"
              color="white"
              italic
            >
              Media Sosial HMSI ITS
            </Typography>
            <div className="flex flex-row gap-3 flex-wrap">
              {socialMedia.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <Typography variant="body-small" font="body" color="white">
                    {social.icon}
                  </Typography>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bagian Tengah: Satu Pintu HMSI + Kabinet Pilar Aksi ── */}
        {/* Desktop: satu baris */}
        <div className="hidden md:flex flex-row items-end justify-between mb-4">
          <Typography
            variant="h1"
            font="merriweather"
            italic
            weight="bold"
            color="white"
            className="!text-[80px] leading-none"
          >
            Satu Pintu HMSI
          </Typography>
          <Typography variant="h5" font="coolvetica" italic color="white">
            Kabinet Pilar Aksi
          </Typography>
        </div>

        {/* Mobile: Kabinet di atas, Satu Pintu HMSI di bawah */}
        <div className="flex md:hidden flex-col gap-1 mb-4">
          <Typography variant="h6" font="coolvetica" italic color="white">
            Kabinet Pilar Aksi
          </Typography>
          <Typography
            variant="h4"
            font="merriweather"
            italic
            weight="bold"
            color="white"
            className="leading-none"
          >
            Satu Pintu HMSI
          </Typography>
        </div>

        {/* ── Garis Pemisah ── */}
        <div className="w-full h-[1px] bg-white/50 mb-4" />

        {/* ── Bagian Bawah: Copyright + Privacy ── */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <Typography variant="body-small" font="body" color="white">
            © Copyright Satu Pintu HMSI All Rights Reserved
          </Typography>
          <a href="#">
            <Typography
              variant="body-small"
              font="body"
              color="white"
              className="underline"
            >
              Privacy
            </Typography>
          </a>
        </div>
      </TypographyContainer>
    </footer>
  );
}
