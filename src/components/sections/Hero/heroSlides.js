import { productsData } from "@/components/sections/products-page/productsData";
import { servicesData } from "@/components/sections/services/servicesData";

export const HERO_ROUTES = Object.freeze({
  campaign: null,
  products: "/mehsullar",
});

const productDescriptions = Object.fromEntries(
  servicesData.map((service) => [service.title, service.description]),
);

export const heroSlideConfig = [
  {
    id: "sample-campaign",
    type: "campaign",
    enabled: false,
    contentStatus: "placeholder",
    eyebrow: "Xüsusi kampaniya",
    title: "Yeni kampaniya məlumatı",
    description:
      "kampaniya məzmunu və şərtləri.",
    href: HERO_ROUTES.campaign,
    ctaLabel: "Kampaniya ilə tanış ol",
    image: "/images/Logonext.webp",
    imageAlt: "Azərbaycan Mikro-Kredit loqosu",
    productReference: null,
  },
  {
    id: "consumer-loan",
    type: "product",
    enabled: true,
    eyebrow: "Gündəlik ehtiyaclar üçün maliyyə",
    title: "İstehlak Krediti",
    description: productDescriptions["İstehlak Krediti"],
    href: HERO_ROUTES.products,
    ctaLabel: "Şərtlərə bax",
    image: "/images/istehlak.webp",
    imageAlt: "İstehlak Krediti məhsulu üçün illüstrasiya",
    productReference: "İstehlak Krediti",
  },

  {
    id: "car-leasing",
    type: "product",
    enabled: true,
    eyebrow: "Avtomobil maliyyələşdirilməsi",
    title: "AvtoLizinq",
    description: productDescriptions["AvtoLizinq"],
    href: HERO_ROUTES.products,
    ctaLabel: "Şərtlərə bax",
    image: "/images/avto.webp",
    imageAlt: "AvtoLizinq məhsulu üçün illüstrasiya",
    productReference: "AvtoLizinq",
  },
  {
    id: "gold-loan",
    type: "product",
    enabled: true,
    eyebrow: "Qızıl girovu ilə maliyyə",
    title: "Qızıl Lombardı",
    description: productDescriptions["Qızıl Lombardı"],
    href: HERO_ROUTES.products,
    ctaLabel: "Şərtlərə bax",
    image: "/images/qizil.webp",
    imageAlt: "Qızıl Lombardı məhsulu üçün illüstrasiya",
    productReference: "Lombard Krediti",
  },
];

const productsByTitle = new Map(
  productsData.map((product) => [product.title, product]),
);

export function getEnabledHeroSlides() {
  return heroSlideConfig
    .filter((slide) => {
      if (!slide.enabled) return false;

      if (!slide.href) {
        throw new Error(`Aktiv Hero slaydı üçün real marşrut yoxdur: ${slide.id}`);
      }

      return true;
    })
    .map((slide) => {
      if (!slide.productReference) {
        return {
          ...slide,
          facts: [],
        };
      }

      const product = productsByTitle.get(slide.productReference);

      if (!product) {
        throw new Error(
          `Hero məhsul məlumatı tapılmadı: ${slide.productReference}`,
        );
      }

      return {
        ...slide,
        facts: [
          { label: "Məbləğ", value: product.amount },
          { label: "Müddət", value: product.duration },
          { label: "Faiz", value: product.rate },
        ],
      };
    });
}
