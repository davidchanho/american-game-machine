import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import Logo from "../navbar/Logo";
import useScroll from "./useScroll";

function BackToTop() {
  const { scrollTop } = useScroll();

  return (
    <nav className="w-100 d-flex align-items-center justify-content-between px-2 pt-2 fixed-top">
      <Logo />
      <IoIosArrowUp className="pointer" size={30} onClick={scrollTop} />
    </nav>
  );
}

export default BackToTop;
