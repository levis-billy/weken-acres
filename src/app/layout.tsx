import type { Metadata } from "next";
import { IBM_Plex_Sans, Spectral } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Weken Acres Properties & Consultancy | Sectional Property Registration",
  description:
    "We work alongside property developers across Kenya to prepare sectional plans, coordinate survey and subdivision, and secure title registration under the Sectional Properties Act, 2020.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${spectral.variable} antialiased`}
    >
      <body className="bg-[#FAF8F4] text-[#16202B] font-sans">{children}</body>
    </html>
  );
}
