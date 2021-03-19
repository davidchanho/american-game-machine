import { Card } from "react-bootstrap";
import styled from "styled-components";
import { grow } from "../../utils";

export const Container = styled.section`
  display: flex;
  align-items: start;
  justify-content: space-between;

  aside,
  body {
    height: 90vh;
    padding: 10px 20px;
    border: 1px solid black;
  }

  aside {
    width: 25%;
  }

  body {
    max-width: 75%;
  }
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

export const Item = styled(Card)`
  width: auto;
  height: 300px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .card-img {
    width: 100%;
    height: auto;
    max-height: 250px;
    &:hover {
      animation: ${grow} 3s forwards;
    }
  }

  .card-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;