import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export default function Haider() {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <>
      <div className="fixed-top">
        <Navbar expand="lg" style={{ backgroundColor: "#535151" }} variant="dark">
          <Container>
            <Navbar.Brand><h1><strong>Chillist</strong></h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="http://localhost:3000">Home</Nav.Link>
                <Nav.Link href="http://localhost:3000/Shop">Shop</Nav.Link>
                <Nav.Link href="http://localhost:3000/Cutumer_car">Customer Care</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
              <Nav>
              {isAuthenticated && user ? (
                <Nav.Link href='#'>
                  <p>Hi, {user.username}!</p>
                  <button onClick={logout}>Logout</button>
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link href='http://localhost:3000/Login'>Login</Nav.Link>
                  <Nav.Link href='http://localhost:3000/Register'>Sign In</Nav.Link>
                </>
              )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
