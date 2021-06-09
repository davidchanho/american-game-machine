import { motion } from "framer-motion";
import React, { HTMLAttributes, PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";

function AppearText({
  className,
  children,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  const [ref, isVisible] = useInView({ threshold: 0.7 });

  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.header
      ref={ref}
      initial={{ opacity: 0 }}
      variants={variants}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.3, delay: 0.1 }}
      className={className}
    >
      {children}
    </motion.header>
  );
}

export default AppearText;
