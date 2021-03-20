import { Card as BsCard } from "react-bootstrap";
import styled from "styled-components";

export const Card = styled(BsCard)`
  text-align: center;
  padding: 15px;

  .card-title {
    text-transform: capitalize;
    text-decoration: underline;
    margin-top: 5px;
  }

  .card-body {
    padding: 0;
    height: 120px;
  }
`;
