import React from "react";
import Logo from "../../components/logo";

function Brand() {
  return (
    <a className="navbar-brand d-flex align-items-center pointer" href="/">
      <Logo />
      <p className="nav-item fw-bold ms-2 text-white">American Game Machine</p>
    </a>
  );
}

export default Brand;
