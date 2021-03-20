import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.primary};
`;

export default Button;
