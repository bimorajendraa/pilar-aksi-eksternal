// sections/AboutSection.tsx
import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import NextImage from "@/components/ui/NextImage";

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* ── Background: foto bersama HMSI ── */}
      <NextImage
        src="/images/foto-bersama-hmsi-2.png"
        alt="Foto Bersama HMSI"
        fill
        wrapperClassName="absolute inset-0 z-0"
        imageClassName="object-cover object-top opacity-100"
        showSkeleton={false}
      />

      <div className="absolute inset-0 z-[2] bg-white/50" />
      <div className="absolute left-[-180] top-0 -translate-y-1/2 z-[7] w-619">
        <NextImage
          src="/images/Pattern.svg"
          alt="dekorasi"
          width={619}
          height={606}
          wrapperClassName="absolute"
        />
      </div>
      <div className="absolute left-[-400] top-17 -translate-y-1/2 z-[7] w-870">
        <NextImage
          src="/images/Vector1.svg"
          alt="dekorasi"
          width={870}
          height={198}
          wrapperClassName="absolute"
        />
      </div>
      <div className="absolute left-300 top-60 -translate-y-1/2 z-[6] w-397">
        <NextImage
          src="/images/Exclude.svg"
          alt="dekorasi"
          width={397}
          height={392}
          wrapperClassName="absolute"
        />
      </div>
      <div className="absolute left-250 top-30 -translate-y-1/2 z-[7] w-619">
        <NextImage
          src="/images/Pattern.svg"
          alt="dekorasi"
          width={619}
          height={606}
          wrapperClassName="absolute"
        />
      </div>
      <TypographyContainer
        as="div"
        maxWidth="xl"
        paddingX="md"
        paddingY="xl"
        className="relative z-10"
      >
        <div className="flex flex-row items-center gap-12">
          {/* ── Kolom Kiri: Teks ── */}
          <div className="flex flex-col gap-6 flex-1">
            <div className="flex flex-col gap-0">
              <Typography
                variant="h4"
                font="merriweather"
                weight="bold"
                italic
                isStroke
                strokeColor="white"
                strokeValue="2"
                isGradient
                gradientPreset="pastel-vertical"
                shadow="sm"
                shadowColor="#00000040"
              >
                Kenali
              </Typography>

              {/* HMSI ITS dalam satu baris dengan 2 font berbeda */}
              <div className="flex flex-row items-baseline gap-2 -mt-5">
                <Typography
                  as="span"
                  variant="h2"
                  font="merriweather"
                  weight="bold"
                  italic
                  isStroke
                  strokeColor="white"
                  strokeValue="4"
                  isGradient
                  gradientPreset="blue-vertical"
                  shadow="sm"
                  shadowColor="#00000040"
                >
                  HMSI
                </Typography>
                <Typography
                  as="span"
                  variant="h2"
                  font="coolvetica"
                  italic
                  isStroke
                  strokeColor="white"
                  strokeValue="4"
                  isGradient
                  gradientPreset="blue-vertical"
                  shadow="sm"
                  shadowColor="#00000040"
                >
                  ITS
                </Typography>
              </div>
            </div>

            {/* Deskripsi */}
            <Typography
              variant="body-large"
              font="body"
              color="neutral-600"
              align="justify"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </div>

          {/* ── Kolom Kanan: Logo ── */}
          <div className="flex items-center justify-center flex-1">
            <NextImage
              src="/images/logo-hmsi.png"
              alt="Logo HMSI ITS"
              ratio="1/1"
              rounded="xl"
              wrapperClassName="w-[383px] h-[383px]"
              showSkeleton={true}
            />
          </div>
        </div>
      </TypographyContainer>
    </section>
  );
}
