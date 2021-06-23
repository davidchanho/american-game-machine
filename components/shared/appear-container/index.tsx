import { motion } from "framer-motion";
import { HTMLAttributes, PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";

interface Props extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
}

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

const AppearContainer = ({
  className,
  children,
  delay = 0.2,
}: PropsWithChildren<Props>) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const transition = {
    delay,
    duration: 0.35,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AppearContainer;
