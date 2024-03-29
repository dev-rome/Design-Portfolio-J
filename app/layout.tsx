import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import BackToTopButton from "@/components/BackToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Murillo",
  description: "John Murillo personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#000] text-[#fff]`}>
        <main>
          <div className="mx-auto grid max-w-[1280px] grid-cols-4 px-4 py-10 md:grid-cols-12">
            <Navbar />
            {children}
          </div>
          <BackToTopButton />
        </main>
      </body>
    </html>
  );
}
