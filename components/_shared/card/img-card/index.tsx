import React from "react";
import { ImageProps } from "react-bootstrap";
import Card from "..";
import styled from 'styled-components'

const Container = styled(Card)`
  img {
    width: 100%;
    display: block;
  }
`;

function ImgCard({ ...props }: ImageProps) {
  return (
    <Container>
      <img {...props} />
    </Container>
  );
}

export default ImgCard;
