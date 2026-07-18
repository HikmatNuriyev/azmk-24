import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import Container from "@/components/ui/container";
import { branchesData } from "@/components/sections/branches-page/branchesData";

import CopyAddressButton from "./CopyAddressButton";
import style from "./contactPage.module.scss";

const contactDetails = Object.freeze({
  support: {
    display: "*6300",
    href: "tel:*6300",
  },
  phone: {
    display: "+994 51 230 86 64",
    href: "tel:+994512308664",
  },
  whatsapp: "https://wa.me/994512308664",
  email: {
    display: "info@azmk.az",
    href: "mailto:info@azmk.az",
  },
});

const headOffice = branchesData.find((branch) =>
  branch.address.includes("Nizami Gəncəvi"),
);

if (!headOffice) {
  throw new Error("Əlaqə səhifəsi üçün təsdiqlənmiş Bakı ofisi tapılmadı.");
}

export default function ContactPage() {
  return (
    <div className={style.page}>
      <Container>
        <div className={style.inner}>
          {/* <header className={style.introduction}>
            <p className={style.eyebrow}>Azərbaycan Mikro-Kredit BOKT</p>
            <h1>Əlaqə</h1>
            <p className={style.lead}>
              AZMK ilə əlaqə saxlamaq üçün sizə uyğun əlaqə vasitəsini seçin.
            </p>
          </header> */}

          <section
            className={style.contactMethods}
            aria-labelledby="contact-methods-title"
          >
            <div className={style.sectionHeading}>
              <p className={style.eyebrow}>Birbaşa əlaqə</p>
              <h2 id="contact-methods-title">Əlaqə vasitələri</h2>
            </div>

            <div className={style.contactGrid}>
              <article className={style.contactPanel}>
                <div className={style.panelHeading}>
                  <span className={style.icon} aria-hidden="true">
                    <Phone />
                  </span>
                  <h3>Telefon və WhatsApp</h3>
                </div>

                <a
                  className={style.primaryInformation}
                  href={contactDetails.phone.href}
                >
                  {contactDetails.phone.display}
                </a>

                <p>Telefonla əlaqə saxlayın və ya WhatsApp vasitəsilə yazın.</p>

                <div className={style.panelActions}>
                  <a
                    href={contactDetails.phone.href}
                    className={`${style.action} ${style.primaryAction}`}
                  >
                    <Phone aria-hidden="true" />
                    Zəng et
                  </a>

                  <a
                    href={contactDetails.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${style.action} ${style.secondaryAction}`}
                    aria-label="WhatsApp-da yaz; yeni pəncərədə açılır"
                  >
                    <MessageCircle aria-hidden="true" />
                    WhatsApp-da yaz
                  </a>
                </div>
              </article>

              <article className={style.contactPanel}>
                <div className={style.panelHeading}>
                  <span className={style.icon} aria-hidden="true">
                    <Mail />
                  </span>
                  <h3>E-poçt</h3>
                </div>

                <a
                  className={style.primaryInformation}
                  href={contactDetails.email.href}
                >
                  {contactDetails.email.display}
                </a>

                <p>Şirkətə yazılı müraciətinizi e-poçt vasitəsilə göndərin.</p>

                <div className={style.panelActions}>
                  <a
                    href={contactDetails.email.href}
                    className={`${style.action} ${style.secondaryAction}`}
                  >
                    <Mail aria-hidden="true" />
                    E-poçt göndər
                  </a>
                </div>
              </article>

              <article className={style.contactPanel}>
                <div className={style.panelHeading}>
                  <span className={style.icon} aria-hidden="true">
                    <MessageCircle />
                  </span>
                  <h3>Müştəri dəstəyi</h3>
                </div>

                <a
                  className={style.primaryInformation}
                  href={contactDetails.support.href}
                >
                  {contactDetails.support.display}
                </a>

                <p>Qısa nömrə vasitəsilə müştəri xidmətləri ilə danışın.</p>

                <div className={style.panelActions}>
                  <a
                    href={contactDetails.support.href}
                    className={`${style.action} ${style.secondaryAction}`}
                  >
                    <Phone aria-hidden="true" />
                    Zəng et
                  </a>
                </div>
              </article>
            </div>
          </section>

          <section className={style.office} aria-labelledby="office-title">
            <div className={style.officeInformation}>
              <p className={style.eyebrow}>Ofis məlumatı</p>
              <h2 id="office-title">Baş ofis</h2>

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

          <section
            className={style.assistance}
            aria-labelledby="assistance-title"
          >
            <div>
              <p className={style.eyebrow}>Əlavə dəstək</p>
              <h2 id="assistance-title">Məhsul və müraciət məlumatları</h2>
              <p>
                Məhsullar və onlayn müraciət haqqında məlumat üçün müştəri
                xidmətləri ilə əlaqə saxlaya bilərsiniz.
              </p>
            </div>

            <div className={style.assistanceActions}>
              <Link
                href="/mehsullar"
                className={`${style.action} ${style.secondaryAction}`}
              >
                Məhsullara bax
                <ArrowRight aria-hidden="true" />
              </Link>

              {/* <Link
                href="/muraciet"
                className={`${style.action} ${style.primaryAction}`}
              >
                Onlayn müraciət
                <ArrowRight aria-hidden="true" />
              </Link> */}
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
