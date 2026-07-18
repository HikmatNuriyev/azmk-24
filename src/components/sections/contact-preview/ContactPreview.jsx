import { ExternalLink } from "lucide-react";

import style from "./contactPreview.module.scss";

import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import { branchesData } from "@/components/sections/branches-page/branchesData";
import CopyAddressButton from "@/components/sections/contact-page/CopyAddressButton";

const contactDetails = Object.freeze({
  support: {
    display: "*6300",
    href: "tel:*6300",
  },
  email: {
    display: "info@azmk.az",
    href: "mailto:info@azmk.az",
  },
});

const headOffice = branchesData.find((branch) =>
  branch.address.includes("Nizami Gəncəvi"),
);

if (!headOffice) {
  throw new Error("Əlaqə bölməsi üçün təsdiqlənmiş Bakı ofisi tapılmadı.");
}

export default function ContactPreview() {
  return (
    <section className={style.contact}>
      <Container>

        <div className={style.heading}>
{/*  */}

          <Title as="h2" size="lg">
            Bizimlə Əlaqə
          </Title>

          <p className={style.description}>
            Suallarınız və müraciətləriniz üçün
            bizimlə rahat şəkildə əlaqə saxlayın.
          </p>

        </div>

        <section
          className={style.office}
          aria-labelledby="contact-preview-office-title"
        >
          <div className={style.officeInformation}>
            <p className={style.eyebrow}>Ofis məlumatı</p>
            <h3 id="contact-preview-office-title">Baş ofis</h3>

            <address>{headOffice.address}</address>

            <dl className={style.officeDetails}>
              <div>
                <dt>Müştəri dəstəyi</dt>
                <dd>
                  <a href={contactDetails.support.href}>
                    {contactDetails.support.display}
                  </a>
                </dd>
              </div>

              <div>
                <dt>E-poçt</dt>
                <dd>
                  <a href={contactDetails.email.href}>
                    {contactDetails.email.display}
                  </a>
                </dd>
              </div>
            </dl>

            <div className={style.officeActions}>
              <CopyAddressButton address={headOffice.address} />
            </div>
          </div>

          <div className={style.mapWrapper}>

            <iframe
              src="https://www.google.com/maps?q=40.371599,49.8356626&z=18&output=embed"
              title="Azərbaycan Mikro-Kredit BOKT — Bakı baş ofisi"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            <a
              href="https://www.google.com/maps/place/Azerbaycan+Mikro+Kredit/@40.3715794,49.8349953,18z/data=!4m6!3m5!1s0x40307dc846040033:0x50b5ce0661e1b420!8m2!3d40.371599!4d49.8356626!16s%2Fg%2F11b5z0zt3s?hl=tr&entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className={style.mapAction}
              aria-label="Azərbaycan Mikro-Kredit BOKT Bakı baş ofisini Google Xəritədə aç; yeni pəncərədə açılır"
            >
              Google Xəritədə aç
              <ExternalLink aria-hidden="true" />
            </a>

          </div>

        </section>

      </Container>
    </section>
  );
}
