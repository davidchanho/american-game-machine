import React, { PropsWithChildren } from "react";
import { Container } from "./styles";

function Section({ children, ...rest }: PropsWithChildren<{}>) {
  return <Container {...rest}>{children}</Container>;
}

export default Section;
