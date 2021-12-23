import React, { useState } from "react";
import { Container, Navbar as BsNavbar } from "react-bootstrap";
import Nav from "../../components/nav";
import Brand from "./Brand";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <BsNavbar expand="lg" bg="dark">
      <Container className="w-100 d-flex align-items-center justify-content-between">
        <Brand />

        <BsNavbar.Toggle
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleShow}
        >
          <span className="navbar-toggler-icon"></span>
        </BsNavbar.Toggle>

        <BsNavbar.Collapse className={`${show ? "show" : ""}`} id="navbar">
          <Nav />
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
