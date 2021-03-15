import Image from "next/image";
import React from "react";
import { Col } from "react-bootstrap";
import NewsLetterForm from "../newsletter-form";
import Container from "./Container";

function NewsLetter() {
  return (
    <section>
      <Container>
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
      </Container>
    </section>
  );
}

export default NewsLetter;
