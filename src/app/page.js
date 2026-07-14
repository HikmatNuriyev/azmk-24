import Calculator from "@/components/sections/calculator";
import ContactPreview from "@/components/sections/contact-preview";
import Hero from "@/components/sections/Hero";
import MobileApp from "@/components/sections/mobile-app";
import Services from "@/components/sections/services";


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <MobileApp />
      <Calculator/>
      <ContactPreview />
    </>
  );
}