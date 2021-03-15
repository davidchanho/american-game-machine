import React from "react";
import { ListGroup as BsListGroup } from "react-bootstrap";
import styled from "styled-components";

const ListGroup = styled(BsListGroup)`
  display: flex;
  flex-direction: column;
`;

interface Props {
  variants: string[];
}

function Variants({ variants }: Props) {
  return (
    <ListGroup>
      {variants.map((variant) => {
        return (
          <ListGroup.Item key={`category-variant-${variant}`} variant={variant}>
            {variant}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default Variants;
