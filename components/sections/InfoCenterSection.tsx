"use client";

import * as React from "react";
import Image from "next/image";
import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import {
  ArrowRight,
  Calendar,
  CircleDollarSign,
  Eye,
  ListFilter,
  Search,
} from "lucide-react";

const infoCenter = [
  {
    id: 1,
    judul: "RISE Business Case Competition",
    kategori: "Business Case",
    deskripsi:
      "kompetisi mahasiswa berskala nasional yang menantang pesertanya untuk memecahkan masalah atau studi kasus bisnis nyata dari perusahaan. Di sini, kemampuan analitis, pemecahan masalah (problem solving), dan kerja sama tim Anda akan diuji dan diasah",
    deadline: "17 Mei 2026",
    biaya: "Rp50.000 - Rp75.000",
    foto: "/images/info-rise.png",
    linkDetail: "#",
    linkDaftar: "#",
  },
  {
    id: 2,
    judul: "UGM Find IT",
    kategori: "Technology",
    deskripsi:
      "FIND IT! (Future Innovation and Discovery in Information and Technology) adalah event tahunan dunia teknologi informasi-titik temu ide, eksplorasi, dan inovasi. Lebih dari sekadar acara, FIND IT! adalah perjalanan untuk berinovasi, memperluas perspektif, dan menjelajahi dimensi IT yang terus berevolusi.",
    deadline: "17 Mei 2026",
    biaya: "Rp50.000 - Rp75.000",
    foto: "/images/info-findit.png",
    linkDetail: "#",
    linkDaftar: "#",
  },
  {
    id: 3,
    judul: "RISE Business Case Competition",
    kategori: "Business Case",
    deskripsi:
      "kompetisi mahasiswa berskala nasional yang menantang pesertanya untuk memecahkan masalah atau studi kasus bisnis nyata dari perusahaan. Di sini, kemampuan analitis, pemecahan masalah (problem solving), dan kerja sama tim Anda akan diuji dan diasah",
    deadline: "17 Mei 2026",
    biaya: "Rp50.000 - Rp75.000",
    foto: "/images/info-rise.png",
    linkDetail: "#",
    linkDaftar: "#",
  },
];

type InfoCenterItem = (typeof infoCenter)[number];

type InfoCenterSectionProps = {
  variant?: "home" | "page";
};

const pageInfoCenter = [
  ...infoCenter,
  ...infoCenter.map((item) => ({
    ...item,
    id: item.id + infoCenter.length,
  })),
];

function HomeTitle() {
  return (
    <div className="flex flex-row items-baseline gap-0 mb-10 flex-wrap">
      <Typography
        as="span"
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
        I
      </Typography>
      <Typography
        as="span"
        variant="h2"
        font="coolvetica"
        italic
        isGradient
        gradientPreset="blue-vertical"
        isStroke
        strokeValue="3"
        strokeColor="white"
        shadow="sm"
        shadowColor="#00000040"
      >
        nfo&nbsp;
      </Typography>
      <Typography
        as="span"
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
        C
      </Typography>
      <Typography
        as="span"
        variant="h2"
        font="coolvetica"
        italic
        isGradient
        gradientPreset="blue-vertical"
        isStroke
        strokeValue="3"
        strokeColor="white"
        shadow="sm"
        shadowColor="#00000040"
      >
        enter&nbsp;
      </Typography>
      <Typography
        as="span"
        variant="h2"
        font="coolvetica"
        italic
        isGradient
        gradientPreset="pastel-vertical"
        isStroke
        strokeValue="3"
        strokeColor="white"
        shadow="sm"
        shadowColor="#00000040"
      >
        Pilar&nbsp;
      </Typography>
      <Typography
        as="span"
        variant="h2"
        font="merriweather"
        italic
        weight="bold"
        isGradient
        gradientPreset="pastel-vertical"
        isStroke
        strokeValue="3"
        strokeColor="white"
        shadow="sm"
        shadowColor="#00000040"
      >
        Aksi
      </Typography>
    </div>
  );
}

function PageTitle() {
  return (
    <div className="mb-8 text-center">
      <Typography
        as="h1"
        variant="h3"
        font="merriweather"
        italic
        weight="bold"
        isGradient
        gradientPreset="blue-vertical"
        isStroke
        strokeValue="2"
        strokeColor="white"
        shadow="sm"
        shadowColor="#00000040"
        className="!text-[40px] !leading-[1.05] md:!text-[56px]"
      >
        Info Center
      </Typography>
      <Typography
        as="p"
        variant="h4"
        font="merriweather"
        italic
        weight="bold"
        isGradient
        gradientPreset="pastel-vertical"
        isStroke
        strokeValue="2"
        strokeColor="white"
        shadow="sm"
        shadowColor="#00000040"
        className="!text-[28px] !leading-[1.05] md:!text-[38px]"
      >
        Pilar Aksi
      </Typography>
    </div>
  );
}

function PosterPreview({ item }: { item: InfoCenterItem }) {
  return (
    <div className="relative h-[172px] overflow-hidden bg-blue-dark-50 md:h-[182px]">
      <Image
        src={item.foto}
        alt=""
        aria-hidden
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="scale-110 object-cover opacity-30 blur-sm"
      />
      <div className="absolute inset-0 bg-white/20" />
      <Image
        src={item.foto}
        alt={item.judul}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-contain"
      />
    </div>
  );
}

