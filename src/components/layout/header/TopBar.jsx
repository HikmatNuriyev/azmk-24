import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";

import style from "./header.module.scss";

import Container from "@/components/ui/container";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function TopBar() {
  return (
    <div className={style.topbar}>
      <Container>
        <div className={style.topbarContent}>
          <span className={style.topbarLabel}>
            Azərbaycan Mikro-Kredit BOKT
          </span>

          <div className={style.topbarRight}>
            <a href="tel:*6300">
              <HiOutlinePhone />
              <span>*6300</span>
            </a>

            <a
              href="https://wa.me/994102438082"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AZMK ilə WhatsApp-da əlaqə saxla; yeni pəncərədə açılır"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

            <a href="mailto:info@azmk.az">
              <HiOutlineEnvelope />
              <span>info@azmk.az</span>
            </a>

            <span className={style.separator}></span>

            {/* <ThemeToggle variant="topbar" /> */}
          </div>
        </div>
      </Container>
    </div>
  );
}
