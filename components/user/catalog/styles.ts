import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: start;
  justify-content: space-between;

  aside,
  body {
    height: 90vh;
    padding: 10px 20px;
    border: 1px solid black;
  }

  aside {
    min-width: 25%;
    max-width: 25%;
  }

  body {
    max-width: 75%;
  }
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
