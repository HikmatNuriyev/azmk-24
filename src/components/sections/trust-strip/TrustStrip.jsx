import Link from "next/link";
import { Building2, CalendarDays, FileText, Phone } from "lucide-react";

import Container from "@/components/ui/container";

import style from "./trustStrip.module.scss";

export default function TrustStrip() {
  return (
    <section
      className={style.trustStrip}
      aria-label="Etibar və tənzimləmə məlumatları"
    >
      <Container>
        <div className={style.inner}>
          <div className={style.item}>
            <CalendarDays aria-hidden="true" />
            <span>Fəaliyyət müddəti</span>
            <strong>2014-cü ildən fəaliyyət göstərir</strong>
          </div>

          <div className={style.item}>
            <Building2 aria-hidden="true" />
            <span>Lisenziyalı fəaliyyət</span>
            <strong>
              Azərbaycan Respublikası Mərkəzi Bankı tərəfindən verilmiş
              lisenziya əsasında fəaliyyət göstərir
            </strong>
          </div>

          <Link href="/hesabat" className={`${style.item} ${style.itemLink}`}>
            <FileText aria-hidden="true" />
            <span>Şəffaflıq</span>
            <strong>Audit hesabatları</strong>
          </Link>

          <a href="tel:*6300" className={`${style.item} ${style.itemLink}`}>
            <Phone aria-hidden="true" />
            <span>Müştəri dəstəyi</span>
            <strong>*6300</strong>
          </a>
        </div>
      </Container>
    </section>
  );
}
