import React, { FC, memo, useRef, useState } from 'react';
import Slider from '@containers/HomePage/components/Slider';
import footer from 'public/assets/img/home-page/footer/footer.jpg';
import light from 'public/assets/img/home-page/faq/light.png';
import Header from '@components/Header';
import { ACCORDION_ITEMS } from '@constants/home-page';
import { Accordion } from '@containers/HomePage/components/Accordion';
import HomePageMain from '@containers/HomePage/modules/Main';
import BeginningHomePage from '@containers/HomePage/modules/Beginning';
import MintWaterway from '@containers/HomePage/modules/MintWaterway';
import Preloader from '@containers/HomePage/Preloader';
import cn from 'classnames';
import styles from './styles.module.scss';


const HomePage: FC = () => {
    const [pageIsInit, setPageIsInit] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const beginningSection = useRef<HTMLDivElement>(null);

    const handleExecuteScroll = () => {
      beginningSection?.current?.scrollIntoView(
        { behavior: 'smooth' }
      );
    };

    return (
      <>
        <Preloader
          pageIsInit={pageIsInit}
          setPageIsInit={setPageIsInit}
        />
        <div className={cn(styles.wrapper, { [styles.overflowHidden]: !pageIsInit || showNav })}>
          <Header showNav={showNav} setShowNav={setShowNav} />
          <HomePageMain onExecuteScroll={handleExecuteScroll} />
          <BeginningHomePage
            beginningSectionRef={beginningSection}
          />
          <div className={styles.fadeWrapper}>
            <MintWaterway />
            <Slider />
            <footer className={styles.footerContainer}>
              <img src={footer.src} alt="" className={styles.footerBackground} />
              <img src={light.src} alt="" className={styles.footerLight} />
              <div className={styles.container}>
                <div className={styles.faq}>
                  <h2 className={styles.mainTitle}>Faq</h2>
                  <Accordion accordionItems={ACCORDION_ITEMS} />
                </div>
                <div className={styles.footer}>
                  <div className={styles.joinTop}>
                    <span className={styles.fMainTitle}>Join</span>
                    <span className={styles.fMainTitle}>The</span>
                  </div>
                  <div className={styles.joinBot}>
                    <img src="/assets/img/home-page/footer/footer-arrow.svg" alt="" />
                    <span className={styles.fMainTitle}>Superherd</span>
                  </div>

                  <div className={styles.socials}>
                    <a href="https://twitter.com/superlotls" className={styles.btn}
                    ><img src="/assets/img/home-page/footer/twitter-logo.svg"
                      alt="" /><span>twitter</span></a
                    >
                    <a href="https://www.instagram.com/superlotls/" className={styles.btn}
                    >
                      <img src="/assets/img/home-page/footer/instagram-logo.svg" alt="" /><span>instagram</span></a
                    >
                    <a href="https://discord.gg/superlotls" className={styles.btn}
                    ><img src="/assets/img/home-page/footer/discord-logo.svg"
                      alt="" /><span>discord</span></a
                    >
                  </div>

                  <div className={styles.footerBlockWrapper}>
                    <div className={styles.terms}>
                      {/*<a href="">TERMS & CONDITIONS</a>*/}
                      {/*<a href="">PRIVACY POLICY</a>*/}
                    </div>
                    <div className={styles.powered}>
                      <a href="https://www.niftables.com/" rel="noreferrer" className={styles.powered} target="_blank">
                        <img src="/assets/img/home-page/footer/poweredby.svg" alt="powered by niftables" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </>
    );
  }
;

export default memo(HomePage);
