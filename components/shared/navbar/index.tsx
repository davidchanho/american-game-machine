import React, { useState } from "react";
import Brand from "./Brand";
import Nav from "./Nav";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <nav className="w-100 navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
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
