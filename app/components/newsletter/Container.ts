import { Row } from "react-bootstrap";
import styled from "styled-components";

const Container = styled(Row)`
  width: 75%;
  display: flex;
  justify-content: center;

  .col {
    h6 {
      font-weight: bold;
      text-transform: uppercase;
    }

    h2,
    h6 {
      margin-bottom: 5px;
    }
  }
`;

export default Container;
