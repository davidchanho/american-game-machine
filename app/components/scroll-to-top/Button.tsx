import { Button as BsButton } from "react-bootstrap";
import styled from "styled-components";
import { IVisible } from "../../types";

const Button = styled(BsButton)`
  visibility: ${({ visible }: IVisible) => (visible ? "visible" : "invisible")};
`;

export default Button;
