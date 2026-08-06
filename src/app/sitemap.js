export default function sitemap() {
  const baseUrl = "https://azmk.az";
  const lastModified = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/mehsullar", priority: 0.9, changeFrequency: "monthly" },
    { path: "/muraciet", priority: 0.9, changeFrequency: "monthly" },
    { path: "/filiallar", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" },
    { path: "/rehberlik", priority: 0.6, changeFrequency: "yearly" },
    { path: "/hesabat", priority: 0.6, changeFrequency: "monthly" },
    { path: "/elaqe", priority: 0.6, changeFrequency: "yearly" },
    { path: "/faq", priority: 0.5, changeFrequency: "monthly" },
    { path: "/tehlukesizlik", priority: 0.3, changeFrequency: "yearly" },
    { path: "/mexfilik-siyaseti", priority: 0.3, changeFrequency: "yearly" },
    { path: "/istifade-sertleri", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}