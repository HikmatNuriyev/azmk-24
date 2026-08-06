import ProductsPage from "@/components/sections/products-page";

export const metadata = {
  title: "Məhsullarımız",
  description:
    "İstehlak krediti, lombard krediti və avtolizinq məhsulları haqqında məlumat.",
   alternates: { canonical: "/mehsullar" },
};

export default function Products() {
  return <ProductsPage />;
}