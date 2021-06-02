import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../navbar/Logo";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Logo />
        <ContactInfo />
        <Copyright />
      </Container>
    </footer>
  );
}

export default Footer;
