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
  const [buttonsBackground, setButtonBackground] = useState<number>();
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    setButtonBackground(stepsButtonsContainer.current?.children[stepIndex + 1].clientWidth)
    setTimeout(()=>setButtonBackground(stepsButtonsContainer.current?.children[stepIndex + 1].clientWidth), 300)
  }, []);

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
          <div style={{zIndex: stepIndex === 0 ? 3 : 2}} className={cn(styles.vrText, styles.text1)}>
            <p>
              5000 Superlotls hatch on the blockchain, each with high-quality 3D traits and a unique 1/1 tattoo.
            </p>
            <p>
              Tattoos are available for sale on <a href="https://inkbox.com/" rel="noreferrer" target="_blank">inkbox.com</a> Donations made to American Cancer Society.
            </p>
            <p>
              Rewards include Inkbox redeemables, tattoos and other giveaways, air drops, merch and much more!
            </p>
          </div>
          <div className={cn(styles.vrText, styles.text2)}>
            <p>Buy, sell, and collect up to 4 tattoos on your Superlotl via Tattoo Pack Drops.</p>
            <p>
              New collabs and partner announcements.
            </p>
            <p>
              Ongoing rewards for holders, the longer you hold the better your Superloot chances. Community fund and empowering artist initiatives activated.
            </p>
            <p>
              Ink The Superverse: attend virtual tattoo shops and IRL events.
            </p>
          </div>
          <div className={cn(styles.vrText, styles.text3)}>
            <p>Season 2 hatches on the blockchain.</p>
            <p>Unlock creative expression in the Superverse and beyond!</p>
            <p>What’s next for Superlotl by Inkbox? Stay tuned to find out!</p>
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
