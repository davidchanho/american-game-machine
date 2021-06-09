import React from "react";
import AppearText from "../../shared/appear-text";
import GetAQuote from "../../shared/get-a-quote";

function Header() {
  return (
    <AppearText className="header w-75 center-mobile">
      <h1 className="hero-title mb-3">
        Machines and business solutions that meet your needs.
      </h1>
      <GetAQuote />
    </AppearText>
  );
}

export default Header;
