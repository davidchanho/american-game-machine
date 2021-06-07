import React from "react";
import Logo from "./Logo";

function Brand() {
  return (
    <a className="navbar-brand d-flex align-items-center pointer" href="/">
      <Logo />
      <p className="nav-item fw-bold ms-2 text-white">AMG</p>
    </a>
  );
}

export default Brand;
