import * as React from "react";
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white">
      {/* ── Background SVG gradient ── */}
      <Image
        src="/images/navbar-gradient.svg"
        alt=""
        fill
        className="object-cover pointer-events-none"
        aria-hidden
      />
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <Typography
            variant="h6"
            font="merriweather"
            weight="bold"
            color="neutral-600"
            italic
          >
            Satu Pintu
          </Typography>
          <Typography
            variant="h6"
            font="merriweather"
            weight="bold"
            color="neutral-600"
            italic
          >
            HMSI
          </Typography>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline-black"
            size="md"
            rounded="lg"
            style={{ color: "#000", outlineColor: "#000" }}
          >
            Masuk
          </Button>
          <Button
            variant="primary"
            size="md"
            rounded="lg"
            style={{ background: "#000" }}
          >
            Daftar
          </Button>
        </div>
      </div>
    </nav>
  );
}
