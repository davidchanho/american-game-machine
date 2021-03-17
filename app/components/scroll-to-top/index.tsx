import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import useScroll from "./hook";
import {AiOutlineArrowUp} from 'react-icons/ai';

interface Props {
  visible: boolean;
}

const Container = styled.span`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  padding: 2rem;
  position: fixed;
  bottom: 0;

  .btn {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: ${({ visible }: Props) => (visible ? "visible" : "invisible")};
  }
`;

function ScrollToTop() {
  const { visible, scrollTop } = useScroll();

  return (
    <Container visible={visible}>
      <Button variant="primary" onClick={scrollTop}>
        <AiOutlineArrowUp/>
      </Button>
    </Container>
  );
}

export default ScrollToTop;
