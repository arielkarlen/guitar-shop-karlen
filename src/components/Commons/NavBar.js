import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/logo.svg";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="Guitarras" id="basic-nav-dropdown">
              <NavDropdown.Item href="/guitarras/electricas">
                Electricas
              </NavDropdown.Item>
              <NavDropdown.Item href="/guitarras/acusticas">
                Acusticas
              </NavDropdown.Item>
              <NavDropdown.Item href="/guitarras/electroacusticas">
                Electroacusticas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/guitarras/accesorios">
                Accesorios
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Bajos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/bajos/electricos">
                Electricos
              </NavDropdown.Item>
              <NavDropdown.Item href="/bajos/acusticos">
                Acusticos
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="/bajos/accesorios">
                Accesorios
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Efectos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/efectos/guitarra">
                Guitarra
              </NavDropdown.Item>
              <NavDropdown.Item href="/efectos/bajo">Bajo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/" className="user" alt="Mi cuenta">
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
            <Nav.Link href="/">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
