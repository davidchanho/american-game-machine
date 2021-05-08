import Image from "next/image";
import React from "react";
import { Navbar as BsNavbar } from "react-bootstrap";
import Nav from "../nav";
import { Container } from "./styles";

export default function Navbar() {
  return (
    <Container expand="lg">
      <BsNavbar.Brand href="/">
        <Image src="/svg/logo.svg" width={30} height={30} alt="logo" />
      </BsNavbar.Brand>
      <BsNavbar.Toggle aria-controls="navbar-nav" />
      <BsNavbar.Collapse id="navbar-nav">
        <Nav />
      </BsNavbar.Collapse>
    </Container>
  );
}
