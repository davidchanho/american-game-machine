import React from "react";
import { useInView } from "react-intersection-observer";
import { companyName } from "../../../context";
import { HeroContainer } from "./styles";

function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1 },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <HeroContainer
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 2, ease: "easeOut" }}
      ref={ref}
    >
      <span>{companyName}</span> helps businesses get started, stay well
      maintained, and grow.
    </HeroContainer>
  );
}

export default Hero;
