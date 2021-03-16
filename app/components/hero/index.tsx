import styled from "styled-components";

const Section = styled.section`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 
  hgroup {
    text-align: center;
    background-color: white;
    padding: 14px 20px;
  }
`;

function Hero() {
  return (
    <Section>
      <hgroup>
        <h1>American Game Machine</h1>
        <h4>Sales & Service</h4>
      </hgroup>
    </Section>
  );
}

export default Hero;
