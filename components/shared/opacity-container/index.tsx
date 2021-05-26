import { motion } from "framer-motion";
import React, { HTMLAttributes, PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";

function OpacityContainer({
  children,
  className,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: "100%",
    },
  };

  const transition = {
    duration: 2,
    ease: "easeOut",
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      ref={ref}
      style={{  width: "100%", margin: '32px auto' }}
    >
      {children}
    </motion.div>
  );
}

export default OpacityContainer;
