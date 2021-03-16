import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-image: url("/img/hero.png");
  background-repeat: no-repeat;
  background-size: cover;
  hgroup {
    background-color: white;
    border: 10px double #ccc;
    padding: 14px 20px;
  }
`;

function Hero() {
  return (
    <Section>
      <hgroup>
        <h1>American Game Machine</h1>
        <h3>Sales & Service</h3>
      </hgroup>
    </Section>
  );
}

export default Hero;
