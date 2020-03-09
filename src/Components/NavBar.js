import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "../Design/NavBar.css";

const Navigation = () => {
  return (
    <React.Fragment>
        <Navbar expand="lg" className="navBar">
          <Navbar.Brand id="biz-head" href="/">Crimson Claw</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="navTog" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link as={Link} to ="/" className="pageNav" style={{ color: "white" }}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to ="/Store" className="pageNav" style={{ color: "white"}} > Store </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to ="/About" className="pageNav" style={{ color: "white" }} >About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to ="/Contact" className="pageNav" style={{ color: "white" }} >Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </React.Fragment>
  );
}

export default Navigation;
