import React, { useState } from 'react';
import cn from 'classnames';
import Header from '@components/Header';
import Footer from './Footer';
import mintBg from 'public/assets/img/home-page/mint/mint-bg.png';
import styles from './styles.module.scss';

const MintPage = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className={cn(styles.wrapper, { [styles.overflowHidden]: showNav })}>
      <Header showNav={showNav} setShowNav={setShowNav} />
      <section className={styles.mint}>
        <img src={mintBg.src} alt="" className={styles.mintBg} />
        <div className={styles.animeCircle}>
          <div className={styles.wrapperCircle}>
            <video className={styles.circleAnime} autoPlay muted loop playsInline>
              <source src="/assets/img/home-page/mint/axolotl_placeholder.mp4" type="video/mp4" />
            </video>
            <img src="/assets/img/home-page/mint/axolotl_placeholder-blur.svg" alt=""
              className={styles.circleBlur} />
          </div>
        </div>
        <div className={cn(styles.mintContainer, styles.container)}>
          <div className={styles.mintRightBlock}>
            <h1 className={styles.mintTitle}>Mint Section</h1>
            <div className={styles.mintTextContainer}>
              <p className={styles.mintText}>
                Your Superlotl will hatch with a powerful and unique 1/1 tattoo
                that will be available on inkbox.com as an IRL semi-permanent
                design.
              </p>
              <p className={styles.mintText}>
                Proceeds for every sale for Season 1 are donated to support
                Cancer Research.
                Exclusive Superloot drops will be available for all holders.
                Mint your Superlotl and get ready!
              </p>
            </div>
            <button className={styles.mintBtn}>SOON...</button>
          </div>
        </div>
      </section>
      <Footer containerClassName={styles.container} />
    </div>
  );
};

export default MintPage;
