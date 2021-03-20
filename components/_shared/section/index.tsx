import React, { PropsWithChildren } from "react";
import { Container } from "./styles";

function Section({ children }: PropsWithChildren<{}>) {
  return <Container>{children}</Container>;
}

export default Section;
