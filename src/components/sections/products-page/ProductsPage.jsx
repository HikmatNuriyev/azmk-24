import Link from "next/link";

import style from "./productsPage.module.scss";

import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

import { productsData, comparisonRows } from "./productsData";

export default function ProductsPage() {
  return (
    <section className={style.products}>
      <Container>
        <div className={style.hero}>
          <span className={style.badge}>Məhsullarımız</span>

          <Title as="h1" size="hero">
            Kredit və Lizinq Məhsulları
          </Title>

          <p>
            Sizə uyğun kredit və lizinq imkanlarını müqayisə edin,
            şərtlərlə tanış olun və rahat şəkildə müraciət edin.
          </p>
        </div>

        <div className={style.grid}>
          {productsData.map((product) => (
            <Card key={product.title} padding="md">
              <div className={style.productCard}>
                <h2>{product.title}</h2>

                <div className={style.amount}>{product.amount}</div>

                <div className={style.infoList}>
                  <div>
                    <span>Müddət</span>
                    <strong>{product.duration}</strong>
                  </div>

                  <div>
                    <span>Faiz</span>
                    <strong>{product.rate}</strong>
                  </div>

                  <div>
                    <span>Komissiya</span>
                    <strong>{product.commission}</strong>
                  </div>

                  <div>
                    <span>FİFD</span>
                    <strong>{product.fifd}</strong>
                  </div>
                </div>

                <Link href={product.href}>
                  <Button fullWidth>Müraciət et</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className={style.tableBlock}>
          <div className={style.tableHeading}>
            <Title as="h2" size="md">
              Məhsulların müqayisəsi
            </Title>
          </div>

          <div className={style.tableWrapper}>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>İstehlak krediti</th>
                  <th>Lombard krediti</th>
                  <th>AvtoLizinq</th>
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.consumer}</td>
                    <td>{row.lombard}</td>
                    <td>{row.leasing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={style.cta}>
          <div>
            <h2>Müraciət etməyə hazırsınız?</h2>
            <p>
              Sizə uyğun məhsulu seçin və onlayn müraciət formasını doldurun.
            </p>
          </div>

          <Link href="/muraciet">
            <Button size="lg">Onlayn Müraciət</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}