import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import mainStyles from '@containers/HomePage/styles.module.scss';
import TriangleSlider from '@containers/HomePage/components/TriangleSlider';
import { useWindowSize } from '@hooks/useWindowSize';
import styles from './styles.module.scss';
import waterBlur from 'public/assets/img/home-page/water-blur.png';
import beginningBackground from 'public/assets/img/home-page/beginning/beginning-background.png';
import bubbles1 from 'public/assets/img/home-page/bubbles1.png';
import cn from 'classnames';
import bubbles2 from 'public/assets/img/home-page/bubbles2.png';
import bubbles3 from 'public/assets/img/home-page/bubbles3.png';
import bubbles4 from 'public/assets/img/home-page/bubbles4.png';

type Props = {
  beginningSectionRef: React.RefObject<HTMLDivElement>
}

const BUBBLES = [
  bubbles1.src,
  bubbles2.src,
  bubbles3.src,
  bubbles4.src,
];


const BeginningHomePage: FC<Props> = ({ beginningSectionRef }) => {
  const [activeBubble, setActiveBubble] = useState(0);
  const [beginningScroll, setBeginningScroll] = useState(0);
  const [beginningOpacity, setBeginningOpacity] = useState(0);
  const windowSize = useWindowSize();

  useEffect(() => {
    const bubbleInterval = setInterval(() => {
      setActiveBubble(prev => {
        if (prev >= 3) return 0;
        return prev + 1;
      });
    }, 1500);
    return () => clearInterval(bubbleInterval);
  }, []);

  useEffect(() => {
    if (windowSize.width && windowSize.width < 1280) return;
    const onScroll = () => {
      if (!beginningSectionRef.current) return;
      const begScroll = (-1 * beginningSectionRef.current.getBoundingClientRect().y / (beginningSectionRef.current.clientHeight / 100));
      setBeginningScroll(begScroll);
      if (begScroll < 26) {
        setBeginningOpacity(1);
      } else if (begScroll >= 26 && begScroll <= 46) {
        const begOpacity = (46 - begScroll) / 20;
        setBeginningOpacity(begOpacity);
        if (begOpacity <= 0.05) {
          setBeginningOpacity(0);
        }
        if (begOpacity >= 0.95) {
          setBeginningOpacity(1);
        }
      } else if (begScroll > 46) {
        setBeginningOpacity(0);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [windowSize.width]);

  return (
    <section
      className={styles.beginning} ref={beginningSectionRef}
      style={windowSize.width && windowSize.width < 1280 ? {} : {
        zIndex: beginningOpacity > 0 ? 9 : -1,
        opacity: beginningOpacity
      }}
    >
      <img src={waterBlur.src} alt="" className={styles.waterBlur}/>
      <div className={styles.beginningWrapper}>
        <img src="/assets/img/home-page/waterway/waterway-blur-black.svg" alt="" className={styles.beginningBlur}/>
        <div className={styles.beginningContainer}>
          <Image
            style={{ transform: beginningScroll > 10 ? `scale(${Math.round(beginningScroll) / 10})` : `scale(1)` }}
            className={styles.beginningBackground}
            src={beginningBackground.src}
            alt=""
            width={3840}
            height={2344}
          />
          {BUBBLES.map((item, index) => <img
            src={item}
            key={index}
            alt=""
            className={cn(styles[`bubbles${index + 1}`], { [styles.active]: activeBubble === index })}
          />)}
          <div
            className={cn(styles.beginning__container, mainStyles.container, { [styles.remove]: beginningScroll > 14 })}
          >
            <TriangleSlider/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeginningHomePage;
