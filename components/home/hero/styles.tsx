import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";

const Container = styled(Jumbotron)`
  .header {
    position: absolute;
    z-index: 100;
  }
  .img {
    position: relative;
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    
  }
`;

export default Container;
