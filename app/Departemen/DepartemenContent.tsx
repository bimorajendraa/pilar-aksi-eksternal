// app/Departemen/DepartemenContent.tsx
"use client";

import * as React from "react";
import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import NextImage from "@/components/ui/NextImage";
import Button from "@/components/ui/Button";
import { useSearchParams } from "next/navigation";

const departemen = [
  {
    id: 1,
    nama: "Executive Board",
    deskripsi:
      "Departemen Executive Board (Dewan Eksekutif) adalah badan tertinggi dalam struktur organisasi yang bertanggung jawab merumuskan visi strategis, menetapkan kebijakan utama, dan mengawasi jalannya operasional perusahaan secara keseluruhan. Didorong oleh para pemimpin senior, departemen ini bertindak sebagai pengambil keputusan krusial untuk memastikan pencapaian target kinerja, keberlanjutan bisnis, serta sinergi antar departemen.",
    programKerja: [
      "Pencerdasan Kesekretariatan Pilar Aksi",
      "Pencerdasan Keuangan Pilar Aksi",
    ],
    agenda: [
      "Uang Abadi HMSI",
      "Penyusunan TKO",
      "HMSI Treasurer",
      "HMSI Inventory",
      "Penyusunan Proposal HMSI",
      "Penyusunan LPJ HMSI",
      "Pengajuan Dana",
    ],
    foto: "/images/dept-foto-1.webp",
    logo: "/images/logo-dept-biru-1.svg",
  },
  {
    id: 2,
    nama: "Human Resource Development",
    deskripsi:
      "Human Resource Development Department berfokus pada pengembangan kualitas dan kapasitas mahasiswa Sistem Informasi yang selaras dengan visi dan misi Kabinet Pilar Aksi. Pengembangan dilakukan secara terstruktur untuk membentuk individu yang adaptif, kompeten, dan mampu memberikan dampak nyata.\n\nHRD bertanggung jawab dalam pemetaan potensi, pembinaan anggota, serta menciptakan lingkungan yang suportif guna mengoptimalkan peran setiap individu dalam organisasi.",
    programKerja: ["LKMM TD", "OKKBK", "Career Prep", "Rawat Maba"],
    agenda: [
      "HRD Corner",
      "Hari-hari di .. (Internalisasi)",
      "HRD Apreciation",
      "GERAH (Rapat Internal)",
    ],
    foto: "/images/dept-foto-3.webp",
    logo: "/images/logo-dept-biru-3.svg",
  },
  {
    id: 3,
    nama: "External Affairs",
    deskripsi:
      "External Affair Department berperan dalam membangun dan menjaga hubungan eksternal HMSI. Departemen ini bertanggung jawab dalam menjalin kerja sama dengan himpunan lain, alumni, mitra industri, serta berbagai stakeholder eksternal.\n\nExternal Affair juga memperkuat relasi dengan IKASI (Ikatan Alumni Sistem Informaşi) sebagai bentuk sinergi antara mahasiswa dan alumni guna mendukung jejaring serta peluang kolaborasi. Departemen ini memastikan representasi HMSI tetap profesional dan strategis dalam setiap komunikasi dan kerja sama lintas institusi.",
    programKerja: [
      "Ormawa Visit",
      "Abroad Preparation Program",
      "Career Talk (Alumni Career Talk)",
      "Company Visit",
    ],
    agenda: ["HMSI Connect", "English Clinic", "EAsikin", "EAdventure"],
    foto: "/images/dept-foto-2.webp",
    logo: "/images/logo-dept-biru-2.svg",
  },
  {
    id: 4,
    nama: "Internal Affairs",
    deskripsi:
      "Internal Affair Department berperan dalam menjaga stabilitas, kenyamanan, dan keharmonisan internal mahasiswa Sistem Informasi. Departemen ini bertanggung jawab dalam membangun solidaritas antaranggota serta menciptakan lingkungan organisasi yang inklusif dan kolaboratif.\n\nInternal Affair juga mengelola kegiatan pengembangan minat dan bakat non-akademik sebagai sarana mempererat hubungan dan meningkatkan rasa kebersamaan.",
    programKerja: ["Wisuda", "Yudisium", "Diesnatalis HMSI", "TGIF"],
    agenda: [
      "Born Day Box",
      "Komunitas Sistem Informasi",
      "IAdventure",
      "Apa Kabar HMSI",
      "COMMEX",
    ],
    foto: "/images/dept-foto-4.webp",
    logo: "/images/logo-dept-biru-4.svg",
  },
  {
    id: 5,
    nama: "Information Media",
    deskripsi:
      "Information Media Department bertanggung jawab dalam pengelolaan komunikasi dan publikasi organisasi. Departemen ini mengelola produksi konten kreatif, desain visual, dokumentasi, serta distribusi informasi melalui media digital dan sosial.\n\nInformation Media berperan dalam membangun citra positif serta memperkuat branding HMSI melalui penyampaian informasi yang cepat, tepat, dan profesional.",
    programKerja: ["Basic Media Schooling (BMS)", "GengSI", "OBSESI (PODCAST)"],
    agenda: [
      "Official Account",
      "Pangsang IM",
      "Artikel",
      "LayarHMSI",
      "Balik Layar HMSI",
      "IMoment",
      "IMUpdate",
      "Internalisasi",
    ],
    foto: "/images/dept-foto-5.webp",
    logo: "/images/logo-dept-biru-5.svg",
  },
  {
    id: 6,
    nama: "Social Development",
    deskripsi:
      "Social Development Department berfokus pada pengembangan kepedulian sosial dan pengabdian masyarakat. Departemen ini bertanggung jawab dalam perencanaan dan pelaksanaan kegiatan sosial yang melibatkan mahasiswa Sistem Informasi sebagai bentuk kontribusi nyata kepada masyarakat.\n\nSelain itu, departemen ini juga mengoordinasikan kegiatan internal yang berkaitan dengan nilai kemanusiaan dan solidaritas sosial.",
    programKerja: ["SINERGI", "SIMETRI", "SocioTrip"],
    agenda: ["ASIK", "AKSI", "SocioBank", "SocioSkuy"],
    foto: "/images/dept-foto-6.webp",
    logo: "/images/logo-dept-biru-6.svg",
  },
  {
    id: 7,
    nama: "Research & Technology Application",
    deskripsi:
      "Research and Technology Application Department bergerak dalam pengembangan kompetensi akademik, penelitian, serta implementasi teknologi. Departemen ini bertanggung jawab dalam memfasilitasi mahasiswa untuk mengikuti kompetisi ilmiah, melakukan riset, serta mengembangkan inovasi berbasis teknoloği.\n\nMelalui program pendampingan dan pengawalan, departemen ini bertujuan meningkatkan kualitas keilmiahan serta daya saing mahasiswa di tingkat nasional maupun intérnasional.",
    programKerja: ["PKTI-TD", "ISCOM", "CIC"],
    agenda: [
      "Satu Pintu HMSI",
      "Pengawalan Tim Ristek",
      "RTA Info Center",
      "RTA Healing",
    ],
    foto: "/images/dept-foto-7.webp",
    logo: "/images/logo-dept-biru-7.svg",
  },
  {
    id: 8,
    nama: "Manage",
    deskripsi:
      "Manage Department merupakan departemen yang bertanggung jawab dalam proses regenerasi dan pembentukan karakter anggota HMSI. Departemen ini mengelola rangkaian program kaderisasi yang sistematis untuk menanamkan nilai, budaya organisasi, serta kepemimpinan yang berintegritas.\n\nMelalui proses pembinaan yang terstruktur, Kaderisasi memastikan keberlanjutan organisasi dengan menyiapkan kader yang kompeten dan siap melanjutkan estafet kepemimpinan.",
    programKerja: ["Manage", "Pembekalan Manage"],
    agenda: ["Formasi", "Rakom Elder", "Rapat Internal", "Internalisasi"],
    foto: "/images/dept-foto-8.webp",
    logo: "/images/logo-dept-biru-8.svg",
  },
  {
    id: 9,
    nama: "Student Welfare",
    deskripsi:
      "Student Welfare Department berfokus pada kesejahteraan mahasiswa dalam aspek akademik dan kesehatan. Departemen ini bertanggung jawab dalam penyediaan serta penyebaran informasi penting seperti beasiswa, kebijakan akademik, dan layanan kesehatan.\n\nStudent Welfare juga berperan sebagai mediator dalam menjembatani kebutuhan mahasiswa dengan pihak terkait guna mendukung kelancaran dan keberhasilan studi.",
    programKerja: ["GOSIP (Go Scholarship)", "HealthCare", "Bedah Lab"],
    agenda: [
      "SWF Tutorial",
      "SWF Sosialisasi",
      "SWF Fund",
      "SWF Inform",
      "HMSI Mendengarmu",
      "Health Campaign",
      "Beasiswa Alumni SI",
    ],
    foto: "/images/dept-foto-9.webp",
    logo: "/images/logo-dept-biru-9.svg",
  },
  {
    id: 10,
    nama: "Entrepreneurship",
    deskripsi:
      "Entrepreneurship Department berfokus pada pengembangan jiwa kewirausahaan mahasiswa Sistem Informasi. Departemen ini bertanggung jawab dalam pengelolaan unit usaha internal, pelaksanaan kegiatan fundraising, serta penyelenggaraan pelatihan manajemen bisnis.\n\nMelalui aktivitas yang aplikatif, Entrepreneurship Department memberikan ruang bagi mahasiswa untuk mengembangkan kemampuan manajerial, finansial, serta inovasi bisnis.",
    programKerja: ["Entrepreneurship Workshop"],
    agenda: [
      "Warung ES",
      "IS Store",
      "ES Spotlight",
      "Internales",
      "ES Fundraise",
      "ES Merch",
    ],
    foto: "/images/dept-foto-10.webp",
    logo: "/images/logo-dept-biru-10.svg",
  },
];

