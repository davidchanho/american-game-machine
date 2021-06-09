import React from "react";
import AppearText from "../appear-text";

interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <AppearText>
      <div className="anchor mb-5 text-capitalize">
        <span id={title} className="d-block position-relative hidden" />
        <p className="text-center">{title}</p>
      </div>
    </AppearText>
  );
}

export default SectionTitle;
