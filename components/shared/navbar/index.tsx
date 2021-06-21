import React, { useState } from "react";
import Brand from "./Brand";
import Nav from "./Nav";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <nav className="w-100 navbar navbar-expand-lg navbar-dark position-absolute">
      <div className="w-100 container d-flex align-items-center justify-content-between">
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
          <Nav />
        </div>
      </div>
    </nav>
  );
}
