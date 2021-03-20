import styled from "styled-components";
import { breakpoints } from "../../utils";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;

  img {
    width: 50%;
    display: block;
  }

  @media (max-width: ${breakpoints["lg"]}) {
    flex-direction: column;

    img {
      width: 100%;
      display: block;
    }
  }
`;
