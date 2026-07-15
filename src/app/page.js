import Calculator from "@/components/sections/calculator";
import ContactPreview from "@/components/sections/contact-preview";
import Hero from "@/components/sections/Hero";
import MobileApp from "@/components/sections/mobile-app";
import Services from "@/components/sections/services";
import TrustStrip from "@/components/sections/trust-strip";


export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <MobileApp />
      <Calculator/>
      <ContactPreview />
    </>
  );
}
