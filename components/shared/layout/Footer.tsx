import styled from "styled-components";
import { useAppContext } from "../../../context";

export const Container = styled.footer`
  text-align: center;
`;

export default function Footer() {
  const {
    state: {company: { name }},
  } = useAppContext();

  return <Container>{name}™ 2021</Container>;
}
