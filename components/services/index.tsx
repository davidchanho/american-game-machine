import React from "react";
import { services } from "../../context";
import DescriptionCard from "../_shared/card/description-card";
import Section from "../_shared/section";

function Services() {
  return (
    <Section label="Services">
      {services.map((service) => {
        return <DescriptionCard key={`service-${service.id}`} {...service} />;
      })}
    </Section>
  );
}

export default Services;
