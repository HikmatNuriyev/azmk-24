import Image from "next/image";

import style from "./mobileApp.module.scss";

import { floatingCards } from "./data";
import FloatingCard from "./FloatingCard";

import screen from "../../../../public/images/mobile-app.png";

export default function PhoneFrame() {
  return (
    <div className={style.phoneArea}>
      <div className={style.glow}></div>

      {floatingCards.map((item) => (
        <FloatingCard key={item.title} {...item} />
      ))}

      <div className={style.phoneFrame}>
        <div className={style.dynamicIsland}></div>

        <div className={style.screen}>
          <Image src={screen} alt="AZMK Mobile" />
        </div>
      </div>
    </div>
  );
}