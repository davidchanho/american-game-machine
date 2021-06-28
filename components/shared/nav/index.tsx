import React, { useState } from "react";
import NavLink from "../nav-link";

const links = [
  { id: "nav-link-0", link: "about" },
  { id: "nav-link-1", link: "category" },
  { id: "nav-link-2", link: "solutions" },
  { id: "nav-link-3", link: "contact" },
];

function Nav() {
  const [active, setActive] = useState(0);

  return (
    <ul className="navbar-nav ms-auto">
      {links.map(({ id, link }, index) => (
        <NavLink
          key={id}
          isActive={active === index}
          handleClick={() => setActive(index)}
          link={link}
        />
      ))}
    </ul>
  );
}

export default Nav;
