import React from "react";
import { Container } from "react-bootstrap";
import { BiConversation } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import SectionTitle from "../../shared/section-title";
import ServiceItem from "./ServicesItem";
import { IService } from "./types";

const services: IService[] = [
  {
    id: "service-1",
    title: "Store Setup",
    Icon: FaStore,
    description:
      "Ever dreamed of becoming a small business owner? We provide store setup services that get you up and running in no time.",
  },
  {
    id: "service-2",
    title: "Maintenance",
    Icon: GiAutoRepair,
    description:
      "Stuck joysticks, blank screens, random shutdowns... whatever it is, our technicians are here for you.",
  },
  {
    id: "service-3",
    title: "Consulting",
    Icon: BiConversation,
    description:
      "Not only will we help you setup your store, we will help you every step of the way.",
  },
];

function Services() {
  return (
    <section>
      <Container>
        <SectionTitle section="services" />
        <div className='g-4'>
          {services.map((service) => {
            return <ServiceItem key={`service-${service.id}`} {...service} />;
          })}
        </div>
      </Container>
    </section>
  );
}

export default Services;
