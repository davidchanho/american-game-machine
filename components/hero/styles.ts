import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";

export const HeroContainer = styled(Jumbotron)`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 50px 50px;

  h1 {
    margin: 0;
    width: 25%;

    span {
      font-weight: bold;
      text-decoration: underline;
    }

    mark {
      background-color: ${(props) => props.theme.colors.accent};
    }
  }

  img {
    width: 350px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;

    h1 {
      width: 50%;
      margin-bottom: 20px;
    }
  }
`;
