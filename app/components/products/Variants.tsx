import React from "react";
import { ListGroup as BsListGroup } from "react-bootstrap";
import styled from "styled-components";

const BsContainer = styled(BsListGroup)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

interface Props {
  variants: string[];
}

function Variants({ variants }: Props) {
  return (
    <BsContainer>
      {variants.map((variant) => {
        return (
          <BsListGroup.Item key={`category-variant-${variant}`} variant={variant}>
            {variant}
          </BsListGroup.Item>
        );
      })}
    </BsContainer>
  );
}

export default Variants;
