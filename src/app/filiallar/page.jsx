import BranchesPage from "@/components/sections/branches-page";

export const metadata = {
  title: "Filiallar",
  description: "Azərbaycan Mikro Kredit filiallarının ünvanları.",
   alternates: { canonical: "/filiallar" },
};

export default function Branches() {
  return <BranchesPage />;
}