import React from "react";
import { Props } from "./types";

function SectionTitle({ section }: Props) {
  return (
    <p className="anchor mb-5 text-capitalize">
      <span id={section} className='d-block position-relative hidden' />
      <h3 className="text-center">{section}</h3>
    </p>
  );
}

export default SectionTitle;
