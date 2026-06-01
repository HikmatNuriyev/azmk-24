import Link from "next/link";

import style from "./header.module.scss";

import Container from "@/components/ui/container";

export default function TopBar() {
  return (
    <div className={style.topbar}>
      <Container>
        <div className={style.topbarContent}>
          <div className={style.topbarLeft}>
            <Link href="/filiallar">
              Filiallar
            </Link>

            <Link href="/payment">
              Ödəmə nöqtələri
            </Link>
          </div>

          <div className={style.topbarRight}>
            <a href="tel:*6300">
              *6300
            </a>

            <a
              href="https://www.instagram.com/azerbaycan_mikro_kredit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

