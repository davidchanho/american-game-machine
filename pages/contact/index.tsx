import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import ContactForm from "../../app/components/contact-form";
import Layout from "../../app/layout";

function Contact() {
  return (
    <Layout>
      <Row>
        <Col md={6} sm={12}>
          <ContactForm />
        </Col>
        <Col md={6} sm={12}>
          <Image
            src="/svg/contact.svg"
            alt="contact us to get a quote"
            aria-hidden="true"
            layout="fill"
          />
        </Col>
      </Row>
    </Layout>
  );
}

export default Contact;
