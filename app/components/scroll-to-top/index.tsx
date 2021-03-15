import React from "react";
import {Container, Button} from "./styles";
import useScroll from "./hook";

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
