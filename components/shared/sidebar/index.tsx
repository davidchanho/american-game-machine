import React, { useState } from "react";
import { Col, Navbar, Offcanvas, Row } from "react-bootstrap";
import Nav from "../navbar/Nav";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar.Toggle
        onClick={handleShow}
        className="text-white border-0 p-0"
        aria-controls="responsive-navbar-nav"
      />
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Row>
          <Col>
            <Offcanvas.Body>
              <Nav />
            </Offcanvas.Body>
          </Col>
          <Col>
            <Offcanvas.Header closeButton />
          </Col>
        </Row>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
