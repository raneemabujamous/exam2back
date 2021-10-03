import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/fav">faveroite</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
