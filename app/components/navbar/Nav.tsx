import { Nav as BsNav } from "react-bootstrap";
import styled from "styled-components";
import NavLink from "./NavLink";

const Container = styled(BsNav)`
  margin-left: auto;
  display: inline-flex;
`;

function Nav() {
  return (
    <Container>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/news">News</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </Container>
  );
}

export default Nav;
