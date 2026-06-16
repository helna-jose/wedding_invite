import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import GrainOverlay from "@/components/GrainOverlay";
import FloatingDecorations from "@/components/FloatingDecorations";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Hency & Joyal · The Wedding Invitation",
  description: "Join us in celebrating the wedding of Hency and Joyal on July 08, 2026, at Nithya Sahaya Matha Church Adat, Thrissur. Kindly RSVP before June 1, 2026.",
  keywords: ["Hency and Joyal", "Wedding Invitation", "Nithya Sahaya Matha Church", "Adat Thrissur Wedding", "July 8 2026"],
  authors: [{ name: "Hency & Joyal" }],
  openGraph: {
    title: "Hency & Joyal · The Wedding Invitation",
    description: "Join us in celebrating our wedding on July 08, 2026, at Nithya Sahaya Matha Church Adat, Thrissur.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased font-sans scroll-smooth`}
    >
      <body className="min-h-full bg-paper text-espresso selection:bg-gold/20 relative">
        <GrainOverlay />
        <FloatingDecorations />
        {children}
      </body>
    </html>
  );
}
