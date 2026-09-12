import Link from "next/link";

import InformationPage, {
  InformationNotice,
  InformationSection,
} from "@/components/sections/information-page";

export const metadata = {
  title: "Məxfilik siyasəti",
  description:
    "AZMK saytında məlumatların daxil edilməsi, istifadəsi, xarici xidmətlər və məxfilik sorğuları barədə ümumi məlumat.",
};

const updatedAt = {
  iso: "2026-07-18",
  label: "18 iyul 2026",
};

export default function PrivacyPolicyPage() {
  return (
    <InformationPage
      title="Məxfilik siyasəti"
      intro="Bu səhifə AZMK saytında istifadəçi tərəfindən daxil edilə bilən məlumatlar və saytın mövcud funksiyaları barədə ümumi, ehtiyatlı məlumat təqdim edir."
      updatedAt={updatedAt}
    >
      <InformationNotice title="Məxfilik sorğuları">
        Şəxsi məlumatlarla bağlı sual və müraciətlər üçün AZMK-nın rəsmi
        <Link href="/elaqe"> əlaqə vasitələrindən</Link> istifadə edin.
      </InformationNotice>

      <InformationSection id="overview" title="Ümumi məlumat">
        <p>
          Məxfilik yanaşması istifadəçinin saytdan istifadə edərkən təqdim
          etdiyi məlumatlara və istifadə etdiyi xarici xidmət keçidlərinə
          aiddir. Bu səhifə müqavilə və ya fərdi hüquqi məsləhət deyil.
        </p>
      </InformationSection>

      <InformationSection id="information" title="Toplana bilən məlumatlar">
        <p>
          Saytın müraciət bölməsində istifadəçi özü əlaqə məlumatı, məhsul
          seçimi və müraciətlə bağlı digər sahələri daxil edə bilər. Yalnız
          tələb olunan və təqdim etmək istədiyiniz məlumatları daxil edin.
        </p>
        <p>
          Saytın açıq və tünd görünüş seçimi brauzerin lokal yaddaşında
          saxlanıla bilər.
        </p>
      </InformationSection>

      <InformationSection id="purposes" title="Məlumatların istifadə məqsədləri">
        <p>
          Müraciət bölməsində daxil edilən məlumatlar istifadəçinin sorğusunu
          təsvir etmək, uyğun məhsul seçimini göstərmək və əlaqə prosesini
          dəstəkləmək üçün nəzərdə tutulur. Konkret emal qaydaları təsdiqlənmiş
          daxili və hüquqi sənədlərlə müəyyən edilməlidir.
        </p>
      </InformationSection>

      <InformationSection id="protection" title="Məlumatların qorunması">
        <p>
          Saytda konkret təhlükəsizlik standartı, sertifikat və ya şifrələmə
          texnologiyası barədə iddia verilmir. Şifrə, təsdiq kodu və digər
          həssas məlumatları naməlum hesablara göndərməyin və yalnız rəsmi
          əlaqə kanallarından istifadə edin.
        </p>
      </InformationSection>

      <InformationSection id="third-parties" title="Üçüncü tərəflərlə paylaşma">
        <p>
          Saytda WhatsApp və Google Xəritələr kimi üçüncü tərəf xidmətlərinə
          keçidlər mövcuddur. Bu keçidləri açdıqda həmin xidmətlərin öz
          məxfilik qaydaları tətbiq oluna bilər.
        </p>
        <p>
          Digər məlumat mübadiləsinin şərtləri tətbiq olunan razılıq və hüquqi
          tələblər əsasında müəyyən olunmalıdır.
        </p>
      </InformationSection>

      <InformationSection id="cookies" title="Cookies və analitika">
        <p>
          Hazırkı layihədə üçüncü tərəf analitika inteqrasiyası müəyyən
          edilməyib. Görünüş mövzusu kimi lokal seçimlər brauzerin lokal
          yaddaşında saxlanıla bilər. Analitika və ya cookie funksiyaları
          dəyişərsə, bu bölmə yenilənməlidir.
        </p>
      </InformationSection>

      <InformationSection id="requests" title="İstifadəçi sorğuları">
        <p>
          Məlumatlarınızla bağlı sorğu, düzəliş və ya digər məxfilik müraciəti
          üçün <Link href="/elaqe">Əlaqə səhifəsindəki</Link> rəsmi
          vasitələrdən istifadə edin. Tətbiq olunan hüquqların dəqiq dairəsi
          hüquqi baxış zamanı təsdiqlənməlidir.
        </p>
      </InformationSection>

      <InformationSection id="changes" title="Siyasətdə dəyişikliklər">
        <p>
          Saytın funksiyaları və təsdiqlənmiş hüquqi mətn dəyişdikdə bu səhifə
          yenilənə bilər. Cari versiyanın tarixi səhifənin yuxarı hissəsində
          göstərilir.
        </p>
      </InformationSection>

      
    </InformationPage>
  );
}
