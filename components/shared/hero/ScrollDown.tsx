import React from "react";
import { ArrowDownIcon } from "../icons";

function ScrollDown() {
  return (
    <a
      className="position-absolute bottom-0 start-50 translate-middle-x mb-3 pointer text-white"
      href="/#category"
      aria-label="scroll down"
    >
      <ArrowDownIcon />
    </a>
  );
}

export default ScrollDown;
