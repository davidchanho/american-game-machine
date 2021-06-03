import React from "react";
import { Props } from "./types";

function SectionTitle({ section }: Props) {
  return (
    <h3 className="anchor mb-5 text-capitalize">
      <span id={section} />
      <h3 className="text-center">{section}</h3>
    </h3>
  );
}

export default SectionTitle;
