import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import Logo from "../../assets/logo.svg";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/category/Guitarras">Guitarras</Link>
            <Link to="/category/Bajos">Bajos</Link>
            <Link to="/">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
