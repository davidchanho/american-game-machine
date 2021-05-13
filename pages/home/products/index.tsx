import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

function Products() {
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
    <>
      <motion.section
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 2, ease: "easeOut" }}
        ref={ref}
      >
        <h2>Stand Ups</h2>
        <p>Classic Slot Games</p>
        <p>43" flat screen & 43" curved screen</p>
      </motion.section>
      <motion.section
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 2, ease: "easeOut" }}
        ref={ref}
      >
        <h2>Fish Tables</h2>
        <p>Skill Games</p>
        <p>63" & 85" screens</p>
      </motion.section>
      <motion.section
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 2, ease: "easeOut" }}
        ref={ref}
      >
        <h2>Accessories</h2>
        <p>Chairs</p>
        <p>Desks</p>
      </motion.section>
    </>
  );
}

export default Products;
