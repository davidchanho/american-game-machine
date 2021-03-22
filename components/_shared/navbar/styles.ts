import { Navbar as BsNavbar } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled(BsNavbar)`
  background-color: ${props => props.theme.colors.white};
`;
