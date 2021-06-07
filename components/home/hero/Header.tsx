import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

function Header() {
  const { ref, inView, entry } = useInView();

  return (
    <motion.header
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-75 ps-md-5"
    >
      <h1 className="hero-title mb-3">
        Machines and business solutions that meet your needs.
      </h1>
      <a
        href="/#contact"
        className="btn btn-light bg-lg mobile-full"
        role="button"
      >
        Get a Quote
      </a>
    </motion.header>
  );
}

export default Header;
