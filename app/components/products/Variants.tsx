import React from "react";
import { ListGroup } from "react-bootstrap";
import styled from "styled-components";

const Container = styled(ListGroup)`
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
    <Container>
      {variants.map((variant) => {
        return (
          <ListGroup.Item key={`category-variant-${variant}`} variant={variant}>
            {variant}
          </ListGroup.Item>
        );
      })}
    </Container>
  );
}

export default Variants;
