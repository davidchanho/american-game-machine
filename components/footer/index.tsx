import React from "react";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-4 px-5">
        <ContactInfo />
        <Copyright />
      </div>
    </footer>
  );
}

export default Footer;
