import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import AdminNewsList from "../../components/admin/admin-news-list";
import NewsForm from "../../components/admin/news-form";
import PhotoForm from "../../components/admin/photo-form";
import ProductForm from "../../components/admin/product-form";
import Layout from "../../components/shared/layout";

function Admin() {
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
                <AdminNewsList />
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

export default Admin;
