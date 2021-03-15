import { Card, CardDeck } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled(CardDeck)`
  width: 75%;
  margin: 0 auto;
`;

export const ItemContainer = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Body = styled(Card.Body)`
  width: 100%;
  text-align: center;
`;

export const Title = styled(Card.Title)`
  width: 100%;
  text-align: center;
  margin: 3px;
  text-transform: capitalize;
  text-decoration: underline;
`;
