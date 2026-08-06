import ManagementPage from "@/components/sections/management-page";

export const metadata = {
  title: "Rəhbərlik",
  description:
    "Azərbaycan Mikro Kredit rəhbərliyi və idarə heyəti.",
     alternates: { canonical: "/rehberlik" },
};

export default function Management() {
  return <ManagementPage />;
}