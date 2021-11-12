import Image from "next/image";
import React from "react";

function ScrollDown() {
  return (
    <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 pointer bounce pointer">
      <a href="/#category" aria-label="scroll down">
        <Image
          src="/svg/arrow-down.svg"
          alt="arrow-down"
          width={30}
          height={30}
        />
      </a>
    </div>
  );
}

export default ScrollDown;
