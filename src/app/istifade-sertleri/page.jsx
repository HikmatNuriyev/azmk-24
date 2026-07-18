import Link from "next/link";

import InformationPage, {
  InformationNotice,
  InformationSection,
} from "@/components/sections/information-page";

export const metadata = {
  title: "İstifadə şərtləri",
  description:
    "AZMK saytının istifadəsi, məlumatların informativ xarakteri, kalkulyator nəticələri və xarici keçidlər barədə ümumi şərtlər.",
};

const updatedAt = {
  iso: "2026-07-18",
  label: "18 iyul 2026",
};

export default function TermsOfUsePage() {
  return (
    <InformationPage
      title="İstifadə şərtləri"
      intro="Bu şərtlər AZMK saytındakı ümumi məlumatlardan, kalkulyatordan və keçidlərdən istifadə barədə əsas izahları təqdim edir."
      updatedAt={updatedAt}
    >
      <InformationNotice title="Maliyyə məlumatları haqqında qeyd" variant="warning">
        Kalkulyator nəticələri və saytdakı məhsul məlumatları təxmini və
        məlumat xarakterlidir. Onlar avtomatik kredit təklifi, təsdiq və ya
        bağlayıcı müqavilə şərti yaratmır.
      </InformationNotice>

      <InformationSection id="website-use" title="Saytdan istifadə">
        <p>
          Saytdan AZMK məhsulları, filialları və əlaqə vasitələri haqqında
          ümumi məlumat almaq üçün istifadə edə bilərsiniz. Saytın
          funksiyalarından qanuni və təhlükəsiz şəkildə istifadə olunmalıdır.
        </p>
      </InformationSection>

      <InformationSection id="information-nature" title="Məlumatların xarakteri">
        <p>
          Saytda təqdim olunan mətn, rəqəm və izahlar ümumi məlumatlandırma
          məqsədi daşıyır. Məhsul şərtləri və mövcudluq barədə cari məlumatı
          <Link href="/elaqe"> rəsmi əlaqə kanalları</Link> vasitəsilə
          dəqiqləşdirin.
        </p>
      </InformationSection>

      <InformationSection
        id="financial-information"
        title="Maliyyə məlumatları haqqında xəbərdarlıq"
      >
        <p>
          Kalkulyator nəticəsi daxil edilən məbləğ, müddət və faiz göstəricisi
          əsasında hesablanan təxmini nəticədir. Yekun şərtlər yalnız müraciət
          qiymətləndirildikdən və müvafiq sənədlər rəsmiləşdirildikdən sonra
          müəyyən edilə bilər.
        </p>
      </InformationSection>

      <InformationSection id="user-responsibility" title="İstifadəçi məsuliyyəti">
        <ul>
          <li>Daxil etdiyiniz məlumatların düzgünlüyünü yoxlayın.</li>
          <li>Şifrə və təsdiq kodu kimi həssas məlumatları paylaşmayın.</li>
          <li>Şübhəli keçid və hesabları rəsmi kanallarla dəqiqləşdirin.</li>
          <li>Yekun maliyyə qərarını təxmini sayt nəticəsinə əsaslandırmayın.</li>
        </ul>
      </InformationSection>

      <InformationSection id="intellectual-property" title="Əqli mülkiyyət">
        <p>
          Saytdakı mətn, vizual material, loqo və digər məzmundan kommersiya
          məqsədilə istifadə etməzdən əvvəl AZMK ilə rəsmi qaydada əlaqə
          saxlayın. Tətbiq olunan hüquqların dəqiq mətni hüquqi baxış zamanı
          təsdiqlənməlidir.
        </p>
      </InformationSection>

      <InformationSection id="external-links" title="Xarici keçidlər">
        <p>
          Sayt WhatsApp və Google Xəritələr kimi üçüncü tərəf resurslarına
          keçid verə bilər. Həmin resurslardan istifadə zamanı onların öz
          istifadə və məxfilik qaydaları ayrıca tətbiq oluna bilər.
        </p>
      </InformationSection>

      <InformationSection id="responsibility" title="Məsuliyyət haqqında qeyd">
        <p>
          Saytdakı ümumi məlumat yekun maliyyə qiymətləndirilməsini və rəsmi
          sənədləri əvəz etmir. Dəqiq məhsul şərtləri üçün
          <Link href="/mehsullar"> Məhsullar səhifəsinə</Link> baxın və AZMK
          ilə rəsmi kanallardan əlaqə saxlayın.
        </p>
      </InformationSection>

      <InformationSection id="changes" title="Şərtlərə dəyişikliklər">
        <p>
          Saytın funksiyaları və təsdiqlənmiş hüquqi mətn dəyişdikdə bu
          şərtlər yenilənə bilər. Cari versiyanın tarixi səhifənin yuxarı
          hissəsində göstərilir.
        </p>
      </InformationSection>

      <InformationSection id="contact" title="Əlaqə">
        <p>
          Bu şərtlər və saytdakı məlumatlar barədə suallar üçün
          <Link href="/elaqe"> Əlaqə səhifəsindəki</Link> rəsmi telefon,
          WhatsApp və e-poçt vasitələrindən istifadə edin.
        </p>
      </InformationSection>

      {/* LEGAL REVIEW: Confirm intellectual-property, liability, jurisdiction,
          amendment, and contractual wording before production. */}
    </InformationPage>
  );
}
