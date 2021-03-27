import { ILink } from "../types";

export interface ILinkState {
  links: ILink[];
}

const linksState: ILinkState = {
  links: [
    { href: "/", label: "home" },
    { href: "/photos", label: "photos" },
    { href: "/contact", label: "contact" },
  ],
};

export default linksState;
