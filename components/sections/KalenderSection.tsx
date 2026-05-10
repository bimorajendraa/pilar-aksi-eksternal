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
        <div className="flex flex-row items-baseline justify-end gap-0 mb-4 pr-12">
          {/* "K" - Merriweather */}
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

          {/* "alender " - Coolvetica */}
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

          {/* spasi */}
          <span className="w-4" />

          {/* "HMSI " - Merriweather */}
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

          {/* spasi */}
          <span className="w-4" />

          {/* "ITS" - Coolvetica */}
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

        {/* ── Subtitle ── */}
        <Typography
          variant="body-large"
          font="body"
          color="neutral-600"
          align="center"
          className="mb-8"
        >
          Lihat jadwal lengkap event, kegiatan, dan agenda penting HMSI ITS.
          Jangan sampai ketinggalan momen seru yang sudah kami siapkan untukmu!
        </Typography>

        {/* ── Google Calendar Embed ── */}
        <div className="w-full overflow-hidden border border-neutral-200 shadow-sm">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=Asia%2FJakarta&mode=MONTH"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </TypographyContainer>
    </section>
  );
}
