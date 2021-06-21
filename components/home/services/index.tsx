import React from "react";
import { services } from "../../../context";
import Section from "../../shared/section";
import ServiceItem from "./ServicesItem";

function Services() {
  return (
    <Section title="services">
      <div className="mx-auto row row-cols-1 row-cols-lg-3 g-4">
        {services.map((service) => (
          <ServiceItem key={`service-${service.id}`} {...service}>
            {service.Icon}
          </ServiceItem>
        ))}
      </div>
    </Section>
  );
}

export default Services;
