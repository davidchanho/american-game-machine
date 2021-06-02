import React from "react";
import { Navbar } from "react-bootstrap";
import Logo from "./Logo";

function Brand() {
  return (
    <Navbar.Brand href="/">
      <Logo />
    </Navbar.Brand>
  );
}

export default Brand;
