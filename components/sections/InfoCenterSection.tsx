"use client";

import * as React from "react";
import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import NextImage from "@/components/ui/NextImage";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Calendar, CircleDollarSign, Eye, ArrowRight } from "lucide-react";

const infoCenter = [
  {
    id: 1,
    judul: "RISE Business Case Competition",
    deskripsi:
      "kompetisi mahasiswa berskala nasional yang menantang pesertanya untuk memecahkan masalah atau studi kasus bisnis nyata dari perusahaan. Di sini, kemampuan analitis, pemecahan masalah (problem solving), dan kerja sama tim Anda akan diuji dan diasah",
    deadline: "17 Mei 2026",
    biaya: "Rp50.000 - Rp75.000",
    foto: "/images/info-1.jpg",
    linkDetail: "#",
    linkDaftar: "#",
  },
  {
    id: 2,
    judul: "UGM Find IT",
    deskripsi:
      "FIND IT! (Future Innovation and Discovery in Information and Technology) adalah event tahunan dunia teknologi informasi-titik temu ide, eksplorasi, dan inovasi. Lebih dari sekadar acara, FIND IT! adalah perjalanan untuk berinovasi, memperluas perspektif, dan menjelajahi dimensi IT yang terus berevolusi.",
    deadline: "17 Mei 2026",
    biaya: "Rp50.000 - Rp75.000",
    foto: "/images/info-2.jpg",
    linkDetail: "#",
    linkDaftar: "#",
  },
  {
    id: 3,
    judul: "RISE Business Case Competition",
    deskripsi:
      "kompetisi mahasiswa berskala nasional yang menantang pesertanya untuk memecahkan masalah atau studi kasus bisnis nyata dari perusahaan. Di sini, kemampuan analitis, pemecahan masalah (problem solving), dan kerja sama tim Anda akan diuji dan diasah",
    deadline: "17 Mei 2026",
    biaya: "Rp50.000 - Rp75.000",
    foto: "/images/info-3.jpg",
    linkDetail: "#",
    linkDaftar: "#",
  },
];

export default function InfoCenterSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <TypographyContainer
        as="div"
        maxWidth="xl"
        paddingX="md"
        paddingY="lg"
        className="relative z-10"
      >
        {/* ── Judul ── */}
        <div className="flex flex-row items-baseline gap-0 mb-10 flex-wrap">
          {/* "I" - Merriweather */}
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
          {/* "nfo " - Coolvetica */}
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
          {/* "C" - Merriweather */}
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
          {/* "enter " - Coolvetica */}
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
          {/* "Pilar " - Coolvetica */}
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
          {/* "Aksi" - Merriweather */}
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

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {infoCenter.map((item) => (
            <Card
              key={item.id}
              variant="default"
              padding="none"
              rounded="xl"
              hoverable
            >
              {/* Foto */}
              <Card.Header>
                <NextImage
                  src={item.foto}
                  alt={item.judul}
                  ratio="16/9"
                  showSkeleton={true}
                  imageClassName="object-cover"
                />
              </Card.Header>

              {/* Konten */}
              <Card.Body padding="md">
                <div className="flex flex-col gap-4">
                  {/* Judul */}
                  <Typography
                    variant="body-large"
                    font="body"
                    weight="bold"
                    color="neutral-600"
                  >
                    {item.judul}
                  </Typography>

                  {/* Deskripsi */}
                  <Typography
                    variant="body-small"
                    font="body"
                    color="neutral-text"
                  >
                    {item.deskripsi}
                  </Typography>

                  {/* Deadline + Biaya */}
                  <div className="flex flex-row gap-6">
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-row items-center gap-2">
                        <Calendar className="w-4 h-4 text-neutral-600" />
                        <Typography
                          variant="title"
                          font="body"
                          weight="bold"
                          color="neutral-600"
                        >
                          Deadline
                        </Typography>
                      </div>
                      <Typography
                        variant="body-small"
                        font="body"
                        color="neutral-600"
                      >
                        {item.deadline}
                      </Typography>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex flex-row items-center gap-2">
                        <CircleDollarSign className="w-4 h-4 text-neutral-600" />
                        <Typography
                          variant="title"
                          font="body"
                          weight="bold"
                          color="neutral-600"
                        >
                          Biaya
                        </Typography>
                      </div>
                      <Typography
                        variant="body-small"
                        font="body"
                        color="neutral-600"
                      >
                        {item.biaya}
                      </Typography>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-row gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      rounded="lg"
                      rightIcon={<Eye className="w-4 h-4" />}
                      onClick={() => window.open(item.linkDetail, "_blank")}
                    >
                      Lihat Detail
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      rounded="lg"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                      onClick={() => window.open(item.linkDaftar, "_blank")}
                    >
                      Daftar
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* ── Lihat Selengkapnya ── */}
        <div className="flex justify-end">
          <div className="p-[2px] rounded-full bg-gradient-to-r from-blue-dark-300 to-blue-light-300">
            <Button
              variant="ghost"
              size="md"
              rounded="full"
              rightIcon={<ArrowRight className="w-5 h-5 text-blue-dark-300" />}
              className="bg-white text-blue-dark-300 hover:bg-blue-dark-50"
            >
              Lihat Selengkapnya
            </Button>
          </div>
        </div>
      </TypographyContainer>
    </section>
  );
}
