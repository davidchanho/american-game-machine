import React from "react";
import { Container, Navbar as BsNavbar } from "react-bootstrap";
import Brand from "./Brand";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <BsNavbar className="position-absolute w-100">
      <Container>
        <Brand />
        <Nav />
      </Container>
    </BsNavbar>
  );
}
