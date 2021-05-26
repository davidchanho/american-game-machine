import { Container as BsContainer } from "react-bootstrap";
import styled from "styled-components";

export const Main = styled.main`
  min-height: 100vh;
  position: relative;
  color: ${(props) => props.theme.colors.dark};
`;

export const Container = styled(BsContainer)`
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
