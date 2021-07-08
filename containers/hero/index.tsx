import React from "react";
import Navbar from "../navbar";
import HeroContent from "./HeroContent";
import ScrollDown from "./ScrollDown";
import styles from './index.module.scss'

function Hero() {
  return (
    <section className={styles.container}>
      <Navbar />
      
      <HeroContent />

      <ScrollDown />
    </section>
  );
}

export default Hero;
