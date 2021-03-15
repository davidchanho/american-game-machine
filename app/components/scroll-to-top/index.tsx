import React from "react";
import { Button as BsButton } from "react-bootstrap";
import styled from "styled-components";
import useScroll from "./hook";

interface Props {
  visible: boolean;
}

export const Button = styled(BsButton)`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${({ visible }: Props) => (visible ? "visible" : "invisible")};
`;

export const Container = styled.span`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  padding: 2rem;
  position: fixed;
  bottom: 0;
`;

function ScrollToTop() {
  const { visible, scrollTop } = useScroll();

  return (
    <Container>
      <Button visible={visible} variant="primary" onClick={scrollTop}>
        ^
      </Button>
    </Container>
  );
}

export default ScrollToTop;
