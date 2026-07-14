"use client";

import QRCode from "react-qr-code";

import style from "./mobileApp.module.scss";

import Button from "@/components/ui/button";

export default function QRCard() {
  return (
    <div className={style.qrCard}>
      <div className={style.qrImage}>
        <QRCode
          value="https://azmk.az/mobile"
          size={86}
          bgColor="transparent"
          fgColor="#081a33"
        />
      </div>

      <div className={style.qrContent}>
        <h4>Telefonunuzla skan edin</h4>

        <p>
          QR kodu oxudaraq AZMK Mobile tətbiqini yükləyin.
        </p>

        <div className={style.storeButtons}>
          <Button size="sm">App Store</Button>

          <Button variant="secondary" size="sm">
            Google Play
          </Button>
        </div>
      </div>
    </div>
  );
}