import React from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "./styles";
import { Props } from "./types";

function ServicesItem({ title, description }: Props) {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: {
      opacity: 0,
      scale: 0,
    },
  };
  
  return (
    <Card
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 2, ease: "easeOut" }}
      ref={ref}
      className="magic"
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </Card>
  );
}

export default ServicesItem;
