import React from "react";
import { Nav as BsNav } from "react-bootstrap";
import { NavContainer } from "./styles";

const links = [
  { href: "/#products", label: "products" },
  { href: "/#services", label: "services" },
  { href: "/#contact", label: "contact" },
];

function Nav() {
  return (
    <NavContainer>
      {links.map(({ href, label }) => {
        return (
          <BsNav.Link className='text-capitalize' key={`nav-link-${label}`} href={href}>
            {label}
          </BsNav.Link>
        );
      })}
    </NavContainer>
  );
}

export default Nav;
