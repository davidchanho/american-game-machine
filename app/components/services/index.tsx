import { CardDeck } from "react-bootstrap";
import styled from "styled-components";
import { useAppContext } from "../../context";
import SectionTitle from "../section-title";
import Item from "./Item";

const Container = styled(CardDeck)`
  margin: 0 auto;
`;

function Services() {
  const { services } = useAppContext();

  return (
    <section>
      <SectionTitle>Services</SectionTitle>
      <Container>
        {services.map((service) => {
          return <Item key={`services-${service.title}`} {...service} />;
        })}
      </Container>
    </section>
  );
}

export default Services;
