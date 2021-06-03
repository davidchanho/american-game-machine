import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { services } from "../../../context";
import SectionTitle from "../../shared/section-title";
import ServiceItem from "./ServicesItem";

function Services() {
  return (
    <section>
      <Container className="position-absolute top-50 start-50 translate-middle">
        <SectionTitle section="services" />
        <Row sm={1} md={3}>
          {services.map((service) => {
            return (
              <Col>
                <ServiceItem key={`service-${service.id}`} {...service} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
