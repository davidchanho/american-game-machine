import { IconType } from "react-icons";

export interface IContact {
  id?: string;
  contact: string;
  Icon: IconType;
  info: string[];
  btnLabel: string;
  href?: string;
  rel: string;
}
