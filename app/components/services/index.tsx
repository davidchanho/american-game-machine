import React from "react";
import { useAppContext } from "../../context";
import SectionTitle from "../section-title";
import Item from "./Item";
import { Container } from "./styles";

function Services() {
  const { services } = useAppContext();

  return (
    <section>
      <SectionTitle title="Services" />
      <Container>
        {services.map((service) => {
          return <Item key={`services-${service.title}`} {...service} />;
        })}
      </Container>
    </section>
  );
}

export default Services;
