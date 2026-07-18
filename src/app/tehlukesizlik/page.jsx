import Link from "next/link";

import InformationPage, {
  InformationNotice,
  InformationSection,
} from "@/components/sections/information-page";

export const metadata = {
  title: "Təhlükəsizlik",
  description:
    "Şifrə, təsdiq kodu, şübhəli keçidlər və rəsmi AZMK əlaqə kanalları ilə bağlı təhlükəsiz davranış tövsiyələri.",
};

export default function SecurityPage() {
  return (
    <InformationPage
      title="Təhlükəsizlik"
      intro="Maliyyə xidmətlərindən və onlayn kanallardan istifadə edərkən şəxsi məlumatlarınızı qorumağa kömək edən ümumi təhlükəsizlik tövsiyələri."
    >
      <InformationNotice title="Məxfi məlumatları paylaşmayın" variant="warning">
        Şifrənizi, birdəfəlik təsdiq kodunu, bank kartının tam məlumatlarını
        və digər həssas məlumatları tanımadığınız şəxslərə göndərməyin.
      </InformationNotice>

      <InformationSection id="verification" title="Rəsmi kanalları yoxlayın">
        <p>
          AZMK adından edilən zəng və ya yazışma şübhə doğurursa, həmin
          kanala cavab vermədən əlaqəni dayandırın və məlumatı rəsmi əlaqə
          vasitələri ilə dəqiqləşdirin.
        </p>
        <ul>
          <li>Müştəri dəstəyi: *6300</li>
          <li>Telefon və WhatsApp: +994 51 230 86 64</li>
          <li>E-poçt: info@azmk.az</li>
        </ul>
        <p>
          Bütün keçidlər üçün <Link href="/elaqe">Əlaqə səhifəsindən</Link>
          {" "}istifadə edə bilərsiniz.
        </p>
      </InformationSection>

      <InformationSection id="links" title="Şübhəli keçidlərdən uzaq olun">
        <ul>
          <li>
            Gözləmədiyiniz mesajlardakı keçidləri açmazdan əvvəl göndərən
            tərəfi yoxlayın.
          </li>
          <li>
            Naməlum hesablar vasitəsilə şəxsi və maliyyə məlumatı göndərməyin.
          </li>
          <li>
            Təcili ödəniş, kod və ya məxfi məlumat tələb edən mesajlara
            ehtiyatla yanaşın.
          </li>
        </ul>
      </InformationSection>

      <InformationSection id="devices" title="Cihazınızı təhlükəsiz saxlayın">
        <ul>
          <li>Etibar etdiyiniz cihaz və şəbəkələrdən istifadə edin.</li>
          <li>Brauzeri və əməliyyat sistemini yenilənmiş saxlayın.</li>
          <li>İctimai cihazlarda şəxsi məlumatları yadda saxlamayın.</li>
          <li>İşi bitirdikdən sonra açıq hesab və səhifələri bağlayın.</li>
        </ul>
      </InformationSection>

      <InformationSection id="incident" title="Şübhəli fəaliyyət zamanı">
        <p>
          AZMK adından şübhəli zəng, mesaj və ya keçid aldıqda məlumatı
          paylaşmayın. Hadisəni və istifadə olunan əlaqə kanalını qeyd edin,
          sonra AZMK ilə <Link href="/elaqe">rəsmi əlaqə vasitələri</Link>
          {" "}üzərindən əlaqə saxlayın.
        </p>
      </InformationSection>
    </InformationPage>
  );
}
