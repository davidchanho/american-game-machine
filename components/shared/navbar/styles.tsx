import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const NavbarContainer = styled(Navbar)`
  position: static;
  z-index: 10;
  width: 100%;
`;

export const NavContainer = styled(Nav)`
  z-index: 999;
  margin-left: auto;
`;
