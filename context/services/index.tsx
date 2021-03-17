import { nanoid } from "nanoid";

export interface IService {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface IServiceState {
  services: IService[];
}

const servicesState: IServiceState = {
  services: [
    {
      id: nanoid(),
      icon: "/svg/repair.svg",
      title: "Repair",
      description:
        "Stuck joysticks, blank screens, random shutdowns... whatever it is, our technicians are here for you.",
    },
    {
      id: nanoid(),
      icon: "/svg/store.svg",
      title: "Store Setup",
      description:
        "Ever dreamed of becoming a small business owner? We provide store setup services that get you up and running in no time.",
    },
    {
      id: nanoid(),
      icon: "/svg/consulting.svg",
      title: "Consulting",
      description:
        "Not only will we help you setup your store, we will help you every step of the way.",
    },
  ],
};

export default servicesState;
