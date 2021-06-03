import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const NavbarContainer = styled(Navbar)`
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    position: absolute;
    z-index: 10;
  }
`;

export const NavContainer = styled(Nav)`
  margin-left: auto;
`;