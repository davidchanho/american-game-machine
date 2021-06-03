import React from "react";
import { Container, Navbar as BsNavbar } from "react-bootstrap";
import Brand from "./Brand";
import Nav from "./Nav";
import { NavbarContainer } from "./styles";

export default function Navbar() {
  return (
    <NavbarContainer
      className="w-100"
      expand="sm"
      variant="dark"
    >
      <Container>
        <Brand />
        <BsNavbar.Toggle
          className="text-white"
          aria-controls="responsive-navbar-nav"
        />
        <BsNavbar.Collapse id="responsive-navbar-nav">
          <Nav />
        </BsNavbar.Collapse>
      </Container>
    </NavbarContainer>
  );
}
