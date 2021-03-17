import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";

const Section = styled(Jumbotron)`
  height: 80vh;
  background-color: yellow;
  h3 {
    width: 28%;
    margin: 0;

    mark {
      background-color: lightgreen;
    }
  }
`;

function Hero() {
  return (
    <Section>
      <hgroup>
        <h3>
          American Game Machine helps businesses, get started, stay well
          maintained, and <mark>grow</mark>.
        </h3>
      </hgroup>
    </Section>
  );
}

export default Hero;
