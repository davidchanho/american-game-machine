import React from "react";
import { Container, NavLink } from "react-bootstrap";
import { RiArrowDownSLine } from "react-icons/ri";
import Navbar from "../../shared/navbar";

function Hero() {
  return (
    <section className="w-100 position-relative h-auto text-white bg-dark">
      <Navbar />
      <Container>
        <header className="px-3 h-100 text-left">
          <h1 className="mb-3">
            Skill games and business solutions that meet your needs.
          </h1>
          <a
            href="/#contact"
            className="btn btn-light bg-lg mobile-full"
            role="button"
          >
            Contact Us
          </a>
        </header>
        <img
          className="w-100"
          src="/img/machines/hero-banner.png"
          alt="hero banner"
          width={360}
          height={490}
        />
      </Container>

      <NavLink href="/#products">
        <RiArrowDownSLine
          size={48}
          className="position-absolute bottom-0 start-50 translate-middle-x text-white"
        />
      </NavLink>
    </section>
  );
}

export default Hero;
