import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";
import { accent, breakpoints, primary } from "../../utils";

const Section = styled(Jumbotron)`
  background-color: ${primary[100]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    margin: 0;
    width: 18%;

    mark {
      background-color: ${accent[100]};
    }
  }

  img {
    width: 350px;
  }

  @media (max-width: ${breakpoints["md"]}) {
    h3 {
      width: 20%;
      margin-right: 20px;
    }
  }

  @media (max-width: ${breakpoints["sm"]}) {
    flex-direction: column;

    h3 {
      width: 60%;
      margin-bottom: 20px;
    }
  }
`;

function Hero() {
  return (
    <Section>
      <h3>
        <b>
          <u>American Game Machine</u>
        </b>{" "}
        helps businesses get started, stay well maintained, and{" "}
        <mark>grow</mark>.
      </h3>
      <img src="/svg/growth.svg" />
    </Section>
  );
}

export default Hero;
