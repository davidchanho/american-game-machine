import { motion } from "framer-motion";
import { HTMLAttributes, PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

const transition = {
  delay: 0.2,
  duration: 0.35,
};

const AppearContainer = ({
  className,
  children,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

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
