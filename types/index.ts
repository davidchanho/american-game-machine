import { HTMLAttributes, ReactNode } from "react";

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

export interface IContact extends HTMLAttributes<HTMLDivElement> {
  id?: string;
  contact: string;
  info: string[];
  btnLabel: string;
  href?: string;
  rel: string;
}

export interface IService extends HTMLAttributes<HTMLDivElement> {
  id?: string;
  title: string;
  description: string;
}
