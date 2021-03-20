import { Button as BsButton } from "react-bootstrap";
import styled from "styled-components";
import { Props } from "./types";

export const Container = styled.span`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  padding: 2rem;
  position: fixed;
  bottom: 0;
`;

export const Button = styled(BsButton)<Props>`
  background-color: ${props => props.theme.colors.primary};
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${({ hidden }) => (hidden ? "hidden" : undefined)};
`;
