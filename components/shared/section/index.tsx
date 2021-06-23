import React, { PropsWithChildren } from "react";
import SectionTitle from "./SectionTitle";

interface SectionProps {
  title: string;
}

function Section({ title, children }: PropsWithChildren<SectionProps>) {
  return (
    <section className="section mh-100 w-100">
      <SectionTitle title={title} />

      <div className="d-flex align-items-center justify-content-center">
        <div className="container">{children}</div>
      </div>
    </section>
  );
}

export default Section;
