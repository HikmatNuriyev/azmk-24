"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import style from "./hero.module.scss";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback) {
  const mediaQuery = window.matchMedia(reducedMotionQuery);

  mediaQuery.addEventListener("change", callback);

  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function HeroSlider({ slides }) {
  const swiperRef = useRef(null);
  const pausedByHoverRef = useRef(false);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const isAutoplayRunning = autoplayEnabled && !prefersReducedMotion;
  const activeSlide = slides[activeIndex] ?? slides[0];

  useEffect(() => {
    const autoplay = swiperRef.current?.autoplay;

    if (!autoplay) return;

    if (prefersReducedMotion) {
      pausedByHoverRef.current = false;
      autoplay.stop();
      return;
    }

    if (autoplayEnabled && !autoplay.running) {
      autoplay.start();
    }
  }, [autoplayEnabled, prefersReducedMotion]);

  const stopAutoplayAfterInteraction = () => {
    pausedByHoverRef.current = false;
    swiperRef.current?.autoplay?.stop();
    setAutoplayEnabled(false);
  };

  const handlePointerEnter = () => {
    const autoplay = swiperRef.current?.autoplay;

    if (
      !autoplay ||
      !isAutoplayRunning ||
      !autoplay.running ||
      autoplay.paused
    ) {
      return;
    }

    pausedByHoverRef.current = true;
    autoplay.pause();
  };

  const handlePointerLeave = () => {
    const autoplay = swiperRef.current?.autoplay;

    if (
      !autoplay ||
      !pausedByHoverRef.current ||
      !isAutoplayRunning
    ) {
      return;
    }

    pausedByHoverRef.current = false;
    autoplay.resume();
  };

  const handlePrevious = () => {
    stopAutoplayAfterInteraction();
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    stopAutoplayAfterInteraction();
    swiperRef.current?.slideNext();
  };

  const handlePagination = (index) => {
    stopAutoplayAfterInteraction();
    swiperRef.current?.slideTo(index);
  };

  const handleAutoplayToggle = () => {
    const autoplay = swiperRef.current?.autoplay;

    if (!autoplay || prefersReducedMotion) return;

    pausedByHoverRef.current = false;

    if (isAutoplayRunning) {
      autoplay.stop();
      setAutoplayEnabled(false);
      return;
    }

    autoplay.start();
    setAutoplayEnabled(true);
  };

  const handleKeyboardInteraction = (event) => {
    if (["ArrowLeft", "PageUp"].includes(event.key)) {
      event.preventDefault();
      handlePrevious();
    }

    if (["ArrowRight", "PageDown"].includes(event.key)) {
      event.preventDefault();
      handleNext();
    }
  };

  return (
    <div
      className={style.sliderFrame}
      role="region"
      aria-roledescription="karusel"
      aria-label="AZMK məhsulları"
      tabIndex={0}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onKeyDownCapture={handleKeyboardInteraction}
    >
      <Swiper
        modules={[A11y, Autoplay]}
        className={style.swiper}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={false}
        speed={prefersReducedMotion ? 0 : 420}
        loop={false}
        rewind
        watchOverflow
        threshold={8}
        autoplay={
          prefersReducedMotion
            ? false
            : {
                delay: 5500,
                disableOnInteraction: true,
                pauseOnMouseEnter: false,
              }
        }
        a11y={{
          enabled: true,
          containerMessage: "AZMK məhsul slayderi",
          containerRoleDescriptionMessage: "karusel",
          itemRoleDescriptionMessage: "slayd",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;

          if (prefersReducedMotion) {
            swiper.autoplay?.stop();
          }
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onTouchStart={stopAutoplayAfterInteraction}
        onAutoplayStart={() => setAutoplayEnabled(true)}
        onAutoplayStop={() => setAutoplayEnabled(false)}
      >
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <SwiperSlide
              key={slide.id}
              tag="article"
              className={style.slide}
              aria-label={`${index + 1} / ${slides.length}: ${slide.title}`}
              aria-hidden={!isActive}
              inert={isActive ? undefined : true}
            >
              <div className={style.slideLayout}>
                <div className={style.slideContent}>
                  <p className={style.slideEyebrow}>{slide.eyebrow}</p>

                  <h2>{slide.title}</h2>

                  <p className={style.slideDescription}>{slide.description}</p>

                  {slide.facts.length > 0 && (
                    <dl className={style.facts}>
                      {slide.facts.map((fact) => (
                        <div key={fact.label}>
                          <dt>{fact.label}</dt>
                          <dd>{fact.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {slide.href && (
                    <Link href={slide.href} className={style.slideAction}>
                      {slide.ctaLabel}
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  )}
                </div>

                <div
                  className={`${style.slideVisual} ${slide.type === "campaign" ? style.campaignVisual : ""}`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    width={520}
                    height={380}
                    priority={index === 0}
                    sizes="(max-width: 480px) calc(100vw - 72px), 520px"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className={style.controls} aria-label="Karusel idarəetmələri">
        <div className={style.navigation} aria-label="Slayd naviqasiyası">
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Əvvəlki slayd"
          >
            <ChevronLeft aria-hidden="true" />
          </button>

          <button type="button" onClick={handleNext} aria-label="Növbəti slayd">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>

        <div className={style.slideProgress}>
          <span className={style.slideCount} aria-hidden="true">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>

          <div className={style.pagination} aria-label="Slayd seçimi">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={index === activeIndex ? style.paginationActive : ""}
                onClick={() => handlePagination(index)}
                aria-label={`${slide.title} slaydına keç`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>

        {/* <button
          type="button"
          className={style.autoplayControl}
          onClick={handleAutoplayToggle}
          disabled={prefersReducedMotion}
          aria-pressed={!isAutoplayRunning}
          aria-label={
            prefersReducedMotion
              ? "Azaldılmış hərəkət aktivdir; avtomatik keçid söndürülüb"
              : isAutoplayRunning
                ? "Avtomatik keçidi dayandır"
                : "Avtomatik keçidi davam etdir"
          }
        >
          {isAutoplayRunning ? (
            <Pause aria-hidden="true" />
          ) : (
            <Play aria-hidden="true" />
          )}

          <span>
            {prefersReducedMotion
              ? "Avtomatik keçid söndürülüb"
              : isAutoplayRunning
                ? "Dayandır"
                : "Davam etdir"}
          </span>
        </button> */}
      </div>

      <p
        className={style.srOnly}
        aria-live={isAutoplayRunning ? "off" : "polite"}
        aria-atomic="true"
      >
        {activeSlide
          ? `${activeIndex + 1} / ${slides.length}: ${activeSlide.title}`
          : ""}
      </p>
    </div>
  );
}
