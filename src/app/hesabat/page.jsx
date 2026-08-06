import ReportsPage from "@/components/sections/reports-page";

export const metadata = {
  title: "Audit Hesabatları",
  description: "Azərbaycan Mikro Kredit audit hesabatları və maliyyə sənədləri.",
   alternates: { canonical: "/hesabat" },
};

export default function Reports() {
  return <ReportsPage />;
}