import Image from "next/image";
import React from "react";
import { NavItem } from "react-bootstrap";

function Logo() {
  return (
    <div className="d-flex align-items-center text-white">
      <Image
        className="bg-white rounded p-1"
        src="/svg/logo.svg"
        alt="logo"
        width={30}
        height={30}
      />
      <NavItem className="font-weight-bold ml-2">
        <span className="show-desktop">American Game Machine</span>
        <span className="show-tablet">AGM</span>
      </NavItem>
    </div> 
  );
}

export default Logo;
