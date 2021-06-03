import React from "react";

function HeroHeader() {
  return (
    <header className="px-3 h-100 text-left">
      <h1 className="mb-3">
        Skill games and business solutions that meet your needs.
      </h1>
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
