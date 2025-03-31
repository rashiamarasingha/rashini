import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Urbanist } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});
const inter = Inter({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});
const lufga = localFont({
  src: [
    {
      path: "../public/fonts/lufga/LufgaExtraLight.ttf",
      style: "normal",
    },
    {
      path: "../public/fonts/lufga/LufgaLight.ttf",
      style: "normal",
    },
  ],
  variable: "--font-lufga",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rashini Kaveesha Portfolio",
  description: "I am a UI/UX and Graphic Designer with 2 years of experience in creating user-centric digital experiences.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} ${lufga.variable}  ${inter.variable} antialiased w-full`}
      >
        {children}
      </body>
    </html>
  );
}