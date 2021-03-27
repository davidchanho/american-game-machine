import { Button as BsButton } from "react-bootstrap";
import styled from "styled-components";

const Button = styled(BsButton)`
  cursor: pointer;
  background-color: ${(props) => props.theme.primary};
`;

export default Button;
