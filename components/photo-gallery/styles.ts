import styled from "styled-components";

const Gallery = styled.div`
  width: 75%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;

  .card {
    width: 360px;
    height: 360px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default Gallery