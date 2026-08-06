import { FileText, Download, Eye } from "lucide-react";

import style from "./reportsPage.module.scss";

import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Card from "@/components/ui/card";

import {reports} from "./reportsData";

export default function ReportsPage() {
  return (
    <section className={style.reports}>
      <Container>
        <div className={style.hero}>

          <Title as="h1" size="hero">
            Maliyyə Şəffaflığı
          </Title>

          <p>
            Azərbaycan Mikro Kredit-in illik audit hesabatları və maliyyə
            sənədləri ilə tanış olun.
          </p>
        </div>

        <div className={style.grid}>
          {reports.map((report) => (
            <Card key={report.year} padding="md">
              <div className={style.reportCard}>
                <div className={style.icon}>
                  <FileText />
                </div>

                <div className={style.content}>
                  <span>{report.year}</span>
                  <h2>{report.title}</h2>
                  <p>PDF formatında audit hesabatı</p>
                </div>

                <div className={style.actions}>
                  <a
                    href={report.file}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye />
                    Bax
                  </a>

                  <a href={report.file} download>
                    <Download />
                    Yüklə
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}