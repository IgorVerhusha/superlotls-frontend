import React, { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import headerLogo from 'public/assets/img/home-page/header/logo.png';
import styles from './styles.module.scss';

type Props = {
  showNav: boolean
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: FC<Props> = ({ showNav, setShowNav }) => {

  return (
    <section className={cn(styles.header, { [styles.active]: showNav })}>
      <Link className={styles.logoLink} href="/">
        <img className={styles.logo} src={headerLogo.src} alt="" />
      </Link>
      <div className={styles.headerRightBlock}>
        <button className={styles.openMenu} onClick={() => setShowNav(true)}>
          <span />
          <span />
          <span />
        </button>
        <div className={styles.navWrapper}>
          <button className={styles.closeMenu} onClick={() => setShowNav(false)}>
            <span />
            <span />
          </button>
          <ul className={styles.nav}>
            <li><Link href="/" className={styles.item}>home</Link></li>
            <li><Link href="/about" className={styles.item}>about</Link></li>
            <li><Link href="/superverse" className={styles.item}>superverse</Link></li>
            <li><Link href="/mint" className={styles.item}>mint</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
