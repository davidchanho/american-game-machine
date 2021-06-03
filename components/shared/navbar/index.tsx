import React from "react";
import { Container, Navbar as BsNavbar } from "react-bootstrap";
import Sidebar from "../sidebar";
import Brand from "./Brand";

export default function Navbar() {
  return (
    <BsNavbar expand="xs" variant="dark">
      <Container>
        <Brand />
        <Sidebar />
      </Container>
    </BsNavbar>
  );
}
