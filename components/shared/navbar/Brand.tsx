import Image from "next/image";
import React from "react";
import { Navbar, NavItem } from "react-bootstrap";

function Brand() {
  return (
    <Navbar.Brand href="/" className="d-flex align-items-center text-white">
      <Image
        className="bg-white rounded p-1"
        src="/svg/logo.svg"
        alt="logo"
        width={30}
        height={30}
      />
      <NavItem className="font-weight-bold ml-2 hide-mobile">American Game Machine</NavItem>
      <NavItem className="font-weight-bold ml-2 hide-desktop">AGM</NavItem>
    </Navbar.Brand>
  );
}

export default Brand;
