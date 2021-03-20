import styled from "styled-components";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;

  img {
    width: 50%;
    display: block;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: column;

    img {
      width: 100%;
      display: block;
    }
  }
`;

export default Container