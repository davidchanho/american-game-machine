import styled from "styled-components";
import { companyName } from "../../context";

export const Container = styled.footer`
  text-align: center;
`;

export default function Footer() {
  return <Container>{companyName}™ 2021</Container>;
}
