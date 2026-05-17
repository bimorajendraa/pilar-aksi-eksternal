import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import NextImage from "@/components/ui/NextImage";
import Card from "@/components/ui/Card";

export default function KabinetSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute left-[-450] top-[-180] -translate-y-1/2 z-0 w-860 opacity-60">
        <NextImage
          src="/images/Pillar-3.svg"
          alt="dekorasi"
          width={860}
          height={1491}
          wrapperClassName="absolute"
        />
      </div>
      <div className="absolute left-250 top-10 -translate-y-1/2 z-0 w-860 opacity-80 rotate-3">
        <NextImage
          src="/images/Pillar-3.svg"
          alt="dekorasi"
          width={860}
          height={1491}
          wrapperClassName="absolute"
        />
      </div>
      <TypographyContainer
        as="div"
        maxWidth="xl"
        paddingX="md"
        paddingY="sm"
        className="relative z-10"
      >
        {/* ── Bagian Atas: Logo + Deskripsi ── */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12 mt-6">
          {/* Kolom Kiri: Logo Kabinet Pilar Aksi */}
          <div className="flex items-center justify-center flex-1">
            <NextImage
              src="/images/logo-kabinet.svg"
              alt="Kabinet Pilar Aksi"
              width={408}
              height={123}
              wrapperClassName="w-[270px] h-[130px] md:w-[408px] md:h-[123px]"
              showSkeleton={true}
            />
          </div>

          {/* Kolom Kanan: Deskripsi */}
          <div className="flex-1 -mt-12 md:mt-0 px-4 md:px-0">
            <Typography
              variant="body-large"
              font="body"
              color="neutral-600"
              align="justify"
              className="!text-[14px] md:!text-[18px]"
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
        </div>
      </TypographyContainer>

      {/* ── Bagian Bawah: Card Visi & Misi ── */}
      <div className="px-2 md:px-6 lg:px-8 pb-8 -mt-13 md:-mt-8 relative z-10">
        <div className="mx-auto max-w-[99%] md:max-w-[90%] rounded-[56px] p-[6px] bg-gradient-to-br from-blue-dark-300 to-blue-light-300">
          <div className="bg-white rounded-[56px] p-4 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              {/* Visi */}
              <div className="flex flex-col gap-2 md:gap-6 md:flex-[2] items-center">
                <Typography
                  variant="h3"
                  font="coolvetica"
                  italic
                  align="center"
                  isGradient
                  gradientPreset="blue-vertical"
                  isStroke
                  strokeValue="3"
                  strokeColor="white"
                  shadow="sm"
                  shadowColor="#00000040"
                >
                  Visi
                </Typography>
                <Typography
                  variant="body-large"
                  font="body"
                  color="neutral-600"
                  align="center"
                  className="md:text-left !text-[14px] md:!text-[18px]"
                >
                  Mewujudkan HMSI Sebagai <strong>Katalisator</strong>{" "}
                  pergerakan yang <strong>Adaptif dan Beradampak</strong> dalam
                  Harmoni <strong>Kekeluargaan</strong> melalui{" "}
                  <strong>Optimalisasi</strong> Program Kerja.
                </Typography>
              </div>

              {/* Misi */}
              <div className="flex flex-col gap-2 md:gap-6 flex-[3] items-center">
                <Typography
                  variant="h3"
                  font="coolvetica"
                  italic
                  align="center"
                  isGradient
                  gradientPreset="blue-vertical"
                  isStroke
                  strokeValue="3"
                  strokeColor="white"
                  shadow="sm"
                  shadowColor="#00000040"
                >
                  Misi
                </Typography>
                <ol className="flex flex-col gap-4 list-none">
                  {[
                    "Menyelaraskan arah gerak himpunan agar senantiasa responsif dalam menghadapi dinamika kebutuhan warga, kebijakan kampus, serta perkembangan industri.",
                    "Melakukan evaluasi dan penajaman program kerja guna menjamin keseimbangan beban kerja serta efektivitas penggunaan sumber daya organisasi.",
                    "Memastikan setiap kebijakan dan kegiatan organisasi memberikan nilai tambah serta kontribusi positif yang dapat dirasakan langsung oleh seluruh warga.",
                    "Menciptakan lingkungan organisasi yang suportif dan nyaman untuk menjaga stabilitas internal, kesehatan mental fungsionaris, serta rasa memiliki anggota.",
                  ].map((misi, index) => (
                    <li key={index} className="flex flex-row gap-3">
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
                        as="span"
                        variant="body-large"
                        font="body"
                        color="neutral-600"
                        align="left"
                        className="!text-[14px] md:!text-[18px]"
                      >
                        {misi}
                      </Typography>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
