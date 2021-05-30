import React from "react";
import { Container } from "./styles";

const links = [
  { href: "/", label: "home" },
  { href: "/#standups", label: "standups" },
  { href: "/#fishtables", label: "fishtables" },
  { href: "/#services", label: "services" },
  { href: "/#contact", label: "contact" },
];

function Nav() {
  return (
    <Container>
      {links.map(({ href, label }) => {
        return (
          <a key={`nav-link-${label}`} href={href}>
            {label}
          </a>
        );
      })}
    </Container>
  );
}

export default Nav;
