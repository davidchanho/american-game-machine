import React from "react";
import NavLink from "./NavLink";
import { Container } from "./styles";

const links = [
  { href: "/", label: "home" },
  { href: "/photos", label: "photos" },
  { href: "/contact", label: "contact" },
];

function Nav() {
  return (
    <Container>
      {links.map(({ href, label }) => {
        return (
          <NavLink key={`nav-link-${label}`} href={href} >
            {label}
          </NavLink>
        );
      })}
    </Container>
  );
}

export default Nav;
