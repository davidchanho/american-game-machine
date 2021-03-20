import styled from "styled-components";

interface Props {
  isActive: boolean;
}

export const Anchor = styled.a<Props>`
  margin: 0 5px;
  font-weight: bold;
  font-size: 18px;
  border-bottom: ${(props) =>
    props.isActive ? `3px solid ${props.theme.colors.primary}` : undefined};
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
  }
`;
