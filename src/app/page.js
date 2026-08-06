import Calculator from "@/components/sections/calculator";
import ContactPage from "@/components/sections/contact-page";
import ContactPreview from "@/components/sections/contact-preview";
import Hero from "@/components/sections/Hero";
import MobileApp from "@/components/sections/mobile-app";
import Services from "@/components/sections/services";
import TrustStrip from "@/components/sections/trust-strip";

export const metadata = {
  title: {
    absolute: "Azərbaycan Mikro Kredit — İstehlak krediti, lombard və lizinq",
  },
  description:
    "İstehlak krediti, qızıl lombardı və maşın lizinqi. Onlayn kredit kalkulyatoru ilə aylıq ödənişinizi hesablayın.",
  alternates: { canonical: "/" },
};
export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <MobileApp />
      <Calculator />
      <ContactPreview />
    </>
  );
}