export default function DepartemenContent() {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");

  const [activeId, setActiveId] = React.useState(
    idParam ? parseInt(idParam) : 1,
  );

  const activeDept = departemen.find((d) => d.id === activeId)!;

  return (
    <TypographyContainer as="div" maxWidth="xl" paddingX="md" paddingY="lg">
      {/* ── Judul ── */}
      <div className="flex flex-col items-center gap-0 mb-12">
        <div className="relative inline-block mt-6 mx:mt-0">
          <Typography
            variant="h2"
            font="merriweather"
            italic
            weight="bold"
            isGradient
            gradientPreset="blue"
            isStroke
            strokeValue="4"
            strokeColor="white"
            shadow="sm"
            shadowColor="#00000040"
            align="center"
            className="!text-[32px] md:!text-[64px] !leading-tight"
          >
            Departemen HMSI
          </Typography>
        </div>
        <Typography
          variant="h3"
          font="merriweather"
          italic
          weight="bold"
          isGradient
          gradientPreset="pastel-vertical"
          isStroke
          strokeValue="4"
          strokeColor="white"
          shadow="sm"
          shadowColor="#00000040"
          align="center"
          className="!text-[32px] md:!text-[64px] !leading-tight"
        >
          Pilar Aksi
        </Typography>
      </div>

      {/* ── Tab Buttons ── */}
      <div className="flex md:flex-wrap gap-5 mb-12 overflow-x-auto scrollbar-hide md:overflow-x-visible pb-2 md:pb-0">
        {departemen.map((dept) => (
          <div
            key={dept.id}
            className="group p-[3px] rounded-3xl bg-gradient-to-r from-blue-dark-300 to-blue-light-300 flex-shrink-0 md:flex-shrink"
          >
            <Button
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
            </Button>
          </div>
        ))}
      </div>

      {/* ── Konten Departemen ── */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 -mt-4 md:mt-0 items-start">
        {/* Mobile: Logo + Nama di atas */}
        <div className="flex md:hidden w-full items-center px-4">
          <div className="flex items-center gap-3 w-full">
            <img
              src={activeDept.logo}
              alt={`Logo ${activeDept.nama}`}
              className="h-10 object-contain flex-shrink-0"
            />
            <Typography
              as="span"
              variant="h5"
              font="coolvetica"
              italic
              isGradient
              gradientPreset="blue-vertical"
              className="leading-tight"
            >
              {activeDept.nama}
            </Typography>
          </div>
        </div>

        {/* Kolom Kiri: Foto */}
        <div className="flex-shrink-0 w-full md:w-[420px]">
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
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          {/* Desktop: Logo + Nama */}
          <div className="hidden md:flex flex-row items-center gap-4 flex-wrap">
            <img
              src={activeDept.logo}
              alt={`Logo ${activeDept.nama}`}
              className="w-16 h-16 object-contain flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <Typography
                as="span"
                variant="h3"
                font="coolvetica"
                italic
                isGradient
                gradientPreset="blue-vertical"
                className="leading-tight"
              >
                {activeDept.nama}
              </Typography>
            </div>
          </div>

          {/* Deskripsi */}
          <div className="flex flex-col gap-3">
            {activeDept.deskripsi.split("\n\n").map((paragraf, index) => (
              <Typography
                key={index}
                variant="body-large"
                font="body"
                color="neutral-600"
                align="justify"
                className="!text-[14px] md:!text-[18px]"
              >
                {paragraf}
              </Typography>
            ))}
          </div>

          {/* Program Kerja + Agenda */}
          <div className="flex flex-row gap-6 md:gap-12 -mt-7 md:mt-4">
            {/* Program Kerja */}
            <div className="flex flex-col gap-0 md:gap-3 flex-1">
              <Typography
                variant="h4"
                font="coolvetica"
                italic
                color="neutral-600"
                className="!text-[16px] md:!text-[30px]"
              >
                Program Kerja
              </Typography>
              <ol className="flex flex-col gap-0 md:gap-2 -mt-3 md:mt-0">
                {activeDept.programKerja.map((item, index) => (
                  <li key={index} className="flex flex-row items-start gap-2">
                    <Typography
                      as="span"
                      variant="body-large"
                      font="body"
                      color="neutral-600"
                      className="flex-shrink-0 !text-[14px] md:!text-[18px]"
                    >
                      {index + 1}.
                    </Typography>
                    <Typography
                      variant="body-large"
                      font="body"
                      color="neutral-600"
                      className="!text-[14px] md:!text-[18px]"
                    >
                      {item}
                    </Typography>
                  </li>
                ))}
              </ol>
            </div>

            {/* Agenda */}
            <div className="flex flex-col gap-0 md:gap-3 flex-1">
              <Typography
                variant="h4"
                font="coolvetica"
                italic
                color="neutral-600"
                className="!text-[16px] md:!text-[30px]"
              >
                Agenda
              </Typography>
              <ol className="flex flex-col gap-0 md:gap-2 -mt-3 md:mt-0">
                {activeDept.agenda.map((item, index) => (
                  <li key={index} className="flex flex-row items-start gap-2">
                    <Typography
                      as="span"
                      variant="body-large"
                      font="body"
                      color="neutral-600"
                      className="flex-shrink-0 !text-[14px] md:!text-[18px]"
                    >
                      {index + 1}.
                    </Typography>
                    <Typography
                      variant="body-large"
                      font="body"
                      color="neutral-600"
                      className="!text-[14px] md:!text-[18px]"
                    >
                      {item}
                    </Typography>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </TypographyContainer>
  );
}