function InfoCard({ item }: { item: InfoCenterItem }) {
  return (
    <Card
      variant="default"
      padding="none"
      rounded="lg"
      hoverable
      className="flex h-full flex-col border-neutral-200 shadow-md"
    >
      <Card.Header>
        <PosterPreview item={item} />
      </Card.Header>

      <Card.Body padding="md" className="flex flex-1 flex-col gap-4 !p-5">
        <Typography
          variant="body-large"
          font="body"
          weight="bold"
          color="neutral-600"
          className="!text-[18px] !leading-[24px]"
        >
          {item.judul}
        </Typography>

        <Typography
          variant="caption"
          font="body"
          color="neutral-text"
          className="line-clamp-5 !text-[13px] !leading-[18px] md:line-clamp-6"
        >
          {item.deskripsi}
        </Typography>

        <div className="mt-auto grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <Calendar className="h-4 w-4 text-neutral-600" />
              <Typography
                variant="caption"
                font="body"
                weight="bold"
                color="neutral-600"
              >
                Deadline
              </Typography>
            </div>
            <Typography
              variant="caption"
              font="body"
              color="neutral-600"
              className="!text-[12px] !leading-[16px]"
            >
              {item.deadline}
            </Typography>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <CircleDollarSign className="h-4 w-4 text-neutral-600" />
              <Typography
                variant="caption"
                font="body"
                weight="bold"
                color="neutral-600"
              >
                Biaya
              </Typography>
            </div>
            <Typography
              variant="caption"
              font="body"
              color="neutral-600"
              className="!text-[12px] !leading-[16px]"
            >
              {item.biaya}
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            size="sm"
            rounded="lg"
            fullWidth
            rightIcon={<Eye className="h-4 w-4" />}
            className="h-10 !px-2 !text-[13px]"
            onClick={() => window.open(item.linkDetail, "_blank")}
          >
            Lihat Detail
          </Button>
          <Button
            variant="primary"
            size="sm"
            rounded="lg"
            fullWidth
            rightIcon={<ArrowRight className="h-4 w-4" />}
            className="h-10 !px-2 !text-[13px]"
            onClick={() => window.open(item.linkDaftar, "_blank")}
          >
            Daftar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default function InfoCenterSection({
  variant = "home",
}: InfoCenterSectionProps) {
  const isPage = variant === "page";
  const [kategori, setKategori] = React.useState("all");
  const [query, setQuery] = React.useState("");
  const [entries, setEntries] = React.useState("10");

  const filteredItems = React.useMemo(() => {
    const source = isPage ? pageInfoCenter : infoCenter;
    const normalizedQuery = query.trim().toLowerCase();

    return source
      .filter((item) => kategori === "all" || item.kategori === kategori)
      .filter(
        (item) =>
          !normalizedQuery ||
          item.judul.toLowerCase().includes(normalizedQuery) ||
          item.deskripsi.toLowerCase().includes(normalizedQuery),
      )
      .slice(0, Number(entries));
  }, [entries, isPage, kategori, query]);

  const kategoriOptions = Array.from(
    new Set(infoCenter.map((item) => item.kategori)),
  );

  return (
    <section
      className={`relative w-full overflow-hidden bg-white ${
        isPage ? "min-h-screen pb-16 pt-24" : ""
      }`}
    >
      {isPage && (
        <Image
          src="/images/bg-kotak.webp"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-[0.55]"
        />
      )}
      <TypographyContainer
        as="div"
        maxWidth="xl"
        paddingX="md"
        paddingY={isPage ? "none" : "lg"}
        className="relative z-10"
      >
        {isPage ? <PageTitle /> : <HomeTitle />}

        {isPage && (
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="relative">
                <ListFilter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-dark-300" />
                <select
                  value={kategori}
                  onChange={(event) => setKategori(event.target.value)}
                  className="h-10 min-w-[180px] rounded-md border border-blue-dark-200 bg-white pl-9 pr-4 text-[13px] font-bold text-blue-dark-300 outline-none transition focus:ring-2 focus:ring-blue-dark-100"
                >
                  <option value="all">Filter by lomba</option>
                  {kategoriOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <select
                value={entries}
                onChange={(event) => setEntries(event.target.value)}
                className="h-10 min-w-[120px] rounded-md border border-blue-dark-200 bg-white px-4 text-[13px] font-bold text-blue-dark-300 outline-none transition focus:ring-2 focus:ring-blue-dark-100"
              >
                <option value="6">6 Entries</option>
                <option value="10">10 Entries</option>
              </select>
            </div>

            <label className="relative w-full md:w-[320px]">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search"
                className="h-10 w-full rounded-md border border-blue-dark-200 bg-white pl-4 pr-12 text-[13px] text-neutral-600 outline-none transition placeholder:text-blue-dark-200 focus:ring-2 focus:ring-blue-dark-100"
              />
              <span className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-r-md bg-blue-dark-300 text-white">
                <Search className="h-4 w-4" />
              </span>
            </label>
          </div>
        )}

        <div
          className={`grid grid-cols-1 gap-6 mb-8 ${
            isPage ? "md:grid-cols-3 md:gap-7" : "md:grid-cols-3"
          }`}
        >
          {filteredItems.map((item) => (
            <InfoCard key={item.id} item={item} />
          ))}
        </div>

        {!isPage && (
          <div className="flex justify-end">
            <div className="p-[2px] rounded-full bg-gradient-to-r from-blue-dark-300 to-blue-light-300">
              <Button
                variant="ghost"
                size="md"
                rounded="full"
                rightIcon={
                  <ArrowRight className="w-5 h-5 text-blue-dark-300" />
                }
                className="bg-white text-blue-dark-300 hover:bg-blue-dark-50"
              >
                Lihat Selengkapnya
              </Button>
            </div>
          </div>
        )}
      </TypographyContainer>
    </section>
  );
}
