import React from "react";
import AppearContainer from "../appear-container";
import GetAQuote from "../get-a-quote";

function Header() {
  return (
    <AppearContainer className="header w-75 center-mobile">
      <div className="hero-title">
        Skill games and business solutions that meet your needs.
      </div>
      <GetAQuote />
    </AppearContainer>
  );
}

export default Header;
