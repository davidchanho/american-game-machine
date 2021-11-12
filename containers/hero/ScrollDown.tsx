import Image from "next/image";
import React from "react";

function ScrollDown() {
  return (
    <a
      className="position-absolute bottom-0 start-50 translate-middle-x mb-3 pointer text-white"
      href="/#category"
      aria-label="scroll down"
    >
      <div className="bounce pointer">
        <Image
          src="/svg/arrow-down.svg"
          alt="arrow-down"
          width={30}
          height={30}
        />
      </div>
    </a>
  );
}

export default ScrollDown;
