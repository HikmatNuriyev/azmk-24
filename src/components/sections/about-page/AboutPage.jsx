import Link from "next/link";

import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

import style from "./aboutPage.module.scss";

const facts = [
  { label: "Təsis tarixi", value: "Aprel 2014" },
  { label: "Hüquqi forma", value: "Bank Olmayan Kredit Təşkilatı" },
  { label: "Lisenziya", value: "AR Mərkəzi Bankı, № BKT-25" },
];

const links = [
  {
    href: "/rehberlik",
    title: "İdarə Heyəti",
    text: "Rəhbərlik və idarəetmə komandası.",
  },
  {
    href: "/hesabat",
    title: "İllik hesabatlar",
    text: "2017-ci ildən bugünədək maliyyə hesabatları.",
  },
  {
    href: "/filiallar",
    title: "Filiallar",
    text: "Ünvanlar və iş qrafiki.",
  },
];

export default function AboutPage() {
  return (
    <section className={style.about}>
      <Container>
        <div className={style.hero}>
          <Title as="h1" size="hero">
            2014-cü ildən etibarlı maliyyə tərəfdaşınız
          </Title>

          <p className={style.lead}>
            Azərbaycan Mikro-Kredit BOKT fərdi şəxslər və sahibkarlar üçün çevik
            və əlçatan maliyyə xidmətləri təqdim edir.
          </p>
        </div>

        <div className={style.prose}>
          <p>
            &laquo;Azərbaycan Mikro-Kredit Bank Olmayan Kredit Təşkilatı&raquo;
            2014-cü ilin aprel ayında Azərbaycan Respublikasının
            qanunvericiliyinə uyğun olaraq təsis edilmişdir.
          </p>

          <p>
            Təşkilatın əsas məqsədi fiziki və hüquqi şəxslərə, sahibkarlara və
            az təminatlı icmalara qısa və uzun müddətli kredit xidmətləri təqdim
            etməkdir.
          </p>

          <p>
            Şirkət Azərbaycan Respublikası Mərkəzi Bankı tərəfindən verilmiş
            lisenziya əsasında fəaliyyət göstərir.
          </p>
        </div>

        <dl className={style.facts}>
          {facts.map((fact) => (
            <div key={fact.label} className={style.fact}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
