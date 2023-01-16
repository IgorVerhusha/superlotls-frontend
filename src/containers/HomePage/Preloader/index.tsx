import React, { FC } from 'react';
import mainBg from '../../../../public/assets/img/home-page/main-background.png';
import cn from 'classnames';
import styles from './styles.module.scss';

type Props = {
  pageIsInit: boolean
}

const Preloader: FC<Props> = ({ pageIsInit }) => {
  return (
    <div
      className={cn(styles.loader, { [styles.hide]: pageIsInit })}
    >
      <img
        src={mainBg.src}
        alt=""
        className={styles.preloaderBg}
      />
      <div
        className={styles.preloaderContent}
      >
      <img
        src="/assets/img/home-page/superlotl.svg"
        alt=""
        className={styles.title}
      />
      <div
        className={styles.spinnerWrapper}
      >
        <img
          src="/assets/img/home-page/spinner.svg"
          alt=""
          className={styles.spinner}
        />
        <div
          className={styles.loaderText}
        >
          Please wait while we load our world...
        </div>
      </div>
      </div>
    </div>
  );
};

export default Preloader;
