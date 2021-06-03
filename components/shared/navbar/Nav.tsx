import React from "react";
import { Nav as BsNav } from "react-bootstrap";


const links = [
  { href: "/#products", label: "products" },
  { href: "/#services", label: "services" },
  { href: "/#contact", label: "contact" },
];

function Nav() {
  return (
    <BsNav className="ms-auto">
      {links.map(({ href, label }) => {
        return (
          <BsNav.Link
            className="text-capitalize"
            key={`nav-link-${label}`}
            href={href}
          >
            {label}
          </BsNav.Link>
        );
      })}
    </BsNav>
  );
}

export default Nav;
