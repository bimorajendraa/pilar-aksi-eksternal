"use client";

import * as React from "react";
import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import NextImage from "@/components/ui/NextImage";
import Button from "@/components/ui/Button";

const departemen = [
  {
    id: 1,
    nama: "Executive Board",
    deskripsi:
      "Departemen Executive Board (Dewan Eksekutif) adalah badan tertinggi dalam struktur organisasi yang bertanggung jawab merumuskan visi strategis, menetapkan kebijakan utama, dan mengawasi jalannya operasional perusahaan secara keseluruhan. Didorong oleh para pemimpin senior, departemen ini bertindak sebagai pengambil keputusan krusial untuk memastikan pencapaian target kinerja, keberlanjutan bisnis, serta sinergi antar departemen.",
    programKerja: [
      "Program Kerja 1",
      "Program Kerja 2",
      "Program Kerja 3",
      "Program Kerja 4",
    ],
    agenda: ["Agenda 1", "Agenda 2", "Agenda 3", "Agenda 4"],
    foto: "/images/dept-foto-1.webp",
    logo: "/images/logo-dept-biru-1.svg",
  },
  {
    id: 2,
    nama: "Human Resource Development",
    deskripsi: "Deskripsi Human Resource Development.",
    programKerja: [
      "Program Kerja 1",
      "Program Kerja 2",
      "Program Kerja 3",
      "Program Kerja 4",
    ],
    agenda: ["Agenda 1", "Agenda 2", "Agenda 3", "Agenda 4"],
    foto: "/images/dept-foto-2.webp",
    logo: "/images/logo-dept-2.svg",
  },
  {
    id: 3,
    nama: "External Affairs",
    deskripsi: "Deskripsi External Affairs.",
    programKerja: [
      "Program Kerja 1",
      "Program Kerja 2",
      "Program Kerja 3",
      "Program Kerja 4",
    ],
    agenda: ["Agenda 1", "Agenda 2", "Agenda 3", "Agenda 4"],
    foto: "/images/dept-foto-3.webp",
    logo: "/images/logo-dept-3.svg",
  },
  {
    id: 4,
    nama: "Internal Affairs",
    deskripsi: "Deskripsi Internal Affairs.",
    programKerja: [
      "Program Kerja 1",
      "Program Kerja 2",
      "Program Kerja 3",
      "Program Kerja 4",
    ],
    agenda: ["Agenda 1", "Agenda 2", "Agenda 3", "Agenda 4"],
    foto: "/images/dept-foto-4.webp",
    logo: "/images/logo-dept-4.svg",
  },
  {
    id: 5,
    nama: "Information Media",
    deskripsi: "Deskripsi Information Media.",
    programKerja: [
      "Program Kerja 1",
      "Program Kerja 2",
      "Program Kerja 3",
      "Program Kerja 4",
    ],
    agenda: ["Agenda 1", "Agenda 2", "Agenda 3", "Agenda 4"],
    foto: "/images/dept-foto-5.webp",
    logo: "/images/logo-dept-5.svg",
  },
  {
    id: 6,
    nama: "Social Development",
    deskripsi: "Deskripsi Social Development.",
    programKerja: [
      "Program Kerja 1",
      "Program Kerja 2",
      "Program Kerja 3",
      "Program Kerja 4",
    ],
    agenda: ["Agenda 1", "Agenda 2", "Agenda 3", "Agenda 4"],
    foto: "/images/dept-foto-6.webp",
    logo: "/images/logo-dept-6.svg",
  },
  {
    id: 7,
    nama: "Research & Technology Application",
    deskripsi: "Deskripsi Research & Technology Application.",
    programKerja: [
      "Program Kerja 1",
      "Program Kerja 2",
      "Program Kerja 3",
      "Program Kerja 4",
    ],
    agenda: ["Agenda 1", "Agenda 2", "Agenda 3", "Agenda 4"],
    foto: "/images/dept-foto-7.webp",
    logo: "/images/logo-dept-7.svg",
  },
  {
    id: 8,
    nama: "Manage",
    deskripsi: "Deskripsi Manage.",
    programKerja: [
      "Program Kerja 1",
      "Program Kerja 2",
      "Program Kerja 3",
      "Program Kerja 4",
    ],
    agenda: ["Agenda 1", "Agenda 2", "Agenda 3", "Agenda 4"],
    foto: "/images/dept-foto-8.webp",
    logo: "/images/logo-dept-8.svg",
  },
  {
    id: 9,
    nama: "Student Welfare",
    deskripsi: "Deskripsi Student Welfare.",
    programKerja: [
      "Program Kerja 1",
      "Program Kerja 2",
      "Program Kerja 3",
      "Program Kerja 4",
    ],
    agenda: ["Agenda 1", "Agenda 2", "Agenda 3", "Agenda 4"],
    foto: "/images/dept-foto-9.webp",
    logo: "/images/logo-dept-9.svg",
  },
  {
    id: 10,
    nama: "Entrepreneurship",
    deskripsi: "Deskripsi Entrepreneurship.",
    programKerja: [
      "Program Kerja 1",
      "Program Kerja 2",
      "Program Kerja 3",
      "Program Kerja 4",
    ],
    agenda: ["Agenda 1", "Agenda 2", "Agenda 3", "Agenda 4"],
    foto: "/images/dept-foto-10.webp",
    logo: "/images/logo-dept-10.svg",
  },
];

