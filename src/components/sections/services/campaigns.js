const API_URL = (process.env.API_URL || "http://localhost:4000").replace(/\/+$/, "");
const REVALIDATE_SECONDS = 60;

const fetchOptions =
  process.env.NODE_ENV === "development"
    ? { cache: "no-store" }
    : { next: { revalidate: REVALIDATE_SECONDS } };

export async function getCampaigns() {
  try {
    const res = await fetch(`${API_URL}/api/campaigns`, fetchOptions);
    if (!res.ok) throw new Error(`API ${res.status}`);

    const data = await res.json();

    return data.map((c) => ({
      id: c.id,
      title: c.title,
      caption: c.caption,
      image: c.imageUrl,
      imageAlt: c.imageAlt || c.title,
      href: c.link,
    }));
  } catch (err) {
    console.error("Kampaniyalar yüklənmədi:", err.message);

    const isBuild = process.env.NEXT_PHASE === "phase-production-build";
    if (process.env.NODE_ENV === "production" && !isBuild) throw err;
    return [];
  }
}
