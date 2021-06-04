import React from "react";
import Brand from "./Brand";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Brand />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-nav">
          <Nav />
        </div>
      </div>
    </header>
  );
}
