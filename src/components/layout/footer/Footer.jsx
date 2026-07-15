import Link from "next/link";
import Image from "next/image";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import style from "./footer.module.scss";

import Container from "@/components/ui/container";

import logo from "../../../../public/images/Logonext.webp";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Container>

        <div className={style.top}>

          {/* LEFT */}
          <div className={style.brand}>

            <Link href="/">
              <Image
                src={logo}
                alt="AZMK Logo"
              />
            </Link>

            <p>
              Müasir maliyyə həlləri və
              etibarlı kredit xidmətləri.
            </p>

         

          </div>

          {/* LINKS */}
          <div className={style.links}>
<div>
  <h3>
    Dəstək
  </h3>

  <Link href="/faq">
    FAQ / Yardım Mərkəzi
  </Link>

  <Link href="/elaqe">
    Əlaqə
  </Link>

  <Link href="/privacy-policy">
    Məxfilik Siyasəti
  </Link>

  <Link href="/terms">
    Xidmət Şərtləri
  </Link>
</div>
            <div>
              <h3>
                Məhsullar
              </h3>

              <Link href="/istehlak-krediti">
                İstehlak Krediti
              </Link>

              <Link href="/qizil-lombardi">
                Qızıl Lombardı
              </Link>

              <Link href="/masin-lizinqi">
                Maşın Lizinqi
              </Link>
            </div>

            <div>
              <h3>
                Şirkət
              </h3>

              <Link href="/about">
                Haqqımızda
              </Link>

              <Link href="/rehberlik">
                Rəhbərlik
              </Link>

              <Link href="/vakansiya">
                Vakansiyalar
              </Link>
            </div>

            <div>
              <h3>
                Əlaqə
              </h3>

              <a href="tel:*6300">
                <Phone />
                *6300
              </a>

              <a href="mailto:info@azmk.az">
                <Mail />
                info@azmk.az
              </a>

              <Link href="/elaqe">
                <MapPin />
                Bakı, Azərbaycan
              </Link>
            </div>

          </div>
          

        </div>

        {/* BOTTOM */}
        <div className={style.bottom}>

          <p>
            © 2026 Azərbaycan Mikro Kredit.
            Bütün hüquqlar qorunur.
          </p>

        </div>

      </Container>
    </footer>
  );
}
