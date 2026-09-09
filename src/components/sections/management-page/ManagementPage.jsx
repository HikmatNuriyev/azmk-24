"use client";

import { useState } from "react";
import Image from "next/image";

import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

import MemberDialog from "./MemberDialog";
import { managementData } from "./managementData";

import style from "./managementPage.module.scss";

export default function ManagementPage() {
  const [activeId, setActiveId] = useState(null);

  const active =
    managementData.find((person) => person.id === activeId) ?? null;

  return (
    <section className={style.management}>
      <Container>
        <div className={style.hero}>
          <Title as="h1" size="hero">
            İdarə Heyəti
          </Title>
        </div>

        <ul className={style.grid}>
          {managementData.map((person) => (
            <li key={person.id}>
              <button
                type="button"
                className={style.card}
                onClick={() => setActiveId(person.id)}
                aria-haspopup="dialog"
              >
                <span className={style.photo}>
                  <Image
                    src={person.image}
                    alt=""
                    width={640}
                    height={480}
                    sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                </span>

                <span className={style.name}>{person.name}</span>
                <span className={style.position}>{person.position}</span>
              </button>
            </li>
          ))}
        </ul>
      </Container>

      <MemberDialog person={active} onClose={() => setActiveId(null)} />
    </section>
  );
}
