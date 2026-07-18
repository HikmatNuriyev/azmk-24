import InformationPage, {
  FaqAccordion,
  InformationNotice,
} from "@/components/sections/information-page";

export const metadata = {
  title: "Tez-tez verilən suallar",
  description:
    "AZMK məhsulları, kalkulyator, müraciət, filiallar və əlaqə vasitələri haqqında tez-tez verilən suallar.",
};

const faqGroups = [
  {
    title: "Kredit və lizinq məhsulları",
    items: [
      {
        question: "AZMK hansı məhsulları təqdim edir?",
        answer:
          "Saytda İstehlak Krediti, Qızıl Lombardı və Maşın Lizinqi (AvtoLizinq) məhsulları təqdim olunur.",
        link: {
          href: "/mehsullar",
          label: "Məhsullara bax",
        },
      },
      {
        question:
          "Məhsullar haqqında ətraflı məlumatı haradan əldə edə bilərəm?",
        answer:
          "Məbləğ, müddət və saytda göstərilən digər məhsul məlumatları Məhsullar səhifəsində yerləşdirilib. Yekun şərtləri rəsmi əlaqə kanalları vasitəsilə dəqiqləşdirin.",
        link: {
          href: "/mehsullar",
          label: "Məhsul məlumatlarını aç",
        },
      },
      {
        question: "Kredit kalkulyatorunun nəticəsi yekun təklifdirmi?",
        answer:
          "Xeyr. Kalkulyator nəticələri məlumat xarakterli təxmini hesablamalardır. Yekun şərtlər müraciət qiymətləndirildikdən sonra müəyyən edilir.",
      },
    ],
  },
  {
    title: "Müraciət prosesi",
    items: [
      {
        question: "Onlayn müraciət bölməsinə necə keçmək olar?",
        answer:
          "Saytdakı Onlayn müraciət keçidi vasitəsilə müraciət səhifəsinə keçə bilərsiniz. Formanın təqdim edilməsi avtomatik kredit təsdiqi demək deyil.",
        link: {
          href: "/muraciet",
          label: "Onlayn müraciət səhifəsinə keç",
        },
      },
      {
        question: "Müraciət üzrə yekun şərtlər nə vaxt məlum olur?",
        answer:
          "Saytda dəqiq baxılma müddəti göstərilmir. Yekun şərtlər müraciətin qiymətləndirilməsindən sonra müəyyən edilir; cari məlumat üçün AZMK ilə rəsmi kanallardan əlaqə saxlayın.",
        link: {
          href: "/elaqe",
          label: "Əlaqə vasitələrinə bax",
        },
      },
    ],
  },
  {
    title: "Filial və əlaqə",
    items: [
      {
        question: "Filialların ünvanlarını haradan görə bilərəm?",
        answer:
          "Mövcud filialların ünvanları və xəritə keçidləri Filiallar səhifəsində təqdim olunur.",
        link: {
          href: "/filiallar",
          label: "Filiallara bax",
        },
      },
      {
        question: "İş saatları neçədir?",
        answer: `AZMK filialları aşağıdakı iş qrafiki ilə fəaliyyət göstərir:

Bazar ertəsi – Cümə: 09:00 – 18:00
Şənbə: 10:00 – 14:00
Bazar: İş günü deyil.

Rəsmi bayram günlərində iş qrafikində dəyişiklik ola bilər. Ən aktual məlumat üçün bizimlə əlaqə saxlamağınızı və ya ən yaxın filialla əlaqə saxlamağınızı tövsiyə edirik.`,
        link: {
          href: "/elaqe",
          label: "Əlaqə vasitələrinə bax",
        },
      },
      {
        question: "AZMK ilə necə əlaqə saxlamaq olar?",
        answer:
          "Müştəri dəstəyi üçün *6300 qısa nömrəsindən, +994 51 230 86 64 telefon və WhatsApp xəttindən və info@azmk.az e-poçt ünvanından istifadə edə bilərsiniz.",
        link: {
          href: "/elaqe",
          label: "Bütün əlaqə məlumatlarını aç",
        },
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <InformationPage
      title="Tez-tez verilən suallar"
      intro="AZMK məhsulları, təxmini hesablamalar, müraciət və əlaqə vasitələri barədə saytda təsdiqlənmiş məlumatlara əsaslanan qısa cavablar."
    >
      <InformationNotice title="Dəqiq məhsul şərtləri">
        Faiz, komissiya, sənəd tələbləri və qiymətləndirmə müddəti müraciətə
        görə dəyişə bilər. Saytda təsdiqlənməyən detalları rəsmi əlaqə
        kanalları ilə dəqiqləşdirin.
      </InformationNotice>

      <FaqAccordion groups={faqGroups} />
    </InformationPage>
  );
}