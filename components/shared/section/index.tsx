import React, { ReactNode } from "react";
import SectionTitle from "./SectionTitle";
import MultiItemContainer from "../multi-item-container";

interface Props {
  label: string;
  children: ReactNode[];
}

function Section({ label, children }: Props) {
  return (
    <section>
      <SectionTitle>{label}</SectionTitle>
      <MultiItemContainer>{children}</MultiItemContainer>
    </section>
  );
}

export default Section;
