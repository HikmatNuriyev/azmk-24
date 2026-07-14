import Link from "next/link";
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
          <div className={style.topbarRight}>
            <a href="tel:*6300">
              <HiOutlinePhone />
              <span>*6300</span>
            </a>

            <a
              href="https://wa.me/994512308664"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a href="mailto:info@azmk.az">
              <HiOutlineEnvelope />
            </a>

            <span className={style.separator}></span>

            <button
              type="button"
              className={style.langBtn}
            >
              AZ
            </button>

            <span className={style.separator}></span>

           <ThemeToggle variant="topbar" />

            <span className={style.separator}></span>

            {/* Accessibility panel buraya gələcək */}
            <button
              type="button"
              className={style.utilityBtn}
              aria-label="Accessibility"
            >
              ♿
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}