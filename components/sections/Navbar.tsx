"use client";

import * as React from "react";
import Typography from "@/components/ui/Typography";
import Link from "next/link";

const navLinks = [
  { label: "Departemen", href: "/Departemen" },
  { label: "Artikel", href: "/Article" },
  { label: "Info Center", href: "/InfoCenter" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white rounded-b-xl shadow-md">
      {/* ── Bar utama ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex flex-col leading-tight gap-0">
          <Typography
            variant="h6"
            font="merriweather"
            weight="bold"
            isGradient
            gradientPreset="blue-vertical"
            italic
          >
            Satu Pintu
          </Typography>
          <Typography
            variant="h6"
            font="merriweather"
            weight="bold"
            isGradient
            gradientPreset="blue-vertical"
            italic
            className="-mt-2"
          >
            HMSI
          </Typography>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Typography
                variant="body-large"
                font="body"
                weight="bold"
                isGradient
                gradientPreset="blue-vertical"
                className="hover:opacity-75 transition-opacity"
              >
                {link.label}
              </Typography>
            </Link>
          ))}
        </div>

        {/* Hamburger — ujung kanan mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-blue-dark-200 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-blue-dark-200 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-blue-dark-200 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* ── Mobile Dropdown — di luar div utama ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 pt-2 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <Typography
                variant="body-small"
                font="body"
                weight="bold"
                isGradient
                gradientPreset="blue-vertical"
              >
                {link.label}
              </Typography>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
