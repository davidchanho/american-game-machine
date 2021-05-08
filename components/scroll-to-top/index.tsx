import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Button, Container } from "./styles";
import useScroll from "./useScroll";

function ScrollToTop() {
  const { hidden, scrollTop } = useScroll();

  return (
    <Container>
      <Button onClick={scrollTop} hidden={!hidden} aria-label="Scroll up">
        <AiOutlineArrowUp />
      </Button>
    </Container>
  );
}

export default ScrollToTop;
