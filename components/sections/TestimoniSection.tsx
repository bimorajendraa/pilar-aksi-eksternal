import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";
import NextImage from "@/components/ui/NextImage";

const testimoni = [
  {
    id: 1,
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    nama: "Nama Orang",
    angkatan: "Nama Angkatan",
    jabatan: "Jabatan HMSI",
  },
  {
    id: 2,
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    nama: "Nama Orang",
    angkatan: "Nama Angkatan",
    jabatan: "Jabatan HMSI",
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
        <div className="grid grid-cols-2 gap-12">
          {testimoni.map((item) => (
            <div key={item.id} className="flex flex-col gap-6">
              {/* Isi testimoni */}
              <Typography
                variant="body-large"
                font="body"
                color="neutral-600"
                align="justify"
              >
                {item.isi}
              </Typography>

              {/* Avatar + Identitas */}
              <div className="flex flex-row items-center gap-4">
                {/* Foto avatar */}
                <NextImage
                  src={`/images/testimoni-${item.id}.jpg`}
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
