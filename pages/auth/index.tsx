import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import AuthNewsList from "../../app/components/_auth/auth-news-list";
import NewsForm from "../../app/components/_auth/news-form";
import PhotoForm from "../../app/components/_auth/photo-form";
import ProductForm from "../../app/components/_auth/product-form";
import Layout from "../../app/layout";

function Auth() {
  return (
    <Layout>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">News</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Photos</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <NewsForm />
                <AuthNewsList />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <ProductForm />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <PhotoForm />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Layout>
  );
}

export default Auth;
