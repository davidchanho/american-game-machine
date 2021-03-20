import React from "react";
import { companyName } from "../../../context";
import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>{companyName}™ 2021</Container>
  );
}
