import { Nav as BsNav } from "react-bootstrap";
import styled from "styled-components";
import { AnchorProps } from "./types";

export const Container = styled(BsNav)`
  margin-left: auto;
`;

export const Anchor = styled.a<AnchorProps>`
  margin: 0 0.3125rem;
  font-weight: bold;
  border-bottom: ${(props) =>
    props.isActive
      ? `0.2125rem solid ${props.theme.colors.white}`
      : undefined};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    font-weight: bold;
    text-decoration: none;
  }
`;
