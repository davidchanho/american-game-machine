import React from "react";
import { useAppContext } from "../../../context";
import Section from "../../shared/section";

import Service from "./Service";

function Services() {
    const {
      state: {services },
    } = useAppContext();
    
  return (
    <Section label="Services">
      {services.map((service) => {
        return <Service key={`services-${service.title}`} {...service} />;
      })}
    </Section>
  );
}

export default Services;
