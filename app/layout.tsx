import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GridPattern } from "../src/components/grid-pattern";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spikes - Bienvenue !",
  description: "Un challenge proposé par Spikes. intégré par @magnenatg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Cet import permet d'utiliser la police Aeonik Pro Medium */}
        <link
          href="https://db.onlinewebfonts.com/c/81c9cfcec66a1bb46e90e184f4d04641?family=Aeonik+Pro+Medium"
          rel="stylesheet"
        ></link>
      </head>
      <body className={`${inter.className} antialiased bg-background`}>
        <div className="absolute min-h-screen h-full inset-0 flex flex-col justify-between -z-10">
          <GridPattern
            className="rotate-180 w-full"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-hidden="true"
          />
          <GridPattern
            className="w-full"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-hidden="true"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
