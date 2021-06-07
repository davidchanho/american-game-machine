import React, { useState } from "react";
import NavLink from "./NavLink";

function Nav() {
  const [active, setActive] = useState(0);

  return (
    <ul className="navbar-nav ms-auto">
      <NavLink
        isActive={active === 0}
        handleClick={() => setActive(0)}
        link="products"
      />
      <NavLink
        isActive={active === 1}
        handleClick={() => setActive(1)}
        link="services"
      />
      <NavLink
        isActive={active === 2}
        handleClick={() => setActive(2)}
        link="contact"
      />
    </ul>
  );
}

export default Nav;
