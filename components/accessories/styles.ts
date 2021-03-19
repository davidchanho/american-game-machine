import { Card as BsCard } from "react-bootstrap";
import styled from "styled-components";
import { grow } from "../../utils";

export const Card = styled(BsCard)`
  border: 1px solid #ccc;
  overflow: hidden; 
  margin-right: 15px;

  img {
    padding: 30px;
    width: 300px;
    height: 300px;

    &:hover {
      animation: ${grow} 3s forwards;
    }
  }

  &:last-child {
    margin-right: none;
  }
`;
