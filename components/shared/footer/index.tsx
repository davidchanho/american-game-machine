import React from "react";
import Logo from "../navbar/Logo";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container px-5">
        <Logo />
        <ContactInfo />
        <Copyright />
      </div>
    </footer>
  );
}

export default Footer;
