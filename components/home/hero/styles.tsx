import { cover } from "polished";
import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";

const Container = styled(Jumbotron)`
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    min-height: 520px;

    .backdrop {
      opacity: 0.8;
      ${cover()}
    }

    .header {
      position: absolute;
      z-index: 100;
      text-align: center;
      height: 100%;
    }

    .img {
      position: relative;
    }

    .title {
      font-size: clamp(2rem, -0.875rem + 8.333vw, 3.5rem);
    }
  }
`;

export default Container;
