import React from "react";
import { Title } from "./styles";

function HeroHeader() {
  return (
    <header className="px-3 h-100 text-left">
      <Title className="mb-3">
        Skill games and business solutions that meet your needs.
      </Title>
      <a
        href="/#contact"
        className="btn btn-light bg-lg mobile-full"
        role="button"
      >
        Contact Us
      </a>
    </header>
  );
}

export default HeroHeader;
