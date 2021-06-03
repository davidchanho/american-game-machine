import React, { createContext, useContext } from "react";
import { BiConversation } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";

export const appState = {
  companyName: "American Game Machine",
  address: {
    street: "101 E Carteret Street",
    unit: "107",
    city: "Greensboro",
    state: "NC",
    zipcode: "27406",
  },
  phone: "919-971-0827",
  email: "contact@empire-amusement.com",
  products: [
    {
      id: "product-1",
      name: "Skill Games",
      src: "/img/machines/standups.png",
      details: {
        screen: "43",
        cabinet: "Metal",
        dimensions: 'W23" D20" H82"',
        players: "1",
      },
    },
    {
      id: "product-2",
      name: "fishtables",
      src: "/img/machines/standups.png",
      details: {
        screen: "43",
        cabinet: "Metal",
        dimensions: 'W23" D20" H82"',
        players: "1",
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
