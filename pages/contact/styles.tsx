import { Container as BsContainer } from "react-bootstrap";
import styled from "styled-components";

const Container = styled(BsContainer)`
  margin: 0 auto;
  
  section {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    section {
      flex-direction: column;
    }
  }
`;

export default Container;
