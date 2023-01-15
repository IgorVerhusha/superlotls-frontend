import React, { FC } from 'react';
import cn from 'classnames';
import mainStyles from '@containers/HomePage/styles.module.scss';
import styles from './styles.module.scss';
import mainBg from 'public/assets/img/home-page/main-background.png';
import topSmoke from 'public/assets/img/home-page/top-smoke.png';
import bottomSmoke from 'public/assets/img/home-page/bottom-smoke.png';
import rightSmoke from 'public/assets/img/home-page/right-smoke.png';
import waterBlur1 from 'public/assets/img/home-page/water-blur1.png';

type Props = {
  onExecuteScroll: () => void
}

const HomePageMain: FC<Props> = ({ onExecuteScroll }) => {
  return (
    <section className={styles.main}>
      <img
        src={mainBg.src}
        alt=""
        className={styles.mainBackground}
      />
      <img src={topSmoke.src} alt="" className={styles.topSmoke}/>
      <img src={bottomSmoke.src} alt="" className={styles.bottomSmoke}/>
      <img src={rightSmoke.src} alt="" className={styles.rightSmoke}/>
      <div className={styles.water}/>
      <img src={waterBlur1.src} alt="" className={styles.waterBlur1}/>
      <div className={cn(styles.mainContainer, mainStyles.container, styles.containerTop)}>
        <div className={styles.mainInbox}>
          <p>
            All Superlotls hatch with a unique 1/1 tattoo that will be
            available for sale as a semi-permanent tattoo <br/> on
            <a href="https://inkbox.com/" rel="noreferrer" target="_blank"> inkbox.com </a>
            <br/>
            Proceeds for each sale are donated to charitable organizations.
          </p>
        </div>
        <h1 className={styles.mainTitle}>
          <span>Superlotls by Inkbox</span>
        </h1>
        <h2 className={styles.mainSubtitle}>
          Built by the world leader <br/> in semi-permanent tattoos and self
          expression, Superlotl is dedicated to Inking the Metaverse!
        </h2>
        <div className={styles.populationContainer}>
          <h2 className={styles.mainPopulation}>5,000 <span>Population</span></h2>
          <strong>Join the Superherd and gain access to our three reward categories - Expression, Purpose,<br/>
            and Forging.</strong>
          <a className={cn(styles.mainButton, styles.smoothScroll)} onClick={onExecuteScroll}>
            <span>let&apos;s swim</span>
            <img src="/assets/img/home-page/arrow-button.svg" alt=""/>
          </a>
        </div>
      </div>
    </section>
  )
    ;
};

export default HomePageMain;
