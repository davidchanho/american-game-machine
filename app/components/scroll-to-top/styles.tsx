import styled from "styled-components";
import { Button as BsButton } from "react-bootstrap";
import { IVisible } from "../../types";

export const Button = styled(BsButton)`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${({ visible }: IVisible) => (visible ? "visible" : "invisible")};
`;

export const Container = styled.span`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  padding: 2rem;
  position: fixed;
  bottom: 0;
`;
