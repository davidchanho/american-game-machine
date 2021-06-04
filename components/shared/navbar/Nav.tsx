import React from "react";

const links = [
  { href: "/#products", label: "products" },
  { href: "/#services", label: "services" },
  { href: "/#contact", label: "contact" },
];

function Nav() {
  return (
    <nav className="nav ms-auto">
      {links.map(({ href, label }) => {
        return (
          <a
            className="nav-link text-capitalize"
            key={`nav-link-${label}`}
            href={href}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
}

export default Nav;
