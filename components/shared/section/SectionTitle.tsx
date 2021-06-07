import React from "react";

interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <p className="anchor mb-5 text-capitalize">
      <span id={title} className="d-block position-relative hidden" />
      <h3 className="text-center">{title}</h3>
    </p>
  );
}

export default SectionTitle;
