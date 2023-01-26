import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Form, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'>E-Commers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/purchases'>Purchases</Nav.Link>
          </Nav>
          
            <Button as={Link} to='/login' variant="outline-success">Login</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
