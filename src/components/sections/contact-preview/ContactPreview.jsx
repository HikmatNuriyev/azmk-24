import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import style from "./contactPreview.module.scss";

import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function ContactPreview() {
  return (
    <section className={style.contact}>
      <Container>

        <div className={style.heading}>

          <span className={style.badge}>
            Əlaqə
          </span>

          <Title as="h2" size="lg">
            Bizimlə Əlaqə
          </Title>

          <p className={style.description}>
            Suallarınız və müraciətləriniz üçün
            bizimlə rahat şəkildə əlaqə saxlayın.
          </p>

        </div>

        <div className={style.wrapper}>

          {/* LEFT */}
          <div className={style.cards}>

            <Card padding="md">
              <div className={style.contactCard}>

                <div className={style.icon}>
                  <Phone />
                </div>

                <div>
                  <h3>*6300</h3>

                  <p>
                    Telefon dəstəyi
                  </p>
                </div>

              </div>
            </Card>

            <Card padding="md">
              <div className={style.contactCard}>

                <div className={style.icon}>
                  <Mail />
                </div>

                <div>
                  <h3>
                    info@azmk.az
                  </h3>

                  <p>
                    Email ünvanı
                  </p>
                </div>

              </div>
            </Card>

            <Card padding="md">
              <div className={style.contactCard}>

                <div className={style.icon}>
                  <MapPin />
                </div>

                <div>
                  <h3>
                    Bakı, Azərbaycan
                  </h3>

                  <p>
                    Baş ofis
                  </p>
                </div>

              </div>
            </Card>

            <div className={style.cta}>
              <Button size="lg">
                Onlayn Müraciət
              </Button>
            </div>

          </div>

          {/* RIGHT */}
          <div className={style.mapWrapper}>

            <iframe
              src="https://maps.google.com/maps?q=Baku&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>

      </Container>
    </section>
  );
}