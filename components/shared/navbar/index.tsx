import React from "react";
import { Container, Navbar as BsNavbar } from "react-bootstrap";
import Brand from "./Brand";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <BsNavbar expand="lg" variant="dark">
      <Container>
        <Brand />
        <BsNavbar.Toggle aria-controls="navbar-nav" />
        <BsNavbar.Collapse id="navbar-nav">
          <Nav />
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
