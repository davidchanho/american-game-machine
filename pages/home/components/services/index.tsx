import React from "react";
import { CardDeck } from "react-bootstrap";
import SectionTitle from "../../../../components/section-title";
import Service from "./ServicesItem";

const services = [
  {
    src: "/svg/store.svg",
    title: "Store Setup",
    description:
      "Ever dreamed of becoming a small business owner? We provide store setup services that get you up and running in no time.",
  },
  {
    src: "/svg/maintenance.svg",
    title: "Maintenance",
    description:
      "Stuck joysticks, blank screens, random shutdowns... whatever it is, our technicians are here for you.",
  },
  {
    src: "/svg/consulting.svg",
    title: "Consulting",
    description:
      "Not only will we help you setup your store, we will help you every step of the way.",
  },
];

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
