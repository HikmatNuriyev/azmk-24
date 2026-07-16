import Image from "next/image";
import QRCode from "react-qr-code";
import { FaApple, FaGooglePlay } from "react-icons/fa";

import Container from "@/components/ui/container";

import style from "./mobileApp.module.scss";
import appScreen from "../../../../public/images/mobile-app.jpeg";

const STORE_LINKS = [
  {
    label: "Google Play",
    ariaLabel: "AZMK Mobile tətbiqini Google Play-dən yükləyin",
    icon: FaGooglePlay,
  },
  {
    label: "App Store",
    ariaLabel: "AZMK Mobile tətbiqini App Store-dan yükləyin",
    icon: FaApple,
  },
];

export default function MobileApp() {
  return (
    <section className={style.mobileApp} aria-labelledby="mobile-app-title">
      <Container>
        <div className={style.wrapper}>
          <div className={style.content}>
            

            <h2 id="mobile-app-title">AZMK Mobile</h2>

            <p className={style.description}>
              Kreditlərinizi, ödənişlərinizi və müraciətlərinizi mobil tətbiq
              vasitəsilə istənilən yerdən rahatlıqla idarə edin.
            </p>

            <div className={style.download}>
              <div
                className={style.qrBox}
                role="img"
                aria-label="AZMK Mobile tətbiqini yükləmək üçün QR kod"
              >
                <QRCode
                  value="https://azmk.az/mobile"
                  size={140}
                  bgColor="transparent"
                  fgColor="#081a33"
                  aria-hidden="true"
                  focusable="false"
                />
              </div>

              <div className={style.downloadInfo}>
                <p className={style.qrInstruction}>
                  Telefonunuzun kamerası ilə QR kodu skan edərək tətbiqi
                  yükləyin.
                </p>

                <div className={style.storeLinks}>
                  {STORE_LINKS.map((store) => {
                    const StoreIcon = store.icon;

                    return (
                      <a
                        key={store.label}
                        href="#"
                        aria-label={store.ariaLabel}
                      >
                        <StoreIcon aria-hidden="true" focusable="false" />

                        <span className={style.storeText}>
                          <small>Tətbiqi əldə edin</small>
                          <strong>{store.label}</strong>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className={style.visual}>
            <div className={style.phoneMockup}>
              <div className={style.phoneScreen}>
                <Image
                  src={appScreen}
                  alt="AZMK Mobile tətbiqində kredit və ödənişlərin idarə edilməsi ekranı"
                  sizes="(max-width: 480px) 162px, (max-width: 640px) 174px, (max-width: 900px) 192px, (max-width: 1024px) 202px, 214px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
