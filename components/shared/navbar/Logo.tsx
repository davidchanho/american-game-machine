import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="d-flex align-items-center  pointer">
      <Image
        className="bg-white rounded p-1"
        src="/svg/logo.svg"
        alt="logo"
        width={30}
        height={30}
      />
      <p className="nav-item fw-bold ms-2">AMG</p>
    </div>
  );
}

export default Logo;
