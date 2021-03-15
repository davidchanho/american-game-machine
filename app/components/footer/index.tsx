import React from "react";
import { useAppContext } from "../../context";
import styled from "styled-components";

export const Container = styled.footer`
  text-align: center;
`;

export default function Footer() {
  const {
    companyInfo: { name },
  } = useAppContext();

  return <Container>{name}™ 2021</Container>;
}
