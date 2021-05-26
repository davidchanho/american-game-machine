import { motion } from "framer-motion";
import React, {useState} from "react";
import { useInView } from "react-intersection-observer";

function HeroImage() {
  const [rotateX, setRotateX] = useState(56)

  const variants = {
    hidden: { rotateX },
  };

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const transition = {
    ease: "easeOut",
    duration: 2,
  };

  return (
    <motion.img
      initial="hidden"
      animate="hidden"
      variants={variants}
      transition={transition}
      src="/img/machines/hero-firelink.png"
      width={500}
      height={720}
      ref={ref}
    />
  );
}

export default HeroImage;
