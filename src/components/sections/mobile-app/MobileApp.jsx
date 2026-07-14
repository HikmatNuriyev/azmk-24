"use client";

import Image from "next/image";
import QRCode from "react-qr-code";
import { FaApple, FaGooglePlay } from "react-icons/fa";

import style from "./mobileApp.module.scss";
import Container from "@/components/ui/container";

import appScreen from "../../../../public/images/mobile-app.jpeg";

export default function MobileApp() {
  return (
    <section className={style.mobileApp}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.content}>
            <h2>AZMK Mobile</h2>

            <p>
              Kreditlərinizi, ödənişlərinizi və müraciətlərinizi mobil tətbiq
              vasitəsilə istənilən yerdən rahatlıqla idarə edin.
            </p>

            <div className={style.download}>
              <div className={style.qrBox}>
                <QRCode
                  value="https://azmk.az/mobile"
                  size={118}
                  bgColor="transparent"
                  fgColor="#081a33"
                />
              </div>

              <div className={style.downloadInfo}>
                <span>
                  Telefonunuzun kamerası ilə QR kodu skan edin
                </span>

                <div className={style.storeLinks}>
                  <a href="#" aria-label="App Store">
                    <FaApple />
                  </a>

                  <a href="#" aria-label="Google Play">
                    <FaGooglePlay />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={style.visual}>
            <div className={style.phoneMockup}>
              <div className={style.phoneIsland}></div>

              <div className={style.phoneScreen}>
                <Image
                  src={appScreen}
                  alt="AZMK Mobile tətbiqi"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}