import React from "react";
import { links } from "../../../context";
import NavLink from "../nav-link";
import { Container } from "./styles";

function Nav() {
  return (
    <Container>
      {links.map(({ href, label }) => {
        return (
          <NavLink key={`nav-link-${label}`} href={href}>
            {label}
          </NavLink>
        );
      })}
    </Container>
  );
}

export default Nav;
