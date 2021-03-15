import React from "react";
import { RiArrowDropUpLine } from "react-icons/ri";
import Button from "./Button";
import Container from "./Container";
import useScroll from "./useScroll";

function ScrollToTop() {
  const { visible, scrollTop } = useScroll();

  return (
    <Container>
      <Button visible={visible} variant="primary" onClick={scrollTop}>
        <RiArrowDropUpLine size={32} />
      </Button>
    </Container>
  );
}

export default ScrollToTop;
