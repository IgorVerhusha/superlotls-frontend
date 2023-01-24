import React, { TouchEvent, useEffect, useRef, useState } from 'react';
import Header from '@components/Header';
import cn from 'classnames';
import Footer from '@containers/Superverse/Footer';
import aboutBg from 'public/assets/img/about/main/about-bg.png';
import lineLeft from 'public/assets/img/superverse/line-left.png';
import comics1 from 'public/assets/img/superverse/comics1.png';
import comics2 from 'public/assets/img/superverse/comics2.png';
import comics3 from 'public/assets/img/superverse/comics3.png';
import comics4 from 'public/assets/img/superverse/comics4.png';
import comics5 from 'public/assets/img/superverse/comics5.png';
import comics6 from 'public/assets/img/superverse/comics6.png';
import styles from './styles.module.scss';


const SLIDES = [
  {
    src: comics1.src
  },
  {
    src: comics2.src
  },
  {
    src: comics3.src
  },
  {
    src: comics4.src
  },
  {
    src: comics5.src
  },
  {
    src: comics6.src
  }
];

const SuperversePage = () => {
  const [showNav, setShowNav] = useState(false);
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
  }

  const countVwDesktop = () => {
    setSlideWidth(slides.current?.children[0].clientWidth as number);
    setTranslateWidth(0);
    setSlideIndex(0);
    if (screen.width >= 1281) {
      countVw(19.2, 0.2);
      return;
    }
    if (screen.width >= 861) {
      countVw(10.24, 0.18);
      return;
    }
    if (screen.width >= 601) {
      countVw(7.68, 0.1958);
      return;
    }
    if (screen.width <= 600) {
      countVw(3.75, 0.1814);
      return;
    }
  };

  useEffect(() => {
    countVwDesktop();
    window.addEventListener('resize', countVwDesktop);
    return () => window.removeEventListener('resize', countVwDesktop);
  }, []);

  const prevSlide = () => {
    if (slideIndex === 0) return;
    setTranslateWidth(slideWidth + translateWidth + (vw || 0));
    setSlideIndex(slideIndex - 1);
  };

  const nextSlide = () => {
    if (slideIndex >= SLIDES.length - 3) return;
    setTranslateWidth(translateWidth - slideWidth - (vw || 0));
    setSlideIndex(slideIndex + 1);
  };

  return (
    <div className={cn(styles.wrapper, { [styles.overflowHidden]: showNav })}>
      <Header showNav={showNav} setShowNav={setShowNav} />
      <section className={styles.superverse}>
        <img src={aboutBg.src} alt="" className={styles.superverseBg} />
        <div className={cn(styles.superverseContainer, styles.container)}>
          <h1 className={styles.susuperverseTitle}>Superverse</h1>
          <div className={styles.superverseSliderWrapper}>
            <button className={cn(styles.buttonPrev, { [styles.inactive]: slideIndex === 0 })} onClick={prevSlide}>
              <img src="assets/img/about/main/arrow.svg" alt="" />
            </button>
            <button className={cn(styles.buttonNext, { [styles.inactive]: slideIndex >= SLIDES.length - 3 })}
              onClick={nextSlide}>
              <img src="assets/img/about/main/arrow.svg" alt="" />
            </button>
            <span className={styles.buttonText}>6 pages of history</span>
            <div className={styles.slideContainer}>
              <img src={lineLeft.src} alt="" className={styles.lineLeft} />
              <img src={lineLeft.src} alt="" className={styles.lineRight} />
              <div className={styles.slideWrapper} ref={slides}
                style={{ transform: `translateX(${translateWidth}px)` }}>
                {SLIDES.map(({ src }, index) => <img key={index} src={src} alt="" className={styles.slide} />)}
              </div>
            </div>
          </div>
          <div className={styles.superverseSliderWrapper}>
            <div className={styles.slideContainer}>
              <img src={lineLeft.src} alt="" className={styles.lineLeft} />
              <img src={lineLeft.src} alt="" className={styles.lineRight} />
              <h2>coming soon...</h2>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SuperversePage;
