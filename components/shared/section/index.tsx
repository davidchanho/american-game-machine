import React, { PropsWithChildren } from "react";
import { Container } from "react-bootstrap";

function Section({ children }: PropsWithChildren<{}>) {
  return (
    <section className="h-auto">
      <Container>{children}</Container>
    </section>
  );
}

export default Section;
