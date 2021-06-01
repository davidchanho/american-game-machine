import React from "react";

interface Props {
  section?: string;
}

function SectionTitle({ section }: Props) {
  return (
    <h3 className="anchor text-capitalize">
      <span id={section} />
      <h3>{section}</h3>
    </h3>
  );
}

export default SectionTitle;
