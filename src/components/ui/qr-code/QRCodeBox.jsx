"use client";

import { QRCodeCanvas } from "qrcode.react";
import style from "./qrCodeBox.module.scss";

export default function QRCodeBox({ value }) {
  return (
    <div className={style.box}>
      <QRCodeCanvas
        value={value}
        size={180}
        level="H"
        includeMargin
      />
    </div>
  );
}