import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { ChevronUpIcon } from "../icons";
import Logo from "../logo";
import useScroll from "./useScroll";

function BackToTop() {
  const { scrollTop } = useScroll();
  const [inViewRef, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    trackVisibility: true,
    delay: 100,
  });

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const transition = {
    duration: 0.35,
  };

  return (
    <motion.nav
      className="w-100 d-flex align-items-center justify-content-between pb-1 fixed-top bg-dark"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      ref={inViewRef}
    >
      <div className="w-100 d-flex align-items-center justify-content-between container">
        <Logo />
        <span onClick={scrollTop} className="pointer text-white">
          <ChevronUpIcon />
        </span>
      </div>
    </motion.nav>
  );
}

export default BackToTop;
