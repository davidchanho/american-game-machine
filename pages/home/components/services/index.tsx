import React from "react";
import { CardDeck } from "react-bootstrap";
import SectionTitle from "../../../../components/section-title";
import { services } from "../../../../context";
import Service from "./ServicesItem";

function Services() {
  return (
    <section>
      <SectionTitle>Services</SectionTitle>
      <CardDeck>
        {services.map((service) => {
          return <Service key={`service-${service.title}`} {...service} />;
        })}
      </CardDeck>
    </section>
  );
}

export default Services;
