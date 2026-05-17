// app/Departemen/page.tsx
import * as React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import DepartemenContent from "./DepartemenContent";

export default function DepartemenPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <img
        src="/images/bg-kotak.webp"
        alt=""
        aria-hidden
        className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ mixBlendMode: "multiply" }}
      />
      <React.Suspense fallback={<div className="min-h-screen" />}>
        <DepartemenContent />
      </React.Suspense>
      <Footer />
    </main>
  );
}
