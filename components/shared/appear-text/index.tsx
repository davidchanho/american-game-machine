import { motion } from "framer-motion";
import { HTMLAttributes, PropsWithChildren } from "react";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

const transition = {
  duration: 0.35,
};

const AppearText = ({
  className,
  children,
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AppearText;
