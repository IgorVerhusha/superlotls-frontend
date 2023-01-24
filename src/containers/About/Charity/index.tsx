import React from 'react';
import cn from 'classnames';
import charityBg from 'public/assets/img/about/charity/charity-bg.png';
import charityAxolots1 from 'public/assets/img/about/charity/charity-axolots1.png';
import charityAxolots2 from 'public/assets/img/about/charity/charity-axolots2.png';
import heart from 'public/assets/img/about/charity/heart.png';
import planet from 'public/assets/img/about/charity/planet.png';
import styles from './styles.module.scss';
import mainStyles from './../styles.module.scss';

const Charity = () => {
  return (
    <section className={styles.charity}>
      <img
        src={charityBg.src}
        alt=""
        className={styles.charityBg}
      />
      <img
        src={charityAxolots1.src}
        alt=""
        className={styles.charityAxolots1}
      />
      <img
        src={charityAxolots2.src}
        alt=""
        className={styles.charityAxolots2}
      />
      <div className={styles.heartContainer}>
        <div className={styles.heartWrapper}>
          <img src={heart.src} alt="" className={styles.heart} />
          <img src={planet.src} alt="" className={styles.planet} />
        </div>
      </div>
      <div className={cn(styles.charityContainer, mainStyles.container)}>
        <h2 className={styles.charityTitle}>Superlotl Charitable Impact</h2>
        <div className={styles.charitySubtitleWrapper}>
          <p>
            Inkbox is dedicated to giving back to charitable organizations
            that strike home with not only axolotls and our team, but with
            billions across the world. Proceeds from physical tattoo sales
            will be donated to charities committed to cancer research for
            Season 1, and other impactful organizations decided by our
            community. Together, we can make a difference!
          </p>
          <p>
            All Superlotl tattoo designs will be available for purchase as an
            IRL semi-permanent tattoo on <a href="https://inkbox.com/" target="_blank" rel="noreferrer">inkbox.com</a>,
            with proceeds donated to charitable organizations with every sale.
          </p>
          <p>
            Season 1 is dedicated to supporting cancer research through <a href="https://www.cancer.org/">American Cancer Society</a>.
            One of the axolotl’s IRL
            superpowers is that their genomes are 10x stronger than humans,
            making them remarkably insusceptible to cancer, and a natural fit
            to represent this initiative.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Charity;
