import React, { HTMLAttributes, useState } from "react";
import Brand from "./Brand";

export default function Navbar({ className }: HTMLAttributes<HTMLDivElement>) {
  const [active, setActive] = useState(0);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav
      className={`navbar navbar-expand-sm navbar-dark bg-dark px-4 ${className}`}
    >
      <Brand />

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleShow}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse ${show ? "show" : ""} navbar-collapse`}
        id="navbar"
      >
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
    </nav>
  );
}
