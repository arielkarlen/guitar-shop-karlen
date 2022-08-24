import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid id="footer">
      <Container>
        <Row>
          <Col md={6}>
            <Nav>
              <Nav.Item>
                <Nav.Link href="/">Inicio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/category/Guitarras" eventKey="Guitarras">
                  Guitarras
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/category/Bajos" eventKey="Bajos">
                  Bajos
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={6} className="text-end">
            <p>
              Desarrollado por
              <a
                href="https://www.linkedin.com/in/arielkarlen/"
                target="_blank"
              >
                <strong> Ariel Karlen </strong>
              </a>
              para Coderhouse
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
