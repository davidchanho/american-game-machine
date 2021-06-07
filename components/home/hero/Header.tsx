import React from "react";

function Header() {
  return (
    <header className="w-75 ps-md-5">
      <h1 className="hero-title mb-3">
        Machines and business solutions that meet your needs.
      </h1>
      <a
        href="/#contact"
        className="btn btn-light bg-lg mobile-full"
        role="button"
      >
        Get a Quote
      </a>
    </header>
  );
}

export default Header;
