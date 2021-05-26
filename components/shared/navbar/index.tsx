import Image from "next/image";
import React from "react";
import { Container, Navbar as BsNavbar, NavItem } from "react-bootstrap";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <BsNavbar expand="lg">
      <Container>
        <BsNavbar.Brand href="/">
          <Image className='bg-white p-1 rounded' src="/svg/logo.svg" alt="logo" width={30} height={30} />
        </BsNavbar.Brand>
        <NavItem className="font-weight-bold">American Game Machine</NavItem>
        <BsNavbar.Toggle aria-controls="navbar-nav" />
        <BsNavbar.Collapse id="navbar-nav">
          <Nav />
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
