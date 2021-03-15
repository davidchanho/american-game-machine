import React from "react";
import { useAppContext } from "../../context";
import SectionTitle from "../section-title";
import Service from "../service-item";
import Container from "./Container";

function Services() {
  const { services } = useAppContext();

  return (
    <section>
      <SectionTitle title="Services" />
      <Container>
        {services.map((service) => {
          return <Service key={`services-${service.title}`} {...service} />;
        })}
      </Container>
    </section>
  );
}

export default Services;
