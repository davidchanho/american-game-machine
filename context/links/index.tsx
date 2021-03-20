import { ILink } from "../types";

export interface ILinkState {
  links: ILink[];
}

const linksState: ILinkState = {
  links: [
    { href: "/", label: "Home" },
    { href: "/photos", label: "Photos" },
    { href: "/contact", label: "Contact" },
  ],
};

export default linksState;
