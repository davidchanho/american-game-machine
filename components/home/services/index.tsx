import React from "react";
import { CardDeck } from "react-bootstrap";
import ServiceItem from "./ServicesItem";

const services = [
  {
    title: "Store Setup",
    description:
      "Ever dreamed of becoming a small business owner? We provide store setup services that get you up and running in no time.",
  },
  {
    title: "Maintenance",
    description:
      "Stuck joysticks, blank screens, random shutdowns... whatever it is, our technicians are here for you.",
  },
  {
    title: "Consulting",
    description:
      "Not only will we help you setup your store, we will help you every step of the way.",
  },
];

function Services() {
  return (
    <CardDeck>
      {services.map((service) => {
        return <ServiceItem key={`service-${service.title}`} {...service} />;
      })}
    </CardDeck>
  );
}

export default Services;
