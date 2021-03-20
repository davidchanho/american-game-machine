import { useRouter } from "next/router";
import React from "react";
import { Navbar as BsNavbar } from "react-bootstrap";
import { logo } from "../../../context";
import Nav from "../nav";
import { Container } from "./styles";

export default function Navbar() {
  const router = useRouter();
  let isHomePage = router.pathname === "/";

  return (
    <Container expand="lg" isHomePage={isHomePage}>
      <BsNavbar.Brand href="/">
        <img src={logo} width={30} height={30} />
      </BsNavbar.Brand>
      <BsNavbar.Toggle aria-controls="navbar-nav" />
      <BsNavbar.Collapse id="navbar-nav">
        <Nav />
      </BsNavbar.Collapse>
    </Container>
  );
}
