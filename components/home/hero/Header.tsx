import React from "react";
import AppearContainer from "../../shared/appear-container";
import GetAQuote from "../../shared/get-a-quote";

function Header() {
  return (
    <AppearContainer className="header w-75 center-mobile">
      <div className="hero-title">
        Machines and business solutions that meet your needs.
      </div>
      <GetAQuote />
    </AppearContainer>
  );
}

export default Header;
