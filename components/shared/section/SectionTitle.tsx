import React from "react";
import AppearText from "../appear-text";

interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <AppearText>
      <p className="anchor mb-5 text-capitalize">
        <span id={title} className="d-block position-relative hidden" />
        <h3 className="text-center">{title}</h3>
      </p>
    </AppearText>
  );
}

export default SectionTitle;
