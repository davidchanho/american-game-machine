import React from "react";
import AppearText from "../../shared/appear-text";
import GetAQuote from "../../shared/get-a-quote";

function Header() {
  return (
    <AppearText className="w-75 ps-md-5">
      <h1 className="hero-title mb-3">
        Machines and business solutions that meet your needs.
      </h1>
      <GetAQuote />
    </AppearText>
  );
}

export default Header;
