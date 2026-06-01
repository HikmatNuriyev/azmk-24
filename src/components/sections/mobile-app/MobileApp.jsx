import Image from "next/image";

import style from "./mobileApp.module.scss";

import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Button from "@/components/ui/button";

import appImage from "../../../../public/images/mobile-app.png";

export default function MobileApp() {
  return (
    <section className={style.mobileApp}>
      <Container>
        <div className={style.wrapper}>

          {/* LEFT */}
          <div className={style.content}>

            <span className={style.badge}>
              Mobil Tətbiq
            </span>

            <Title as="h2" size="lg">
              AZMK Mobile
            </Title>

            <p className={style.description}>
              Kredit əməliyyatlarını və müraciətlərinizi
              mobil tətbiq vasitəsilə daha rahat idarə edin.
            </p>

            <div className={style.actions}>
              <Button size="lg">
                App Store
              </Button>

              <Button
                variant="secondary"
                size="lg"
              >
                Google Play
              </Button>
            </div>

          </div>

          {/* RIGHT */}
          <div className={style.visual}>
            <Image
              src={appImage}
              alt="AZMK Mobile"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}