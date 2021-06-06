import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import Logo from "../navbar/Logo";
import useScroll from "./useScroll";

function BackToTop() {
  const { visible, scrollTop } = useScroll();
  return (
    <nav
      className={`w-100 d-flex align-items-center justify-content-between px-3 pt-2 fixed-top ${
        visible ? "visible" : "invisible"
      }`}
    >
      <Logo />
      <IoIosArrowUp className="pointer" size={30} onClick={scrollTop} />
    </nav>
  );
}

export default BackToTop;
