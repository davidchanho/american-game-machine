import React from "react";

interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div>
      <div className="anchor mb-5 text-capitalize">
        <span id={title} className="d-block position-relative hidden" />
        <p className="section-title text-center">{title}</p>
      </div>
    </div>
  );
}

export default SectionTitle;
