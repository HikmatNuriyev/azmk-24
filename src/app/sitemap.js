export default function sitemap() {
  const baseUrl = "https://azmk.az";

  return [
    "",
    "/about",
    "/mehsullar",
    "/filiallar",
    "/hesabat",
    "/muraciet",
    "/elaqe",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
