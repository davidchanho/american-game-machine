interface ILink {
  href: string;
  label: string;
}
export interface IAppState {
  links: ILink[];
}

const appState: IAppState = {
  links: [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/photos", label: "Photos" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
    // { href: "auth", label: "Auth" },
  ],
};

export default appState;
