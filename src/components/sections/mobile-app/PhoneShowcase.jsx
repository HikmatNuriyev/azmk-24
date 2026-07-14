import Image from "next/image";

import style from "./mobileApp.module.scss";

import phone from "../../../../public/images/mobile-app.jpeg";
import appScreen1 from "../../../../public/images/app-screen-1.jpeg";
import appScreen2 from "../../../../public/images/app-screen-2.jpeg";
import appScreen3 from "../../../../public/images/app-screen-3.jpeg";

export default function PhoneShowcase() {
  return (
    <div className={style.showcase}>
      <div className={style.glow}></div>

      <div className={`${style.previewCard} ${style.previewTop}`}>
        <Image src={appScreen1} alt="AZMK Mobile ekranı" />
      </div>

      <div className={`${style.previewCard} ${style.previewMiddle}`}>
        <Image src={appScreen2} alt="AZMK Mobile ekranı" />
      </div>

      <div className={`${style.previewCard} ${style.previewBottom}`}>
        <Image src={appScreen3} alt="AZMK Mobile ekranı" />
      </div>

      <div className={style.phoneFrame}>
        <Image src={phone} alt="AZMK Mobile tətbiqi" className={style.phone} />
      </div>
    </div>
  );
}