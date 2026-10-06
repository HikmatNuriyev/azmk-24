
const items = [
  {
    id: "denizciler-2026",
    title: "Prokurorluq işçilərinin Peşə Bayramına özəl -3% endirim",
    caption: "Peşə bayramınız mübarək!",
    image: "/images/kampaniya5.png",
    imageAlt:
      "Dənizdə lövbər təsviri, Dənizçilərin Peşə Bayramına özəl 3 faiz endirim elanı",
    href: "/kampaniyalar/denizciler-2026",
    endsAt: "2026-09-01",
  },
  {
    id: "aviasiya-2026",
    title: "Filiala gəlmək üçün vaxt itirməyə gərək yoxdur!",
    caption:
      "Sizə uyğun kredit imkanını öyrənmək üçün indi müraciət edin!",
    image: "/images/kampaniya6.jpeg",
    imageAlt:
      "Buludlar üzərində uçan təyyarə, aviasiya işçilərinə özəl 3 faiz endirim elanı",
    href: "/kampaniyalar/aviasiya-2026",
    endsAt: "2026-09-15",
  },
{
    id: "silahli-quvveler-2026",
    title: "Neftçilər gününə özəl -3% endirim",
    caption: "Enerjimizi sizdən alırıq!",
    image: "/images/kampaniya7.jpeg",
    imageAlt:
      "Səmada üçbucaq düzülüşündə uçan hərbi təyyarələr, arxalarında Azərbaycan bayrağının rənglərində tüstü izləri; 26 iyun Silahlı Qüvvələri Günü təbriki",
      href: "/kampaniyalar/aviasiya-2026",
  },
];

export async function getCampaigns() {
  return items.slice(0, 3);
}