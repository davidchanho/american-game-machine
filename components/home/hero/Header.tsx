import React from "react";
import AppearText from "../../shared/appear-text";
import GetAQuote from "../../shared/get-a-quote";

function Header() {
  return (
    <AppearText className="header w-75 center-mobile">
      <div className="hero-title">
        Machines and business solutions that meet your needs.
      </div>
      <GetAQuote />
    </AppearText>
  );
}

export default Header;
