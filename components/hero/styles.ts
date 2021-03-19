import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";
import { accent, breakpoints, primary } from "../../utils";

export const HeroContainer = styled(Jumbotron)`
  background-color: ${primary[100]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    margin: 0;
    width: 18%;

    span {
      font-weight: bold;
      text-decoration: underline;
    }

    mark {
      background-color: ${accent[100]};
    }
  }

  img {
    width: 350px;
  }

  @media (max-width: ${breakpoints["md"]}) {
    h3 {
      width: 20%;
      margin-right: 20px;
    }
  }

  @media (max-width: ${breakpoints["sm"]}) {
    flex-direction: column;

    h3 {
      width: 60%;
      margin-bottom: 20px;
    }
  }
`;
