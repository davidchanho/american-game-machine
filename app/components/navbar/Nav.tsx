import Link from "next/link";
import React from "react";
import { Nav as BsNav } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled(BsNav)`
  margin-left: auto;
  display: inline-flex;

  a {
    margin: 0 5px;
  }
`;

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
