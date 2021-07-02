import { useRouter } from "next/router";
import React from "react";
import home from "../../../public/img/machines/hero-banner.webp";
import AppearContainer from "../appear-container";
import GetAQuote from "../get-a-quote";
import styles from "./HeroContent.module.scss";
import HeroImg from "./HeroImg";

interface Props {
  title: string;
  image: StaticImageData;
}

const renderTemplate = ({ title, image }: Props) => {
  return (
    <div className="w-100 row row-cols-1 row-cols-md-2 g-0 d-flex align-items-center">
      <div className="col">
        <AppearContainer className={styles.header}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <GetAQuote />
        </AppearContainer>
      </div>
      <div className="col d-flex justify-content-end">
        <HeroImg image={image} />
      </div>
    </div>
  );
};

function HeroContent() {
  const router = useRouter();

  if (router.pathname === "/")
    return renderTemplate({
      title: "Machines and business solutions that meet your needs.",
      image: home,
    });

  return renderTemplate({
    title: "Machines and business solutions that meet your needs.",
    image: home,
  });
}

export default HeroContent;
