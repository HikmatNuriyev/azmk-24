import Image from "next/image";

import style from "./managementPage.module.scss";

import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Card from "@/components/ui/card";

import { managementData } from "./managementData";

export default function ManagementPage() {
  return (
    <section className={style.management}>
      <Container>

        <div className={style.hero}>

          <span className={style.badge}>
            Rəhbərlik
          </span>

          <Title as="h1" size="hero">
            İdarə Heyəti
          </Title>

          <p>
            Azərbaycan Mikro Kredit rəhbərliyi və
            idarəetmə komandası ilə tanış olun.
          </p>

        </div>

        <div className={style.grid}>

          {managementData.map((person) => (
            <Card
              key={person.id}
              padding="none"
            >

              <div className={style.member}>

                <div className={style.imageWrapper}>

                  <Image
                    src={person.image}
                    alt={person.name}
                    width={500}
                    height={500}
                  />

                </div>

                <div className={style.content}>

                  <h2>
                    {person.name}
                  </h2>

                  <span>
                    {person.position}
                  </span>

                </div>

              </div>

            </Card>
          ))}

        </div>

      </Container>
    </section>
  );
}