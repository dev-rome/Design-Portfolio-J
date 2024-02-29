import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Design",
  description: "John's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#212529] text-[#f8f9fa]`}>
        <main>
          <div className="grid grid-cols-4 lg:grid-cols-12 px-4">
          {children}
          </div>
          </main>
      </body>
    </html>
  );
}
