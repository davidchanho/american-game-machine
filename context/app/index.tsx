import { nanoid } from "nanoid";

interface ILink {
  href: string;
  label: string;
}

export interface IService {
  id: string;
  src: string;
  title: string;
  description: string;
}

export interface IAppState {
  name: string;
  logo: string;
  links: ILink[];
  services: IService[];
}

const appState: IAppState = {
  name: "American Game Machine",
  logo: "/svg/logo.svg",
  links: [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/photos", label: "Photos" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    {
      id: nanoid(),
      src: "/svg/store.svg",
      title: "Store Setup",
      description:
        "Ever dreamed of becoming a small business owner? We provide store setup services that get you up and running in no time.",
    },
    {
      id: nanoid(),
      src: "/svg/repair.svg",
      title: "Repair",
      description:
        "Stuck joysticks, blank screens, random shutdowns... whatever it is, our technicians are here for you.",
    },
    {
      id: nanoid(),
      src: "/svg/consulting.svg",
      title: "Consulting",
      description:
        "Not only will we help you setup your store, we will help you every step of the way.",
    },
  ],
};

export default appState;

export const companyName = appState.name;
export const logo = appState.logo;
export const links = appState.links;
export const services = appState.services;
