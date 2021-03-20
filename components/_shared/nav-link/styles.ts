import { Props } from "./types";
import styled from "styled-components";
import { secondary } from "../../../utils";

export const Anchor = styled.a<Props>`
  margin: 0 5px;
  font-weight: bold;
  border-bottom: ${({ isActive }) =>
    isActive ? `3px solid ${secondary[100]}` : "white"};
  color: ${({ isActive, isHomePage }) =>
    isActive ? secondary[100] : isHomePage ? "white" : "black"};

  &:hover {
    font-weight: bold;
    text-decoration: none;
    color: ${secondary[100]};
  }
`;
