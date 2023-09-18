import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import localFont from "next/font/local";

// Font files can be colocated inside of `app`

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-backgroundWhite font-bold">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
