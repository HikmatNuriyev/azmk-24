import { MapPin, ExternalLink } from "lucide-react";

import style from "./branchesPage.module.scss";

import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Card from "@/components/ui/card";

import { branchesData } from "./branchesData";

export default function BranchesPage() {
  return (
    <section className={style.branches}>
      <Container>
        <div className={style.hero}>
          

          <Title as="h1" size="hero">
            Sizə yaxın filiallarımız
          </Title>

          <p>
            Azərbaycan Mikro Kredit filiallarının ünvanları ilə tanış olun
            və xəritədə rahat şəkildə baxın.
          </p>
        </div>

        <div className={style.grid}>
          {branchesData.map((branch) => (
            <Card key={branch.title} padding="md">
              <div className={style.branchCard}>
                <div className={style.icon}>
                  <MapPin />
                </div>

                <div>
                  <h2>{branch.title}</h2>
                  <p>{branch.address}</p>
                </div>

                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.mapLink}
                >
                  Xəritədə Bax
                  <ExternalLink />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}