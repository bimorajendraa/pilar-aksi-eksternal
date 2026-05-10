"use client";

import * as React from "react";
import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import NextImage from "@/components/ui/NextImage";
import Button from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "../ui/Card";

const departemen = [
  { id: 1, nama: "Executive Board" },
  { id: 2, nama: "External Affairs" },
  { id: 3, nama: "Human Resource Development" },
  { id: 4, nama: "Entrepreneurship" },
  { id: 5, nama: "Internal Affairs" },
  { id: 6, nama: "Information Media" },
  { id: 7, nama: "Research & Technology Application" },
  { id: 8, nama: "Student Welfare" },
  { id: 9, nama: "Social Development" },
  { id: 10, nama: "Manage" },
];

export default function DepartemenSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const totalDots = Math.ceil(departemen.length / 4);

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth / 4;
    scrollRef.current.scrollTo({
      left: index * cardWidth * 4,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth / 4;
    setActiveIndex(Math.round(scrollLeft / (cardWidth * 4)));
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-16">
      {/* ── Judul ── */}
      <TypographyContainer
        as="div"
        maxWidth="xl"
        paddingX="md"
        paddingY="none"
        className="mb-10"
      >
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
          align="center"
        >
          10 Departemen HMSI
        </Typography>
      </TypographyContainer>

      {/* ── Carousel ── */}
      <div className="relative overflow-hidden">
        {/* Tombol Prev */}
        <button
          onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-blue-dark-300" />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex flex-row gap-4 px-6 md:px-8 overflow-x-auto"
          style={{
            scrollSnapType: "x mandatory",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            touchAction: "pan-x",
            overflowY: "hidden",
          }}
        >
          {departemen.map((dept) => (
            <Card
              key={dept.id}
              variant="elevated"
              hoverable
              padding="none"
              rounded="2xl"
              className="flex-shrink-0 w-[calc(25%-12px)]"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Foto departemen */}
              <Card.Header>
                <NextImage
                  src={`/images/dept-${dept.id}.webp`}
                  alt={dept.nama}
                  ratio="3/4"
                  showSkeleton={true}
                  imageClassName="grayscale"
                  overlay="dark-50"
                >
                  {/* Konten di atas foto */}
                  <div className="absolute inset-0 z-10 flex flex-col justify-between p-5">
                    {/* Logo + Nama */}
                    <div className="flex flex-row items-center justify-center gap-3">
                      <NextImage
                        src={`/images/logo-dept-${dept.id}.svg`}
                        alt={`Logo ${dept.nama}`}
                        ratio="auto"
                        width={1}
                        height={1}
                        wrapperClassName="flex-shrink-0"
                        imageClassName="!w-auto !h-auto"
                        showSkeleton={false}
                      />
                    </div>

                    {/* Tombol */}
                    <Button
                      variant="primary"
                      size="sm"
                      rounded="full"
                      rightIcon={<span>→</span>}
                    >
                      Lihat lebih lanjut
                    </Button>
                  </div>
                </NextImage>
              </Card.Header>
            </Card>
          ))}
        </div>

        {/* Tombol Next */}
        <button
          onClick={() => scrollTo(Math.min(totalDots - 1, activeIndex + 1))}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
        >
          <ChevronRight className="w-6 h-6 text-blue-dark-300" />
        </button>
      </div>

      {/* ── Dots indicator ── */}
      <div className="flex flex-row items-center justify-center gap-2 mt-8">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`rounded-full transition-all duration-200 ${
              activeIndex === index
                ? "w-4 h-4 bg-blue-dark-300"
                : "w-3 h-3 bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
