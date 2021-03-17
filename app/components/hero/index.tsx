import Image from "next/image";
import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";

const Section = styled(Jumbotron)`
  height: 60vh;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    margin: 0;
    width: 25%;

    mark {
      background-color: lightgreen;
    }
  }
`;

function Hero() {
  return (
    <Section>
      <h3>
        American Game Machine helps businesses get started, stay well
        maintained, and <mark>grow</mark>.
      </h3>
      <Image src="/svg/growth.svg" width="400px" height="400px" />
    </Section>
  );
}

export default Hero;
