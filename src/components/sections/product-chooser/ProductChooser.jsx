import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  Gem,
  WalletCards,
} from "lucide-react";

import Container from "@/components/ui/container";
import { productsData } from "@/components/sections/products-page/productsData";

import style from "./productChooser.module.scss";

const productIcons = [WalletCards, Gem, CarFront];

export default function ProductChooser() {
  return (
    <section className={style.productChooser} aria-labelledby="product-chooser-title">
      <Container>
        <div className={style.inner}>
          <div className={style.heading}>
            <h2 id="product-chooser-title">Məhsullarımız</h2>

            <Link href="/mehsullar" className={style.allProductsLink}>
              Bütün məhsullar
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className={style.grid}>
            {productsData.slice(0, 3).map((product, index) => {
              const Icon = productIcons[index];

              return (
                <Link
                  key={product.title}
                  href="/mehsullar"
                  className={style.productLink}
                  aria-label={`${product.title} haqqında məlumat`}
                >
                  <span className={style.icon} aria-hidden="true">
                    <Icon />
                  </span>

                  <span className={style.productContent}>
                    <strong>{product.title}</strong>
                    <span>{product.amount}</span>
                  </span>

                  <ArrowRight className={style.arrow} aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
