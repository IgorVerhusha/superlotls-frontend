import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import darkSehloutte from 'public/assets/img/about/roadmap/dark-sehloutte.png';
import semirounds from 'public/assets/img/about/roadmap/semirounds.png';
import vrBubble from 'public/assets/img/about/roadmap/vr-bubble.gif';
import road from 'public/assets/img/about/roadmap/road.png';
import code from 'public/assets/img/about/roadmap/code.gif';
import styles from './styles.module.scss';
import mainStyles from './../styles.module.scss';

const NAVIGATIONS = [
  {
    label: 'Q1 2023'
  },
  {
    label: 'Upcoming in 2023'
  },
  {
    label: 'Beyond'
  }
];

const Roadmap = () => {
  const stepsButtonsContainer = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [buttonsBackground, setButtonBackground] = useState<number>();
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    setButtonBackground(stepsButtonsContainer.current?.children[stepIndex + 1].clientWidth);
    setIsMounted(true);
  }, [isMounted]);

  const changeStep = (step: number) => {
    setStepIndex(step);
    setButtonBackground(stepsButtonsContainer.current?.children[step + 1].clientWidth);
  };


  return (
    <section className={styles.roadmap}>
      <div className={cn(styles.roadmapContainer, mainStyles.container)}>
        <h2 className={styles.roadmapTitle}>Superlotl Roadmap</h2>
        <div className={cn(styles.vr, styles[`step${(stepIndex || 0) + 1}`])}>
          <img
            className={styles.mask}
            src={darkSehloutte.src}
            alt=""
          />
          <img
            className={cn(styles.semirounds, styles.semirounds1)}
            src={semirounds.src}
            alt=""
          />
          <img
            className={cn(styles.semirounds, styles.semirounds2)}
            src={semirounds.src}
            alt=""
          />
          <img
            className={cn(styles.semirounds, styles.semirounds3)}
            src={semirounds.src}
            alt=""
          />
          <img
            className={styles.vrBubble}
            src={vrBubble.src}
            alt=""
          />
          <img className={styles.road} src={road.src} alt="" />
          <img src={code.src} alt="" className={styles.code} />
          <div className={cn(styles.vrText, styles.text1)}>
            <p>
              5000 Superlotls hatch on the blockchain, each with a unique 1/1
              tattoo.
            </p>
            <p>
              All 5000 tattoos are live on <a href="inkbox.com">inkbox.com</a> and available for sale.
            </p>
            <p>
              Launch rewards like IRL pop-ups, air drops, merch and much more!
            </p>
          </div>
          <div className={cn(styles.vrText, styles.text2)}>
            <p>Ink the Metaverse.</p>
            <p>
              Inkbox creates a virtual tattoo shop experience where you can
              enter, engage and ink your avatar.
            </p>
            <p>
              Choose top art from the Superlotl collection, or customize your
              Metaverse avatar with unique 1/1 designs.
            </p>
            <p>
              Attend virtual and IRL events and unlock creative expression in
              the Metaverse and beyond!
            </p>
          </div>
          <div className={cn(styles.vrText, styles.text3)}>
            <p>What’s next for Inkbox in the Metaverse?</p>
            <p>Stay tuned to find out!</p>
          </div>
          <div className={styles.roadmapNavigation}>
            <div ref={stepsButtonsContainer} className={styles.navigationButtonContainer}>
              <div
                className={styles.backgroundButton}
                style={stepsButtonsContainer.current
                  ? { width: `${buttonsBackground || 0}px` } : {}}
              />
              {NAVIGATIONS.map(({ label }, index) => <button
                key={label}
                className={cn(styles.navigationButton, styles[`button${index + 1}`])}
                onClick={() => changeStep(index)}
              >
                {label}
              </button>)}
            </div>
            <svg
              className={styles.navigationLine}
              width="721"
              height="6"
              viewBox="0 0 721 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.1"
                y="4"
                width="721"
                height="1"
                rx="0.5"
                fill="white"
              />
              <rect x="178" y="4" width="26" height="1" fill="#03010D" />
              <rect x="349" y="4" width="26" height="1" fill="#03010D" />
              <rect x="520" y="4" width="26" height="1" fill="#03010D" />
              <path
                className={styles.triangle1}
                d="M191 0L185 6H197L191 0Z"
                fill="#FF66C4"
              />
              <path
                className={styles.triangle2}
                d="M362 0L356 6H368L362 0Z"
                fill="#1c1a25"
              />
              <path
                className={styles.triangle3}
                d="M533 0L527 6H539L533 0Z"
                fill="#1c1a25"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
