import React from "react";
import { ChevronUpIcon } from "../icons";
import Logo from "../navbar/Logo";
import useScroll from "./useScroll";

function BackToTop() {
  const { visible, scrollTop } = useScroll();

  return (
    <nav
      className={`w-100 d-flex align-items-center justify-content-between px-2 pt-2 fixed-top ${
        visible ? "visible" : "invisible"
      }`}
    >
      <div className="w-100 d-flex align-items-center justify-content-between container">
        <Logo />
        <span onClick={scrollTop}>
          <ChevronUpIcon />
        </span>
      </div>
    </nav>
  );
}

export default BackToTop;
