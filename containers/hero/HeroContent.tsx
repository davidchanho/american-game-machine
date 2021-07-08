import React from "react";
import home from "../../public/img/machines/hero-banner.webp";
import AppearContainer from "../../components/appear-container";
import GetAQuote from "../../components/get-a-quote";
import styles from "./HeroContent.module.scss";
import HeroImg from "./HeroImg";

function HeroContent() {
  return (
    <div className="w-100 row row-cols-1 row-cols-md-2 g-0 d-flex align-items-center">
      <div className="col">
        <AppearContainer className={styles.header}>
          <h1 className={styles.heroTitle}>
            American Game Machine - Skill Games & Fish Tables that meet your
            needs.
          </h1>
          <p></p>
          <GetAQuote />
        </AppearContainer>
      </div>
      <div className="col d-flex justify-content-end">
        <HeroImg image={home} />
      </div>
    </div>
  );
}

export default HeroContent;
