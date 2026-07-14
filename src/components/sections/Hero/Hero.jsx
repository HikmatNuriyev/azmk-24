"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import style from "./hero.module.scss";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import Title from "@/components/ui/title";

import { heroSlides } from "./heroSlides";

export default function Hero() {
  return (
    <section className={style.hero}>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        className={style.swiper}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <Container>
              <div className={style.wrapper}>
                <div className={style.content}>
                  <span className={style.badge}>{slide.badge}</span>

                  <Title as="h1" size="hero">
                    {slide.title}
                  </Title>

                  <p className={style.description}>{slide.description}</p>

                  <div className={style.actions}>
                    <Link href={slide.href}>
                      <Button size="lg">{slide.primaryButton}</Button>
                    </Link>

                    <Link href={slide.href}>
                      <Button variant="secondary" size="lg">
                        {slide.secondaryButton}
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className={style.visual}>
                  <Image
                    width={500}
                    height={500}
                    src={slide.image}
                    alt={slide.title}
                    priority
                  />
                </div>
              </div>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className={`${style.navBtn} ${style.prevBtn} hero-prev`}
        aria-label="Əvvəlki slayd"
      >
        ←
      </button>

      <button
        className={`${style.navBtn} ${style.nextBtn} hero-next`}
        aria-label="Növbəti slayd"
      >
        →
      </button>
    </section>
  );
}
