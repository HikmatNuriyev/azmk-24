import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/container";

import style from "./services.module.scss";
import { servicesData } from "./servicesData";

export default function Services() {
  return (
    <section
      className={style.services}
      aria-labelledby="services-title"
    >
      <Container>
        <div className={style.heading}>
          <h2 id="services-title">Məhsullarımız</h2>

          <p>
            AZMK-nın kredit və lizinq məhsulları ilə tanış olun.
          </p>
        </div>

        <div className={style.grid}>
          {servicesData.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className={style.card}
            >
              <div className={style.visual}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={service.imageWidth}
                  height={service.imageHeight}
                  sizes="(max-width: 760px) 150px, (max-width: 1024px) 220px, 360px"
                />
              </div>

              <div className={style.cardContent}>
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span className={style.more}>
                  Məhsullara bax
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
