import React from "react";
import { useAppContext } from "../../context";
import Container from "./Container";

export default function Footer() {
  const {
    companyInfo: { name },
  } = useAppContext();

  return <Container>{name}™ 2021</Container>;
}
