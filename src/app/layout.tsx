import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TransitFlow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
