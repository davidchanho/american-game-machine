import Image from "next/image";
import React from "react";
import { Navbar, NavItem } from "react-bootstrap";

function Brand() {
  return (
    <Navbar.Brand href="/" className="d-flex text-white">
      <Image
        className="mr-2"
        src="/svg/logo.svg"
        alt="logo"
        width={30}
        height={30}
      />
      <NavItem className="font-weight-bold">American Game Machine</NavItem>
    </Navbar.Brand>
  );
}

export default Brand;
