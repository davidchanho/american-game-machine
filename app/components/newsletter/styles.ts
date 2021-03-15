import { Row } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled(Row)`
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
