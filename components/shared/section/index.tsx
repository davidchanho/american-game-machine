import React, { PropsWithChildren } from "react";

function Section({ children }: PropsWithChildren<{}>) {
  return <section className="h-auto">{children}</section>;
}

export default Section;
