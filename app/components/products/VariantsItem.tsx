import React from "react";
import { VariantsItemProps } from "./types";
import VariantsItemContainer from "./VariantsItemContainer";

function VariantsItem({ variant }: VariantsItemProps) {
  return <VariantsItemContainer>{variant}</VariantsItemContainer>;
}

export default VariantsItem;
