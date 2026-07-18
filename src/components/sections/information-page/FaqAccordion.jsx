"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";

import style from "./informationPage.module.scss";

export default function FaqAccordion({ groups }) {
  const [openItem, setOpenItem] = useState(null);

  return (
    <div className={style.faqGroups}>
      {groups.map((group, groupIndex) => {
        const groupId = `faq-group-${groupIndex}`;

        return (
          <section
            key={group.title}
            className={style.faqGroup}
            aria-labelledby={groupId}
          >
            <h2 id={groupId}>{group.title}</h2>

            <div className={style.accordion}>
              {group.items.map((item, itemIndex) => {
                const itemId = `${groupIndex}-${itemIndex}`;
                const buttonId = `faq-button-${itemId}`;
                const panelId = `faq-panel-${itemId}`;
                const isOpen = openItem === itemId;

                return (
                  <article key={item.question} className={style.faqItem}>
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenItem(isOpen ? null : itemId)}
                      >
                        <span>{item.question}</span>
                        {isOpen ? (
                          <Minus aria-hidden="true" />
                        ) : (
                          <Plus aria-hidden="true" />
                        )}
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={style.faqAnswer}
                      hidden={!isOpen}
                    >
                      <p>{item.answer}</p>

                      {item.link && (
                        <Link href={item.link.href}>{item.link.label}</Link>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
