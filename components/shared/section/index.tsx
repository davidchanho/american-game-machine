import React, { PropsWithChildren } from "react";
import SectionTitle from "./SectionTitle";

interface SectionProps {
  title: string;
}

function Section({ title, children }: PropsWithChildren<SectionProps>) {
  return (
    <section className="h-auto">
      <SectionTitle title={title} />
      {children}
    </section>
  );
}

export default Section;
