import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <ul className="navbar-nav ms-auto text-white">
      <li className="nav-link">
        <Link href="/catalog">Catalog</Link>
      </li>
    </ul>
  );
}

export default Nav;
