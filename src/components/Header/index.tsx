import React from 'react';
import styles from './styles.module.scss';
import headerLogo from 'public/assets/img/home-page/header/logo.png';

const Header = () => {
  return (
    <section className={styles.header}>
      <a href="#">
        <img className={styles.logo} src={headerLogo.src} alt="" />
      </a>
    </section>
  );
};

export default Header;
