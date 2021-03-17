import Image from "next/image";
import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";
import { brand, green, neutral, breakpoints } from "../../../utils";

const Section = styled(Jumbotron)`
  background-color: ${brand[100]};
  color: ${neutral[100]};
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    margin: 0;
    width: 25%;

    mark {
      background-color: ${green[100]};
    }
  }

  @media (max-width: ${breakpoints["md"]}) {
    flex-direction: column;
    h3 {
      width: 100%;
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
      <Image
        src="/svg/growth.svg"
        layout="fixed"
        width="300px"
        height="300px"
      />
    </Section>
  );
}

export default Hero;
