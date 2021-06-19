import { IconType } from "react-icons";

interface IDetails {
  screen: string;
  cabinet: string;
  dimensions: string;
  players: string;
  weight: string;
  voltage: string;
}

export interface IProduct {
  id: string;
  name: string;
  src: StaticImageData;
  details: IDetails;
}

export interface IContact {
  id?: string;
  contact: string;
  Icon: IconType;
  info: string[];
  btnLabel: string;
  href?: string;
  rel: string;
}

export interface IService {
  id?: string;
  Icon: IconType;
  title: string;
  description: string;
}
