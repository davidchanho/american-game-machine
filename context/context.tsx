import React, { createContext, useContext } from "react";
import fishtableImg from "../public/img/machines/fish-table.png";
import standupsImg from "../public/img/machines/standups.webp";

export const appState = {
  companyName: "American Game Machine",
  contacts: [
    {
      id: "contact-1",
      contact: "address",
      info: ["101 E Carteret Street, Unit 107", "Greensboro, NC 27406"],
      btnLabel: "get directions",
      href: "https://www.google.com/maps/place/101+E+Carteret+St+UNIT+107,+Greensboro,+NC+27406/@36.0373818,-79.7924992,17z/data=!3m1!4b1!4m5!3m4!1s0x885319ac1d05bfdd:0x6be5d01592cda5c9!8m2!3d36.0373775!4d-79.7903105",
      rel: "",
    },
    {
      id: "contact-2",
      contact: "phone",
      info: ["(919) 971-0827"],
      btnLabel: "call us",
      href: "tel:+01-919-306-0509",
      rel: "nofollow",
    },
    {
      id: "contact-3",
      contact: "email",
      info: ["contact@empire-amusement.com"],
      btnLabel: "email us",
      href: "mailto: contact@empire-amusement.com",
      rel: "",
    },
  ],
  category: [
    {
      id: "category-1",
      name: "Stand Ups",
      src: standupsImg,
      link: "/products/stand-ups",
    },
    {
      id: "category-2",
      name: "Fish Tables",
      src: fishtableImg,
      link: "/products/fish-tables",
    },
    {
      id: "category-3",
      name: "Accessories",
      src: fishtableImg,
      link: "/products/accessories",
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
