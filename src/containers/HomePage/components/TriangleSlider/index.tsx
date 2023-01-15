import React, { useState } from 'react';
import cn from 'classnames';
import gif1 from 'public/assets/img/home-page/beginning/slide1.png';
import gif2 from 'public/assets/img/home-page/beginning/slide2.png';
import gif3 from 'public/assets/img/home-page/beginning/slide3.png';
import { useWindowSize } from '@hooks/useWindowSize';
import styles from './styles.module.scss';


const TriangleSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [rotate, setRotate] = useState(0);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width && windowSize.width < 600;

  const handleActiveSlide = (slideIndex: number, newRotate: number) => {
    setActiveSlide(slideIndex);
    setRotate(newRotate);
  };

  return (
    <>
      <div className={styles.beginningSlider}>
        <img
          src="/assets/img/home-page/beginning/beginning-slider-circle.svg"
          alt=""
          className={styles.circleBackground}
          style={{ transform: `rotate(${rotate}deg)` }}
        />
        <img
          className={styles.triangle}
          src="/assets/img/home-page/beginning/triangle.svg"
          alt=""
        />
        <div
          onClick={() => {
            if (activeSlide === 1) handleActiveSlide(2, isMobile ? rotate - 120 : rotate + 120);
            if (activeSlide === 3) handleActiveSlide(2, isMobile ? rotate + 120 : rotate - 120);
          }}
          className={cn(styles.circle,
            {
              [styles.active]: activeSlide === 2,
              [styles.top]: activeSlide === 1,
              [styles.left]: activeSlide === 3,
            }
          )}
        >
          02
        </div>
        <div onClick={() => {
          if (activeSlide === 3) handleActiveSlide(1, isMobile ? rotate - 120 : rotate + 120);
          if (activeSlide === 2) handleActiveSlide(1, isMobile ? rotate + 120 : rotate - 120);
        }}
             className={cn(styles.circle,
               {
                 [styles.active]: activeSlide === 1,
                 [styles.top]: activeSlide === 3,
                 [styles.left]: activeSlide === 2,
               }
             )}>
          01
        </div>
        <div onClick={() => {
          if (activeSlide === 2) handleActiveSlide(3, isMobile ? rotate - 120 : rotate + 120);
          if (activeSlide === 1) handleActiveSlide(3, isMobile ? rotate + 120 : rotate - 120);
        }}
             className={cn(styles.circle,
               {
                 [styles.active]: activeSlide === 3,
                 [styles.top]: activeSlide === 2,
                 [styles.left]: activeSlide === 1,
               })}>
          03
        </div>
        <img src={gif1.src} alt="" className={cn(styles.gif, {[styles.active]: activeSlide === 1})}/>
        <img src={gif2.src} alt="" className={cn(styles.gif, {[styles.active]: activeSlide === 2})}/>
        <img src={gif3.src} alt="" className={cn(styles.gif, {[styles.active]: activeSlide === 3})}/>
      </div>
      <div className={styles.beginningRightBlock}>
        <h2>
          Return <br/>
          of the Herd <br/>
          <span>Learn the History</span>
        </h2>
        <strong className={cn({ [styles.active]: activeSlide === 1 })}>
          Superlotls are the most unique creatures in the universe that thrive
          in an underwater community. With incredible powers of healing and regeneration, the Superherd thought
          they were untouchable.
          <span>
                  A history this remarkable needed to be preserved and they did so by marking themselves with
                  special tattoos using ink harvested and forged from their rich waterways.
                </span>
        </strong>
        <strong className={cn({ [styles.active]: activeSlide === 2 })}>
          But over time, the lush waterways became dulled by activity from above. The
          Superherd’s healing powers were no match to the pollution and their population began weakening.

          <span>
                  Their leader, the strongest of all Superlotls, Elderlotl, had lived through centuries but never
                  encountered such devastation.
                </span>
        </strong>
        <strong className={cn({ [styles.active]: activeSlide === 3 })}>
          Pouring over ancient texts, Elderlotl learned how to unlock the potential of
          their tattoos, each
          carrying a unique power and story.
          <span>
                  Now unlocking the true power of their ink, the Superherd needs help to grow their population, ink
                  their future, and return peace not only to their region, but all regions impacted by human
                  intervention.
                </span>
        </strong>
      </div>
    </>
  );
};

export default TriangleSlider;
