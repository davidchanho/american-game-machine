import React from "react";
import { services } from "../../../context";
import Section from "../../shared/section";
import SectionTitle from "../../shared/section-title";
import ServiceItem from "./ServicesItem";

function Services() {
  return (
    <Section>
      <SectionTitle section="services" />
      <div className='w-100 mx-auto'>
        {services.map((service) => {
          return <ServiceItem key={`service-${service.id}`} {...service} />;
        })}
      </div>
    </Section>
  );
}

export default Services;
