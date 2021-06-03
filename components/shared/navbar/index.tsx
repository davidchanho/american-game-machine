import React from "react";
import { Container, Navbar as BsNavbar } from "react-bootstrap";
import Brand from "./Brand";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <BsNavbar variant="dark">
      <Container>
        <Brand />
        <BsNavbar.Toggle
          className="border-0 p-0 hide-mobile"
          aria-controls="navbar-nav"
        />
        <BsNavbar.Collapse id="navbar-nav">
          <Nav />
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
