import React from "react";
import {Navbar} from "react-bootstrap";
import Logo from "../../components/logo";

function Brand() {
  return (
    <Navbar.Brand
      className="d-flex align-items-center pointer"
      href="/"
    >
      <Logo />
      <p className="fw-bold ms-2 text-white">American Game Machine</p>
    </Navbar.Brand>
  );
}

export default Brand;
