import Image from "next/image";
import { Card as BsCard } from "react-bootstrap";
import styled from "styled-components";
import { IProduct } from "../../../context";

const Card = styled(BsCard)`
  border: 1px solid black;
  overflow: hidden;
  margin-right: 10px;

  img {
    &:hover {
      animation: grow 5s forwards;
    }
  }

  &:last-child {
    margin-right: none;
  }

  @media (min-width: 768px) {
    margin-right: none;
  }

  @keyframes grow {
    0% {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
`;

function AccessoriesItem({ label, image }: IProduct) {
  return (
    <Card>
      <img src={image} alt={`image of ${label}`} width="300" height="300" />
    </Card>
  );
}

export default AccessoriesItem;
