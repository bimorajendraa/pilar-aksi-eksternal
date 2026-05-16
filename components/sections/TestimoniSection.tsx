import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import NextImage from "@/components/ui/NextImage";

const testimoni = [
  {
    id: 1,
    isi: "Ketika di HMSI aku tidak hanya belajar manajemen waktu, pikiran, dan tenaga, tapi belajar berpikir dan meningkatkan kesadaran. Bagiku HMSI seperti machine learning, aku belajar menentukan tujuan, menganalisis kondisi (EDA), berpikir kritis (Preprocessing), membentuk arah pengembangan (Modelling), dan evaluasi (Model Evaluation). Dampak ikut HMSI itu berkelanjutan, karena yang dilatih adalah sistem dan pola berpikir. Dari pengalamanku hal itu sangat membantu ketika aku lanjut S2 dengan orang-orang baru, bagaimana berinteraksi dengan lingkungan baru, dan tentunya penyesuaian cara belajar efektif.",
    nama: "Arkaan Hilmi Suharsoyo",
    angkatan: "Nischaverta",
    jabatan: "Head of HMSI - Kabinet Niskalarasi",
  },
  {
    id: 2,
    isi: "Bergabung dengan HMSI adalah salah satu keputusan terbaik dalam hidup saya karena di sana saya tidak hanya melatih soft skill, tetapi juga mengasah cognitive skill yang sangat krusial. Cognitive skill ini adalah ilmu mahal yang membedakan cara kerja level staf operasional dengan level strategis, di mana kemampuannya tidak bisa sekadar dipelajari lewat teori melainkan butuh jam terbang nyata.\nHMSI menjadi playground bagi saya untuk implemengasi cognitive skill yang saya pelajari di buku-buku, sebelum benar-benar terjun ke dunia profesional yang penuh tekanan.",
    nama: "Hatta Bagus Himawan",
    angkatan: "Anonims",
    jabatan: "2006",
  },
];

export default function TestimoniSection() {
  return (
    <section className="relative w-full bg-white">
      <TypographyContainer
        as="div"
        maxWidth="xl"
        paddingX="md"
        paddingY="lg"
        className="relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-3 md:px-0">
          {testimoni.map((item) => (
            <div key={item.id} className="flex flex-col gap-6">
              {/* Isi testimoni */}
              <div className="flex flex-col gap-0">
                {item.isi.split("\n").map((paragraf, index) => (
                  <Typography
                    key={index}
                    variant="body-large"
                    font="body"
                    color="neutral-600"
                    align="justify"
                  >
                    {paragraf}
                  </Typography>
                ))}
              </div>

              {/* Avatar + Identitas */}
              <div className="flex flex-row items-center gap-4">
                {/* Foto avatar */}
                <NextImage
                  src={`/images/testimoni-${item.id}.webp`}
                  alt={item.nama}
                  ratio="1/1"
                  rounded="full"
                  wrapperClassName="w-12 h-12 flex-shrink-0"
                  showSkeleton={true}
                />

                {/* Nama + Angkatan - Jabatan */}
                <div className="flex flex-col">
                  <Typography
                    variant="body-small"
                    font="body"
                    weight="bold"
                    color="neutral-600"
                  >
                    - {item.nama}
                  </Typography>
                  <Typography
                    variant="body-small"
                    font="body"
                    color="neutral-600"
                  >
                    {item.angkatan} - {item.jabatan}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TypographyContainer>
    </section>
  );
}
