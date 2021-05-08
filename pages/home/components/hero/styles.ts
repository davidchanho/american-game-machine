import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";

export const HeroContainer = styled(Jumbotron)`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 50px 50px;
  color: ${(props) => props.theme.colors.white};

  h1 {
    width: 20%;

    span {
      text-decoration: underline;
      font-weight: bold;
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
