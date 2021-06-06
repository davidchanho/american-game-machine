import React, { createContext, useContext } from "react";
import { BiConversation } from "react-icons/bi";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaStore } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";

export const appState = {
  companyName: "American Game Machine",
  contacts: [
    {
      id: "contact-1",
      contact: "address",
      Icon: FaMapMarkerAlt,
      info: ["101 E Carteret Street, Unit 107", "Greensboro, NC 27406"],
      btnLabel: "get directions",
      href: "https://www.google.com/maps/place/101+E+Carteret+St+UNIT+107,+Greensboro,+NC+27406/@36.0373818,-79.7924992,17z/data=!3m1!4b1!4m5!3m4!1s0x885319ac1d05bfdd:0x6be5d01592cda5c9!8m2!3d36.0373775!4d-79.7903105",
      rel: "",
    },
    {
      id: "contact-2",
      contact: "phone",
      Icon: FaPhone,
      info: ["919-971-0827"],
      btnLabel: "call us",
      href: "tel:+01-919-306-0509",
      rel: "nofollow",
    },
    {
      id: "contact-3",
      contact: "email",
      Icon: FaEnvelope,
      info: ["contact@empire-amusement.com"],
      btnLabel: "email us",
      href: "mailto: contact@empire-amusement.com",
      rel: "",
    },
  ],
  products: [
    {
      id: "product-1",
      name: "Stand Ups",
      src: "/img/machines/standups.png",
      details: {
        screen: "43",
        cabinet: "Metal",
        dimensions: "44 cm x 34 cm x 48 cm",
        players: "1",
        weight: "80 kg",
        voltage: "110v-240v",
      },
    },
    {
      id: "product-2",
      name: "Fish Tables",
      src: "/img/machines/standups.png",
      details: {
        screen: "55",
        cabinet: "Metal",
        dimensions: "200 cm x 195 cm x 57cm",
        players: "2-10",
        weight: "250 kg",
        voltage: "110v-240v",
      },
    },
  ],
  services: [
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
  ],
};

export const AppContext = createContext(appState);

export function AppProvider({ children }) {
  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
