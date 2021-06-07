import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Image
      className="bg-white rounded p-1"
      src="/svg/logo.svg"
      alt="logo"
      width={30}
      height={30}
    />
  );
}

export default Logo;
