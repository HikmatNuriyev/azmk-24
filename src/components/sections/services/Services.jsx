import Image from "next/image";
import Link from "next/link";

import style from "./services.module.scss";

import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Card from "@/components/ui/card";

import { servicesData } from "./servicesData";

export default function Services() {
  return (
    <section className={style.services}>
      <Container>
       <div className={style.heading}>
  <span className={style.badge}>
    Məhsullarımız
  </span>

 
</div>

        <div className={style.grid}>
          {servicesData.map((service) => (
            <Card key={service.title}>
              <Link
                href={service.href}
                className={style.card}
              >
                <div className={style.icon}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                  />
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <span className={style.more}>
                  Ətraflı Bax →
                </span>
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}