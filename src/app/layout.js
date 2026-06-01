
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/layout/header";

import "@/styles/globals.scss";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Azərbaycan Mikro Kredit",
    template: "%s | Azərbaycan Mikro Kredit",
  },

  description:
    "Azərbaycan Mikro Kredit istehlak krediti, qızıl lombardı və maşın lizinqi xidmətləri təqdim edir.",

  keywords: [
    "Azərbaycan Mikro Kredit",
    "istehlak krediti",
    "qızıl lombardı",
    "maşın lizinqi",
    "BOKT",
    "kredit",
    "lizinq",
  ],

  openGraph: {
    title: "Azərbaycan Mikro Kredit",

    description:
      "Kredit və lizinq xidmətləri üçün etibarlı maliyyə tərəfdaşınız.",

    siteName: "Azərbaycan Mikro Kredit",

    locale: "az_AZ",

    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="az"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <Header />

        <main>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}