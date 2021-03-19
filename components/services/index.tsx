import React from "react";
import { services } from "../../context";
import Section from "../section";
import Service from "./Service";

function Services() {
  return (
    <Section label="Services">
      {services.map((service) => {
        return <Service key={`services-${service.title}`} {...service} />;
      })}
    </Section>
  );
}

export default Services;
