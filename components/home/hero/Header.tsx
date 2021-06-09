import React from "react";
import GetAQuote from "../../shared/get-a-quote";

function Header() {
  return (
    <header className="header w-75 center-mobile">
      <h1 className="hero-title mb-3">
        Machines and business solutions that meet your needs.
      </h1>
      <GetAQuote />
    </header>
  );
}

export default Header;
