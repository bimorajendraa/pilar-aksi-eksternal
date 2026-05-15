import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import NextImage from "../ui/NextImage";

export default function KalenderSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* ── Dekorasi Intersect kiri ── */}
      <div className="absolute left-0 top-100 -translate-y-1/2 z-0 w-[718.02px]">
        <NextImage
          src="/images/Intersect.svg"
          alt=""
          width={718.02}
          height={718.02}
          imageClassName="w-full h-auto object-contain"
          showSkeleton={false}
        />
      </div>

      <TypographyContainer
        as="div"
        maxWidth="xl"
        paddingX="md"
        paddingY="lg"
        className="relative z-10"
      >
        {/* ── Judul ── */}
        {/* Desktop: satu baris rata kanan */}
        <div className="hidden md:flex flex-row items-baseline justify-end gap-0 mb-4 pr-12">
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
            K
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
            alender
          </Typography>
          <span className="w-4" />
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
            HMSI
          </Typography>
          <span className="w-4" />
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
            ITS
          </Typography>
        </div>

        {/* Mobile: dua baris centered */}
        <div className="flex md:hidden flex-col items-center mb-4">
          {/* Baris 1: Kalender */}
          <div className="flex flex-row items-baseline">
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
              shadow="md"
              shadowColor="#00000040"
            >
              K
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
              shadow="md"
              shadowColor="#00000040"
            >
              alender
            </Typography>
          </div>
          {/* Baris 2: HMSI ITS */}
          <div className="flex flex-row items-baseline -mt-5">
            <Typography
              as="span"
              variant="h3"
              font="merriweather"
              italic
              weight="bold"
              isGradient
              gradientPreset="blue-vertical"
              isStroke
              strokeValue="3"
              strokeColor="white"
              shadow="md"
              shadowColor="#00000040"
            >
              HMSI
            </Typography>
            <span className="w-3" />
            <Typography
              as="span"
              variant="h3"
              font="coolvetica"
              italic
              isGradient
              gradientPreset="blue-vertical"
              isStroke
              strokeValue="3"
              strokeColor="white"
              shadow="md"
              shadowColor="#00000040"
            >
              ITS
            </Typography>
          </div>
        </div>

        {/* ── Subtitle ── */}
        <Typography
          variant="body-small"
          font="body"
          color="neutral-600"
          align="center"
          className="mb-8 md:text-[18px]"
        >
          Lihat jadwal lengkap event, kegiatan, dan agenda penting HMSI ITS.
          Jangan sampai ketinggalan momen seru yang sudah kami siapkan untukmu!
        </Typography>

        {/* ── Google Calendar Embed ── */}
        <div className="w-full overflow-hidden border border-neutral-200 shadow-sm rounded-xl">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=Asia%2FJakarta&mode=MONTH"
            style={{ border: 0 }}
            width="100%"
            height="500"
            className="md:h-[600px] h-[500px]"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </TypographyContainer>
    </section>
  );
}
