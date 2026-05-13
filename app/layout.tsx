import type { Metadata, Viewport } from "next";
import SkipToContent from "@/components/SkipToContent";
import { binance } from "@/lib/theme";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const pageTitle = "Alquimia — Presentaciones";
const pageDescription = "Galería de presentaciones de Alquimia.";

export const metadata: Metadata = {
  title: {
    default: pageTitle,
    template: "%s — Alquimia",
  },
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export const viewport: Viewport = {
  themeColor: binance.dark,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased dark`}
    >
      <body className="min-h-full bg-binance-dark text-white [-webkit-tap-highlight-color:rgba(240,185,11,0.2)]">
        <SkipToContent />
        {children}
      </body>
    </html>
  );
}
