import React from "react";
import { Props } from "./types";

function SectionTitle({ title }: Props) {
  return (
    <p className="anchor mb-5 text-capitalize">
      <span id={title} className="d-block position-relative hidden" />
      <h3 className="text-center">{title}</h3>
    </p>
  );
}

export default SectionTitle;
