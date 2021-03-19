import styled from "styled-components";
import { breakpoints } from "../../utils";

const MultiItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  * {
    width: 100%;
  }

  @media (max-width: ${breakpoints["md"]}) {
    flex-direction: column;
  }
`;

export default MultiItemContainer;
