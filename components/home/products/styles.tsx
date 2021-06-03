import styled from "styled-components";

export const ProductContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.dark};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;
