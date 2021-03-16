import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import NewsLetterForm from "./Form";

export const Section = styled.section`
  .row {
    display: flex;
    justify-content: center;

    .col {
      h6 {
        font-weight: bold;
        text-transform: uppercase;
      }

      h2,
      h6 {
        margin-bottom: 5px;
      }
    }
  }
`;

function NewsLetter() {
  return (
    <Section>
      <Row>
        <Col lg={6} md={12}>
          <h6>Subscribe to our newsletter</h6>
          <h2>
            Stay up-to-date with new products and services and American Game
            Machine latest news
          </h2>
          <NewsLetterForm />
        </Col>
        <Col lg={6} md={12}>
          <Image
            src="/svg/newsletter.svg"
            alt="picture of envelopes"
            aria-hidden={true}
            title="https://storyset.com/"
            layout="fill"
          />
        </Col>
      </Row>
    </Section>
  );
}

export default NewsLetter;
