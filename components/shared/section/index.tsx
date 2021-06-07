import React, { PropsWithChildren } from "react";
import SectionTitle from "../section-title";
import { Props } from "./types";

function Section({ title, children }: PropsWithChildren<Props>) {
  return (
    <section className="h-auto">
      <SectionTitle title={title} />
      {children}
    </section>
  );
}

export default Section;
