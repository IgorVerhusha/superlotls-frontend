import React from 'react';
import Header from '@components/Header';
import AboutSection from '@containers/About/AboutSection';
import Charity from '@containers/About/Charity';
import Roadmap from '@containers/About/Roadmap';
import Story from '@containers/About/Story';
import Footer from '@containers/About/Footer';
import styles from './styles.module.scss';

const AboutPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <AboutSection />
      <Charity />
      <Roadmap />
      <Story />
      <Footer />
    </div>
  );
};

export default AboutPage;
