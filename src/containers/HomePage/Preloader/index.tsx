import React, { FC, useEffect, useState } from 'react';
import mainBg from '../../../../public/assets/img/home-page/main-background.png';
import styles from './styles.module.scss';
import cn from 'classnames';

type Props = {
  pageIsInit: boolean
}

const Preloader: FC<Props> = ({ pageIsInit }) => {
  const [isHide, setIsHide] = useState(false);
  useEffect(() => {
    if (!pageIsInit) return;
    setTimeout(() => setIsHide(true), 500);
  }, [pageIsInit]);
  return (
    <div className={cn(styles.preloader, { [styles.isLoaded]: pageIsInit, [styles.hide]: isHide })}>
      <img
        src={mainBg.src}
        alt=""
        className={styles.preloaderBg}
      />
      <div className={styles.preloaderContent}>
      <img
        src="/assets/img/home-page/superlotl.svg"
        alt=""
        className={styles.title}
      />
      <div className={styles.spinnerWrapper}>
        <img
          src="/assets/img/home-page/spinner.svg"
          alt=""
          className={styles.spinner}
        />
        <div className={styles.loaderText}>
          Please wait while we load our world...
        </div>
      </div>
      </div>
    </div>
  );
};

export default Preloader;
