"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-3 flex items-center justify-between border-b border-gray-200 bg-white sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex flex-col leading-tight">
        <span className="title-bold text-neutral-600">Satu Pintu</span>
        <span className="title-bold text-neutral-600">HMSI</span>
      </Link>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <Link
          href="/masuk"
          className="body-small-regular px-5 py-2 border border-neutral-600 rounded-full hover:bg-gray-50 transition-colors"
        >
          Masuk
        </Link>
        <Link
          href="/daftar"
          className="body-small-regular px-5 py-2 bg-neutral-600 text-white rounded-full hover:opacity-80 transition-opacity"
        >
          Daftar
        </Link>
      </div>
    </nav>
  );
}
