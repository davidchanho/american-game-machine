import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Button, Container } from "./styles";
import useScroll from "./useScroll";

function ScrollToTop() {
  const { visible, scrollTop } = useScroll();

  return (
    <Container>
      <Button onClick={scrollTop} visible={visible}>
        <AiOutlineArrowUp />
      </Button>
    </Container>
  );
}

export default ScrollToTop;
