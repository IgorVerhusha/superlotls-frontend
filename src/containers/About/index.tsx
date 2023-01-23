import React, { useState } from 'react';
import cn from 'classnames';
import Header from '@components/Header';
import AboutSection from '@containers/About/AboutSection';
import Charity from '@containers/About/Charity';
import Roadmap from '@containers/About/Roadmap';
import Story from '@containers/About/Story';
import Footer from '@containers/About/Footer';
import styles from './styles.module.scss';

const AboutPage = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className={cn(styles.wrapper, { [styles.overflowHidden]: showNav })}>
      <Header showNav={showNav} setShowNav={setShowNav} />
      <AboutSection />
      <Charity />
      <Roadmap />
      <Story />
      <Footer />
    </div>
  );
};

export default AboutPage;
