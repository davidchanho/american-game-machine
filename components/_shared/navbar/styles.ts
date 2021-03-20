import { Navbar as BsNavbar } from "react-bootstrap";
import styled from "styled-components";
import { primary } from "../../../utils";
import { Props } from "./types";

export const Container = styled(BsNavbar)<Props>`
  background-color: ${({ isHomePage }) =>
    isHomePage ? primary["100"] : "white"};
`;