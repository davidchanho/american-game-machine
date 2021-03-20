import { IService } from "../types";

export interface IServicesState {
  services: IService[];
}

const serviceState: IServicesState = {
  services: [
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
  ],
};

export default serviceState;
