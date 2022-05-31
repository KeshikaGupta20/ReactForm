import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar bg="light" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav style={{ marginRight: "20px" }}>
              <Link to="/">Home</Link>
            </Nav>
            <Nav>
              <Link to="/contact">Contact</Link>
            </Nav>
            <Nav style={{ padding: "0px 20px" }}>
              <Link to="/send">Send</Link>
            </Nav>
            <Nav style={{ padding: "0px 10px" }}>
              <Link to="/formik">Formik</Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
