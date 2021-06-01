import React from "react";
import { CardDeck, Card, Col, Container, Row } from "react-bootstrap";
import { companyName } from "../../../context";
import Brand from "../navbar/Brand";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Brand />
        <CardDeck className="my-3">
          <Card>
            <h4>Address</h4>
            <p>101 E Cartert Street, Unit 107</p>
            <p>Greensboro, NC 27406</p>
          </Card>
          <Card>
            <h4>Phone</h4>
            <p>919-971-0827</p>
          </Card>
          <Card>
            <h4>Email</h4>
            <p>contact@empire-amusement.com</p>
          </Card>
        </CardDeck>
        <small>{companyName}™ 2021</small>
      </Container>
    </footer>
  );
}

export default Footer;
