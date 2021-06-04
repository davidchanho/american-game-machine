import React from "react";
import { services } from "../../../context";
import Section from "../../shared/section";
import SectionTitle from "../../shared/section-title";
import ServiceItem from "./ServicesItem";

function Services() {
  return (
    <Section>
      <SectionTitle section="services" />
      <div className="row w-100 mx-auto">
        {services.map((service) => {
          return (
            <div className="col row-cols-md-4">
              <ServiceItem key={`service-${service.id}`} {...service} />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default Services;
