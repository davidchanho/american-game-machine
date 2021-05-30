import React from "react";
import { Container } from "react-bootstrap";
import { companyName } from "../../../context";
import Brand from "../navbar/Brand";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Brand />
        <h3>Address</h3>
        <p>101 E Cartert Street, Unit 107</p>
        <p>Greensboro, NC 27406</p>
        {companyName}™ 2021
      </Container>
    </footer>
  );
}

export default Footer;
