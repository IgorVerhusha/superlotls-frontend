import React, { TouchEvent, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { ABOUT_SLIDES } from '@constants/about-page';
import LogoBg from 'public/assets/img/about/main/logo-bg.png';
import AboutBg from 'public/assets/img/about/main/about-bg.png';
import mainStyles from './../styles.module.scss';
import styles from './styles.module.scss';

const AboutSection = () => {
  const slides = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [translateWidth, setTranslateWidth] = useState(0);
  const [vw, setVw] = useState<number>();
  const [touchPosition, setTouchPosition] = useState<number>();

  const handleTouchStart = (e: TouchEvent) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touchDown = touchPosition;
    if (touchDown === undefined) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (diff > 5) {
      nextSlide();
    }
    if (diff < -5) {
      prevSlide();
    }
    setTouchPosition(undefined);
  };

  function countVw(a: number, b: number) {
    setVw((screen.width / a) * b);
    setTranslateWidth(slides.current?.children[0].clientWidth as number);
  }

  const countVwDesktop = () => {
    setSlideIndex(0);
    if (screen.width >= 1281) {
      countVw(19.2, 0.1);
    }
    if (screen.width >= 861) {
      countVw(10.24, 0.0867);
    }
    if (screen.width >= 601) {
      countVw(7.68, 0.08);
    }
    if (screen.width <= 600) {
      countVw(3.75, 0.0824);
      setSlideWidth(slideWidth - 90)
      return
    }
    setSlideWidth(0);
  };

  useEffect(() => {
    countVwDesktop();
    window.addEventListener('resize', countVwDesktop);
    return () => window.removeEventListener('resize', countVwDesktop);
  }, []);

  const prevSlide = () => {
    if (slideIndex >= 0) {
      setSlideWidth(slideWidth + translateWidth + (vw || 0));
      setSlideIndex(slideIndex - 1);
    }
  };

  const nextSlide = () => {
    if (slideIndex < ABOUT_SLIDES.length - 3) {
      setSlideWidth(slideWidth - translateWidth - (vw || 0));
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <section className={styles.about}>
      <img src={LogoBg.src} alt="" className={styles.logoBg} />
      <img src={AboutBg.src} alt="" className={styles.aboutBg} />
      <div className={cn(styles.aboutContainer, mainStyles.container)}>
        <h1 className={styles.aboutTitle}>About</h1>
        <p className={styles.aboutSubtitle}>
          Committed to creative expression, Superlotl by Inkbox merges Web2
          and Web3 with an impactful, utility-driven initiative. <br />
          Defined as identity celebrators, Inkbox produces artist-designed semi-permanent
          tattoos and has collaborated with expression icons.
        </p>
        <span className={styles.aboutDescription}>Here are some of them ...</span>
        <div className={styles.aboutSliderWrapper}>
          <div className={styles.slider}>
            <button
              className={cn(styles.buttonPrev, { [styles.inactive]: slideIndex <= -1 })}
              onClick={prevSlide}
            >
              <img src="assets/img/about/main/arrow.svg" alt="" />
            </button>
            <div className={styles.slideContainer} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
              <div className={styles.slideWrapper} ref={slides}
                style={{ transform: `translateX(${slideWidth}px)` }}>
                {ABOUT_SLIDES.map(({ src, title }, index) => (<div
                  key={title}
                  className={cn(styles.slide, { [styles.active]: index === slideIndex + 1 || index === slideIndex + 2 })}>
                  <img src={src} alt="" />
                  <span>{title}</span>
                </div>))}
              </div>
            </div>
            <button
              className={cn(styles.buttonNext, { [styles.inactive]: slideIndex >= ABOUT_SLIDES.length - 3 })}
              onClick={nextSlide}
            >
              <img src="assets/img/about/main/arrow.svg" alt="" />
            </button>
          </div>
          <div className={styles.sliderDescription}>
            <p>
              We believe supporting and expressing identity brings the world a
              little bit closer and it’s important to bring this forward into
              Web3.
            </p>
            <p>
              Let&apos;s make an impact while shaping the future of Web3 together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
