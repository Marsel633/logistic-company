import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./global.scss";
import { Footer, Header } from "@/components";

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
          <main>{children}</main>
          <Footer />
        </body>
      </html>
  );
}
