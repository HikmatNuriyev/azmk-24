import Link from "next/link";
import { ChevronRight, Info, ShieldAlert } from "lucide-react";

import Container from "@/components/ui/container";

import style from "./informationPage.module.scss";

export default function InformationPage({
  title,
  intro,
  updatedAt,
  children,
}) {
  return (
    <section className={style.page}>
      <Container>
        <div className={style.inner}>
          <nav className={style.breadcrumb} aria-label="Səhifə yolu">
            <Link href="/">Ana səhifə</Link>
            <ChevronRight aria-hidden="true" />
            <span aria-current="page">{title}</span>
          </nav>

          <article className={style.surface}>
            <header className={style.pageHeader}>
              <p className={style.eyebrow}>Məlumat mərkəzi</p>
              <h1>{title}</h1>
              <p className={style.lead}>{intro}</p>

              {updatedAt && (
                <p className={style.updatedAt}>
                  <span>Son yenilənmə</span>
                  <time dateTime={updatedAt.iso}>{updatedAt.label}</time>
                </p>
              )}
            </header>

            <div className={style.content}>{children}</div>
          </article>
        </div>
      </Container>
    </section>
  );
}

export function InformationSection({ id, title, children }) {
  const headingId = `${id}-title`;

  return (
    <section className={style.section} aria-labelledby={headingId}>
      <h2 id={headingId}>{title}</h2>
      <div className={style.sectionBody}>{children}</div>
    </section>
  );
}

export function InformationNotice({ title, variant = "neutral", children }) {
  const Icon = variant === "warning" ? ShieldAlert : Info;

  return (
    <aside
      className={`${style.notice} ${style[`${variant}Notice`]}`}
      role="note"
    >
      <Icon aria-hidden="true" />
      <div>
        <strong>{title}</strong>
        <div>{children}</div>
      </div>
    </aside>
  );
}
