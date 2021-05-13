import styled from "styled-components";

interface Props {
  isActive: boolean;
}

export const Anchor = styled.a<Props>`
  margin: 0 5px;
  font-weight: bold;
  border-bottom: ${(props) =>
    props.isActive ? `3px solid ${props.theme.colors.white}` : undefined};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
  }
`;
