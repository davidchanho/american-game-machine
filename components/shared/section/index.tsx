import React, { PropsWithChildren } from "react";

function Section({ children }: PropsWithChildren<{}>) {
  return (
    <section className="h-auto">
      <div className="container">{children}</div>
    </section>
  );
}

export default Section;
