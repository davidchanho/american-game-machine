import { nanoid } from "nanoid";
import { createContext, useContext } from "react";

const contextState = {
  companyInfo: {
    name: "American Game Machine",
    abbreviation: "AGM",
  },
  news: [
    {
      id: nanoid(),
      title: "Website Launched!",
      date: "March 14, 2021",
      body:
        "We are proud to serve The Triangle area, Charlotte Metropolitan Area and beyond!",
    },
  ],
  products: [
    {
      label: "stand ups",
      variants: [
        '43" Flat Screen | Wood Cabinet',
        '43" Flat Screen | Metal Cabinet',
        '43" Curved Screen | Metal Cabinet',
      ],
      description: "",
      games: [],
      image: "/img/standups.png",
    },
    {
      label: "fish tables",
      variants: ['65" Screen', '86" Screen'],
      description: "",
      games: [],
      image: "/img/fishtables.png",
    },
  ],
  accessories: [
    { id: nanoid(), label: "chair", img: "/img/chair.png" },
    { id: nanoid(), label: "chair2", img: "/img/chair.png" },
    { id: nanoid(), label: "chair3", img: "/img/chair.png" },
  ],
  services: [
    {
      icon: "/svg/repair.svg",
      title: "Repair",
      description:
        "Stuck joysticks, blank screens, random shutdowns... whatever it is, our technicians are here for you.",
    },
    {
      icon: "/svg/store.svg",
      title: "Store Setup",
      description:
        "Ever dreamed of becoming a small business owner? We provide store setup services that get you up and running in no time.",
    },
    {
      icon: "/svg/consulting.svg",
      title: "Consulting",
      description:
        "Not only will we help you setup your store, we will help you every step of the way.",
    },
  ],
};

const AppContext = createContext(contextState);

export function AppProvider({ children }) {
  return (
    <AppContext.Provider value={contextState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
