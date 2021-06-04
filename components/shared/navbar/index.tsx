import React, { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [active, setActive] = useState(0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <Logo />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${active === 0 ? "active" : ""}`}
                aria-current="page"
                onClick={() => setActive(0)}
                href="/#products"
              >
                Products
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === 1 ? "active" : ""}`}
                onClick={() => setActive(1)}
                href="/#services"
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === 2 ? "active" : ""}`}
                onClick={() => setActive(2)}
                href="/#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
