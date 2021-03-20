import styled from "styled-components";

interface Props {
  isActive: boolean;
}

export const Anchor = styled.a<Props>`
  margin: 0 5px;
  font-weight: bold;
  border-bottom: ${({ isActive }) =>
    isActive
      ? `3px solid  ${(props) => props.theme.colors.secondary}`
      : "white"};
  color: ${({ isActive }) =>
    isActive ? `${(props) => props.theme.colors.secondary}` : "black"};

  &:hover {
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
