import React from "react";
import { ListGroup } from "react-bootstrap";
import { VariantsProps } from "./types";
import VariantsContainer from "./VariantsContainer";
import VariantsItem from "./VariantsItem";

function Variants({ variants }: VariantsProps) {
  return (
    <VariantsContainer>
      {variants.map((variant) => {
        return (
          <VariantsItem key={`category-variant-${variant}`} variant={variant} />
        );
      })}
    </VariantsContainer>
  );
}

export default Variants;
