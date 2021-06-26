import React from "react";
import { ChevronUpIcon } from "../icons";
import Logo from "../logo";
import useScroll from "./useScroll";

function BackToTop() {
  const { visible, scrollTop } = useScroll();

  return (
    <nav
      className={`w-100 d-flex align-items-center justify-content-between pb-1 fixed-top bg-dark ${
        visible ? "visible" : "invisible"
      }`}
    >
      <div className="w-100 d-flex align-items-center justify-content-between container">
        <Logo />
        <span onClick={scrollTop} className="pointer text-white">
          <ChevronUpIcon />
        </span>
      </div>
    </nav>
  );
}

export default BackToTop;
