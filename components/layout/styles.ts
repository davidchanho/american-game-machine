import styled from "styled-components";
import {Container as BsContainer} from 'react-bootstrap'

export const Main = styled.main`
  min-height: 100vh;
  position: relative;
  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.white};
`;

export const Container = styled(BsContainer)`
  margin: 40px auto;
`;