export default function DepartemenPage() {
  const [activeId, setActiveId] = React.useState(1);

  const activeDept = departemen.find((d) => d.id === activeId)!;

  return (
    <main className="relative min-h-screen bg-white">
      <img
        src="/images/bg-kotak.webp"
        alt=""
        aria-hidden
        className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ mixBlendMode: "multiply" }}
      />

      <TypographyContainer as="div" maxWidth="xl" paddingX="md" paddingY="lg">
        {/* ── Tab Buttons ── */}
        <div className="flex flex-wrap gap-5 mb-12">
          {departemen.map((dept) => (
            <div
              key={dept.id}
              className="p-[3px] rounded-3xl bg-gradient-to-r from-blue-dark-300 to-blue-light-300"
            >
              <button
                onClick={() => setActiveId(dept.id)}
                className={`px-9 py-3 rounded-3xl w-full transition-all duration-200 ${
                  activeId === dept.id
                    ? "bg-gradient-to-b from-blue-dark-300 to-blue-light-300"
                    : "bg-white hover:bg-gradient-to-b hover:from-blue-dark-300 hover:to-blue-light-300"
                }`}
              >
                <Typography
                  as="span"
                  variant="body-small"
                  font="body"
                  weight="bold"
                  italic
                  color="default"
                  className={`transition-colors duration-200 ${
                    activeId === dept.id
                      ? "!text-white"
                      : "!text-neutral-600 group-hover:!text-white"
                  }`}
                >
                  {dept.nama}
                </Typography>
              </button>
            </div>
          ))}
        </div>

        {/* ── Konten Departemen ── */}
        <div className="flex flex-row gap-12 items-start">
          {/* Kolom Kiri: Foto */}
          <div className="flex-shrink-0 w-[420px]">
            <NextImage
              src={activeDept.foto}
              alt={activeDept.nama}
              ratio="3/4"
              rounded="2xl"
              imageClassName="grayscale object-cover"
              showSkeleton={true}
            />
          </div>

          {/* Kolom Kanan: Detail */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Logo + Nama */}
            <div className="flex flex-row items-center gap-4">
              <NextImage
                src={activeDept.logo}
                alt={`Logo ${activeDept.nama}`}
                ratio="1/1"
                wrapperClassName="w-16 h-16 flex-shrink-0"
                showSkeleton={true}
              />
              <Typography
                variant="h3"
                font="coolvetica"
                italic
                isGradient
                gradientPreset="blue-vertical"
              >
                {activeDept.nama}
              </Typography>
            </div>

            {/* Deskripsi */}
            <Typography
              variant="body-large"
              font="body"
              color="neutral-600"
              align="justify"
            >
              {activeDept.deskripsi}
            </Typography>

            {/* Program Kerja + Agenda */}
            <div className="flex flex-row gap-12 mt-4">
              {/* Program Kerja */}
              <div className="flex flex-col gap-3 flex-1">
                <Typography
                  variant="h4"
                  font="coolvetica"
                  italic
                  color="neutral-600"
                >
                  Program Kerja
                </Typography>
                <ul className="flex flex-col gap-2">
                  {activeDept.programKerja.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-row items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 flex-shrink-0" />
                      <Typography
                        variant="body-large"
                        font="body"
                        color="neutral-600"
                      >
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Agenda */}
              <div className="flex flex-col gap-3 flex-1">
                <Typography
                  variant="h4"
                  font="coolvetica"
                  italic
                  color="neutral-600"
                >
                  Agenda
                </Typography>
                <ul className="flex flex-col gap-2">
                  {activeDept.agenda.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-row items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 flex-shrink-0" />
                      <Typography
                        variant="body-large"
                        font="body"
                        color="neutral-600"
                      >
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </TypographyContainer>
    </main>
  );
}
