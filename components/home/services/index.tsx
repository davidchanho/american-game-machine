import React from "react";
import { Col, Row } from "react-bootstrap";
import { services } from "../../../context";
import Section from "../../shared/section";
import SectionTitle from "../../shared/section-title";
import ServiceItem from "./ServicesItem";

function Services() {
  return (
    <Section>
      <SectionTitle section="services" />
      <Row className="w-100 mx-auto">
        {services.map((service) => {
          return (
            <Col md={4}>
              <ServiceItem key={`service-${service.id}`} {...service} />
            </Col>
          );
        })}
      </Row>
    </Section>
  );
}

export default Services;
