import { Card } from "react-bootstrap";
import styled from "styled-components";

export const ProductContainer = styled(Card)`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

