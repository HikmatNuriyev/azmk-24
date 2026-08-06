// // src/data/campaigns.js
// const campaigns = [
//   {
//     id: "denizcilerin-peshe-bayrami",
//     title: "Dənizçilərin Peşə Bayramına özəl -3% endirim",
//     caption: "Dənizçilər üçün xüsusi şərtlərlə kredit təklifi.",
//     image: "/images/kampaniya1.jpg",
//     imageAlt:
//       "Dənizçilərin Peşə Bayramına özəl 3 faiz endirim kampaniyasının afişası",
//     href: "/kampaniyalar/denizcilerin-peshe-bayrami",
//     endsAt: "2026-09-01",
//   },
// ];

// export async function getCampaigns() {
//   const now = new Date();
//   return campaigns.filter((c) => !c.endsAt || new Date(c.endsAt) > now);
// }
// src/data/campaigns.js
const items = [
  {
    id: "denizciler-2026",
    title: "Dənizçilərin Peşə Bayramına özəl -3% endirim",
    caption: "Dənizçilər üçün xüsusi şərtlərlə kredit təklifi.",
    image: "/images/kampaniya1.jpg",
    imageAlt:
      "Dənizdə lövbər təsviri, Dənizçilərin Peşə Bayramına özəl 3 faiz endirim elanı",
    href: "/kampaniyalar/denizciler-2026",
    endsAt: "2026-09-01",
  },
  {
    id: "aviasiya-2026",
    title: "Aviasiya işçilərinə özəl -3% endirim",
    caption:
      "Mülki Aviasiya İşçilərinin Peşə Bayramına özəl kredit təklifi.",
    image: "/images/kampaniya2.jpg",
    imageAlt:
      "Buludlar üzərində uçan təyyarə, aviasiya işçilərinə özəl 3 faiz endirim elanı",
    href: "/kampaniyalar/aviasiya-2026",
    endsAt: "2026-09-15",
  },
{
    id: "silahli-quvveler-2026",
    title: "26 iyun — Azərbaycan Respublikasının Silahlı Qüvvələri Günü",
    caption: "Bayram təbriki.",
    image: "/images/kampaniya4.jpg",
    imageAlt:
      "Səmada üçbucaq düzülüşündə uçan hərbi təyyarələr, arxalarında Azərbaycan bayrağının rənglərində tüstü izləri; 26 iyun Silahlı Qüvvələri Günü təbriki",
      href: "/kampaniyalar/aviasiya-2026",
  },
];

export async function getCampaigns() {
  return items.slice(0, 3);
}