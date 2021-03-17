import styled from "styled-components";

const MultiItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  * {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default MultiItemContainer;
