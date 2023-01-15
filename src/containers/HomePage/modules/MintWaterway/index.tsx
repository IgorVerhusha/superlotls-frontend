import React, { FC, Ref, useEffect, useRef } from 'react';
import mainStyles from './../../styles.module.scss';
import styles from './styles.module.scss';
import mintBg from 'public/assets/img/home-page/mint/mint-bg.png';
import waterwayBg from 'public/assets/img/home-page/waterway/waterway-bg.jpg';
import waterwayBlur from 'public/assets/img/home-page/waterway/waterway-blur.jpg';
import bubble from 'public/assets/img/home-page/waterway/bubble.png';
import axolots from 'public/assets/img/home-page/waterway/axolots.gif';
import tab2 from 'public/assets/img/home-page/waterway/tab-2.png';
import tab3 from 'public/assets/img/home-page/waterway/tab-3.png';
import tab4 from 'public/assets/img/home-page/waterway/tab-4.png';
import cn from 'classnames';

type Props = {
  mintWaterwaySection: Ref<HTMLDivElement>
  mintTranslate: number
  activeWaterwayTab: number
  setActiveWaterwayTab: React.Dispatch<React.SetStateAction<number>>
}

const MintWaterway: FC<Props> = (
  { mintWaterwaySection, mintTranslate, activeWaterwayTab, setActiveWaterwayTab }
) => {
  const currWaterwayText = useRef<HTMLDivElement>(null);
  const waterwayText = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!waterwayText.current || !currWaterwayText.current) return;
    const range = currWaterwayText.current.offsetTop - waterwayText.current.offsetTop - 1;
    waterwayText.current.scrollTo({
      top: range,
      behavior: 'smooth'
    });
  }, [activeWaterwayTab]);

  return (
    <section className={styles.mintWaterway} ref={mintWaterwaySection}>
      <div className={styles.mintWaterwayWrap}>
        <div className={styles.mintTest} style={{ transform: `translate(${mintTranslate}vw,0)` }}>
          <section className={styles.mint}>
            <div className={cn(mainStyles.container, styles.container)}>
                  <span className={styles.mainTitle}>
                    Mint<br/>Section</span>
              <div className={styles.mainTextContainer}>
                <p className={styles.mainText}>
                  Your Superlotl will hatch with a powerful and unique 1/1 tattoo that will be available on inkbox.com
                  as an IRL semi-permanent design.
                </p>
                <p className={styles.mainText}>
                  Proceeds for every sale for Season 1 are donated to support Cancer Research.<br/>
                  Exclusive Superloot drops will be available for all holders.<br/> Mint your Superlotl and get ready!
                </p>
              </div>
              <button className={styles.btn}>Mint</button>
              <img src={mintBg.src} alt="" className={styles.bg}/>
              <div className={styles.animeCircle}>
                <div className={styles.wrapperCircle}>
                  <video className={styles.circleAnime} autoPlay muted loop>
                    <source src="/assets/img/home-page/mint/axolotl_placeholder.mp4" type="video/mp4"/>
                  </video>
                  <img src="/assets/img/home-page/mint/axolotl_placeholder-blur.svg" alt=""
                       className={styles.circleBlur}/>
                </div>
              </div>
            </div>
          </section>

          <section
            className={cn(styles.waterway, {
              [styles.first]: activeWaterwayTab === 1,
              [styles.second]: activeWaterwayTab === 2,
              [styles.third]: activeWaterwayTab === 3,
              [styles.four]: activeWaterwayTab === 4,
            })}>
            <img src="/assets/img/home-page/waterway/waterway-blur-black.svg" alt="" className={styles.mintWaterwayBlur} />
            <img className={styles.waterwayBg} src={waterwayBg.src} alt=""/>
            <img className={styles.waterwayBlur} src={waterwayBlur.src} alt=""/>
            <div className={cn(mainStyles.container, styles.container)}>
              <div className={styles.waterwayTabs}>
                <div className={styles.waterwayBubble}>
                  <div className={styles.bubbleContainer}>
                    <img src={bubble.src} alt="" className={styles.bubble}/>
                    <img src={axolots.src} alt="" className={cn(styles.axolots, styles.img1)}/>
                    <img src={tab2.src} alt="" className={cn(styles.axolots, styles.img2)}/>
                    <img src={tab3.src} alt="" className={cn(styles.axolots, styles.img3)}/>
                    <img src={tab4.src} alt="" className={cn(styles.axolots, styles.img4)}/>
                  </div>
                </div>
                <span className={styles.waterwayMaintitle}>INK The Metaverse</span>
                <a onClick={() => setActiveWaterwayTab(1)}
                   className={cn(styles.waterwayTab, { [styles.active]: activeWaterwayTab === 1 })}>
                  Season 1
                </a>
                <a onClick={() => setActiveWaterwayTab(2)}
                   className={cn(styles.waterwayTab, { [styles.active]: activeWaterwayTab === 2 })}>
                  Expression
                </a>
                <a onClick={() => setActiveWaterwayTab(3)}
                   className={cn(styles.waterwayTab, { [styles.active]: activeWaterwayTab === 3 })}>
                  Purpose
                </a>
                <a onClick={() => setActiveWaterwayTab(4)}
                   className={cn(styles.waterwayTab, { [styles.active]: activeWaterwayTab === 4 })}>
                  Forging
                </a>
              </div>
              <div ref={waterwayText} className={styles.waterwayTexts}>
                {/*<span className={cn(styles.hiddenTitle)}>*/}
                {/*  <span className={cn(styles.waterwayMaintitle)}>Waterway</span>*/}
                {/*  Season 1</span>*/}
                <div ref={activeWaterwayTab === 1 ? currWaterwayText : null} className={styles.waterwayText1}>
                  <h4 className={styles.waterwayTitle}>
                    <span className={styles.textAccent}>5,000 Superlotls</span> Hatching<br/> Q1 2023
                  </h4>
                  <ul>
                    <li>Every Superlotl hatches with a unique and powerful 1/1 tattoo.</li>
                    <li>Your Superlotl&apos;s tattoo will be available for sale as an IRL design on <a
                      href="inkbox.com">inkbox.com</a> for all to purchase. Proceeds will be donated to American
                      Cancer Society and is dedicated to helping cancer research. Season 2 donations will be dedicated
                      to charitable organizations decided by our community.
                    </li>
                    <li>Superlotl owners gain access to our 3 reward categories: Expression, Purpose, and Forging.
                    </li>
                    <li>Win epic prizes like IRL tattoos from top global artists, Inkbox discounts and free items,
                      merch, access to tattoo and Web3 events, soul-bounded NFT designs customized to holders, and
                      much more!
                    </li>
                  </ul>
                </div>
                <div ref={activeWaterwayTab === 2 ? currWaterwayText : null} className={styles.waterwayText2}>
                {/*<span className={cn(styles.hiddenTitle)}>*/}
                {/*  <span className={cn(styles.waterwayMaintitle)}>Waterway</span>*/}
                {/*  Season 2</span>*/}
                  <h4 className={styles.waterwayTitle}>
                    <span className={styles.textAccent}>Every tattoo has a story,</span> find out yours and unlock its
                    powers!
                  </h4>
                  <ul>
                    <li>Buy, sell, and collect up to 4 tattoos for your Superlotl.</li>
                    <li>Gain access to pop-up shops, events and tattoo conventions centered around self-expression in
                      the real
                      world and The Metaverse. Superlotl holders get rewards when they visit!
                    </li>
                  </ul>
                </div>
                <div ref={activeWaterwayTab === 3 ? currWaterwayText : null} className={styles.waterwayText3}>
                  {/*<span className={cn(styles.hiddenTitle)}>*/}
                  {/*<span className={cn(styles.waterwayMaintitle)}>Waterway</span>*/}
                  {/*Season 3</span>*/}
                  <h4 className={styles.waterwayTitle}>
                    <span className={styles.textAccent}>Every Superlotl hatches with a unique tattoo</span> that tells the
                    story
                    of the Superherd.
                  </h4>
                  <ul>
                    <li>Your Superlotl’s 1/1 design will be available for purchase as an IRL temporary tattoo on <a
                      href="inkbox.com">inkbox.com</a>, with
                      proceeds donated to charitable organizations with every sale!
                    </li>
                    <li>Season 1’s impact is dedicated to cancer research, with donations going to American Cancer
                      Society.
                    </li>
                    <li>One of the axolotl’s IRL superpowers is that their genomes are 10X stronger than humans,
                      making them
                      remarkably insusceptible to cancer and a natural fit to represent this impact.
                    </li>
                    <li>
                      Together, you and your Superlotl can help fund cancer research!
                    </li>
                  </ul>
                </div>
                <div ref={activeWaterwayTab === 4 ? currWaterwayText : null} className={styles.waterwayText4}>
                 {/*<span className={cn(styles.hiddenTitle)}>*/}
                 {/* <span className={cn(styles.waterwayMaintitle)}>Waterway</span>*/}
                 {/* Season 4</span>*/}
                  <h4 className={styles.waterwayTitle}>
                    The longer you hold, the better your
                    <span className={styles.textAccent}> loot chances.</span>
                  </h4>
                  <ul>
                    <li>Test your luck in our Superloot drops full of merch, NFT&apos;s, crypto and more.</li>
                    <li>Holders are able to get an Inkbox tattoo of their tattoo design as part of the Superherd and
                      soul-bounded designs for long-term members.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default MintWaterway;
