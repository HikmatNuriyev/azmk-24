import Image from "next/image";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import style from "./aboutPage.module.scss";

import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Card from "@/components/ui/card";

import aboutImage from "../../../../public/images/about.jpg";

export default function AboutPage() {
  return (
    <section className={style.about}>

      {/* HERO */}
      <div className={style.hero}>
        <Container>

          <span className={style.badge}>
            Haqqımızda
          </span>

          <Title as="h1" size="hero">
            2014-cü ildən etibarlı maliyyə tərəfdaşınız
          </Title>

          <p className={style.heroText}>
            Azərbaycan Mikro-Kredit BOKT fərdi şəxslər və
            sahibkarlar üçün çevik və əlçatan maliyyə
            xidmətləri təqdim edir.
          </p>

        </Container>
      </div>

      {/* STORY */}
      <Container>
        <div className={style.story}>

          <div className={style.visual}>
            <Image
              src={aboutImage}
              alt="Azərbaycan Mikro Kredit"
            />
          </div>

          <div className={style.content}>

            <Title as="h2" size="lg">
              Azərbaycan Mikro-Kredit BOKT
            </Title>

            <p>
              “Azərbaycan Mikro-Kredit Bank Olmayan Kredit
              Təşkilatı” MMC 2014-cü ilin aprel ayında
              Azərbaycan Respublikasının qanunvericiliyinə
              uyğun olaraq təsis edilmişdir.
            </p>

            <p>
              Təşkilatın əsas məqsədi fiziki və hüquqi
              şəxslərə, sahibkarlara və az təminatlı
              icmalara qısa və uzun müddətli kredit
              xidmətləri təqdim etməkdir.
            </p>

            <p>
              Şirkət Azərbaycan Respublikası Mərkəzi Bankı
              tərəfindən verilmiş lisenziya əsasında
              fəaliyyət göstərir.
            </p>

          </div>

        </div>

        {/* VALUES */}
        <div className={style.values}>

          <Card>
            <div className={style.valueCard}>

              <strong>
                Missiyamız
              </strong>

              <p>
                Müştərilərin iqtisadi vəziyyətinin
                yaxşılaşdırılmasına dəstək olmaq.
              </p>

            </div>
          </Card>

          <Card>
            <div className={style.valueCard}>

              <strong>
                Etibarlılıq
              </strong>

              <p>
                Şəffaf və məsuliyyətli maliyyə xidməti
                təqdim etmək.
              </p>

            </div>
          </Card>

          <Card>
            <div className={style.valueCard}>

              <strong>
                Çevik Maliyyə
              </strong>

              <p>
                Müştərilərə sürətli və rahat kredit
                imkanları yaratmaq.
              </p>

            </div>
          </Card>

        </div>

        {/* CONTACT STRIP */}
        <div className={style.contactStrip}>

          <div className={style.contactItem}>
            <Phone />

            <span>
              *6300
            </span>
          </div>

          <div className={style.contactItem}>
            <MessageCircle />

            <span>
              +994 (51) 230 86 64
            </span>
          </div>

          <div className={style.contactItem}>
            <Mail />

            <span>
              info@azmk.az
            </span>
          </div>

          <div className={style.contactItem}>
            <MapPin />

            <span>
              Bakı, Xətai rayonu
            </span>
          </div>

        </div>

      </Container>

    </section>
  );
}