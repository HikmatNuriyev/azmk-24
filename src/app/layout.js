import { branchesData } from "@/components/sections/branches-page/branchesData";
import { Geist, Geist_Mono, IBM_Plex_Sans } from "next/font/google";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import "@/styles/globals.scss";

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

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://azmk.az";

export const metadata = {
  metadataBase: new URL(SITE_URL),

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

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Azərbaycan Mikro Kredit",
    description:
      "Kredit və lizinq xidmətləri üçün etibarlı maliyyə tərəfdaşınız.",
    url: "/",
    siteName: "Azərbaycan Mikro Kredit",
    locale: "az_AZ",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Azərbaycan Mikro Kredit",
    description:
      "Kredit və lizinq xidmətləri üçün etibarlı maliyyə tərəfdaşınız.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": `${SITE_URL}/#organization`,
  name: "Azərbaycan Mikro Kredit",
  alternateName: "AZMK",
  url: SITE_URL,
  logo: `${SITE_URL}/Logonext.webp`,
  telephone: "+994512308664",
  email: "info@azmk.az",
  areaServed: { "@type": "Country", name: "Azərbaycan" },
  availableLanguage: "az",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nizami Gəncəvi küçəsi 68",
    addressLocality: "Bakı",
    postalCode: "1005",
    addressCountry: "AZ",
  },
  department: branchesData.map((branch) => ({
    "@type": "FinancialService",
    name: branch.title,
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.address,
      addressCountry: "AZ",
    },
  })),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="az"
      className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSans.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}