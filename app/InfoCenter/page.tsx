import Navbar from "@/components/sections/Navbar";
import InfoCenterSection from "@/components/sections/InfoCenterSection";
import Footer from "@/components/sections/Footer";

export default function InfoCenterPage() {
  return (
    <main>
      <Navbar />
      <InfoCenterSection variant="page" />
      <Footer />
    </main>
  );
}
