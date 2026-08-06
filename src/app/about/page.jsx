import AboutPage from "@/components/sections/about-page";

export const metadata = {
  title: "Haqqımızda",
  description: "Azərbaycan Mikro Kredit haqqında ümumi məlumat.",
   alternates: { canonical: "/about" },
};

export default function About() {
  return <AboutPage />;
}