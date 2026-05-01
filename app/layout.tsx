import type { Metadata } from "next";
import { Merriweather, Reddit_Sans } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
  variable: "--font-merriweather",
});

const redditSans = Reddit_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-reddit-sans",
});

export const metadata: Metadata = {
  title: "Pilar Aksi Eksternal",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${merriweather.variable} ${redditSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
