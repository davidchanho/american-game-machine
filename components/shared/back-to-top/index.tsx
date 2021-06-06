import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import Logo from "../navbar/Logo";

const handleBackToTop = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

function BackToTop() {
  return (
    <nav className="w-100 d-flex align-items-center justify-content-between position-fixed px-3 pt-2">
      <Logo />
      <IoIosArrowUp className="pointer" size={30} onClick={handleBackToTop} />
    </nav>
  );
}

export default BackToTop;
