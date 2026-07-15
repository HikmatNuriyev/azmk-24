import Container from "@/components/ui/container";

import HeroSlider from "./HeroSlider";
import { getEnabledHeroSlides } from "./heroSlides";
import style from "./hero.module.scss";

export default function Hero() {
  const slides = getEnabledHeroSlides();

  return (
    <section className={style.hero} aria-labelledby="home-hero-title">
      <Container>
        <div className={style.inner}>
          <header className={style.heading}>
            <div className={style.headingCopy}>
              <p className={style.institutionalEyebrow}>
                Azərbaycan Mikro-Kredit BOKT
              </p>

              <h1 id="home-hero-title">
                2014-cü ildən etibarlı maliyyə tərəfdaşınız
              </h1>
            </div>

            <p className={style.introduction}>
              Sahibkarlar və fərdi müştərilər üçün çevik və etibarlı maliyyə
              həlləri təqdim edirik.
            </p>
          </header>

          <HeroSlider slides={slides} />
        </div>
      </Container>
    </section>
  );
}
