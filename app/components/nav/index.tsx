import Link from "next/link";
import React from "react";
import { Container } from "./styles";

function Nav() {
  return (
    <Container>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/news">
        <a>News</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </Container>
  );
}

export default Nav;
