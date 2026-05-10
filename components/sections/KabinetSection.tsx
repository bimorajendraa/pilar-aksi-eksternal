import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import NextImage from "@/components/ui/NextImage";
import Card from "@/components/ui/Card";

export default function KabinetSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <TypographyContainer
        as="div"
        maxWidth="xl"
        paddingX="md"
        paddingY="sm"
        className="relative z-10"
      >
        {/* ── Bagian Atas: Logo + Deskripsi ── */}
        <div className="flex flex-row items-center gap-12 mb-12 mt-6">
          {/* Kolom Kiri: Logo Kabinet Pilar Aksi */}
          <div className="flex items-center justify-center flex-1">
            <NextImage
              src="/images/logo-kabinet.svg"
              alt="Kabinet Pilar Aksi"
              width={408}
              height={123}
              wrapperClassName="w-[408px] h-[123px]"
              showSkeleton={true}
            />
          </div>

          {/* Kolom Kanan: Deskripsi */}
          <div className="flex-1">
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
        </div>
      </TypographyContainer>

      {/* ── Bagian Bawah: Card Visi & Misi ── */}
      <div className="px-6 md:px-8 pb-8 -mt-8">
        <div className="mx-auto max-w-[90%] rounded-[56px] p-[6px] bg-gradient-to-br from-blue-dark-300 to-blue-light-300">
          <div className="bg-white rounded-[56px] p-8">
            <div className="flex flex-row gap-12">
              {/* Visi */}
              <div className="flex flex-col gap-6 flex-[2] items-center">
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
                  align="justify"
                >
                  Mewujudkan HMSI Sebagai <strong>Katalisator</strong>{" "}
                  pergerakan yang <strong>Adaptif dan Beradampak</strong> dalam
                  Harmoni <strong>Kekeluargaan</strong> melalui{" "}
                  <strong>Optimalisasi</strong> Program Kerja.
                </Typography>
              </div>

              {/* Misi */}
              <div className="flex flex-col gap-6 flex-[3] items-center">
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
                        className="flex-shrink-0"
                      >
                        {index + 1}.
                      </Typography>
                      <Typography
                        as="span"
                        variant="body-large"
                        font="body"
                        color="neutral-600"
                        align="justify"
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
