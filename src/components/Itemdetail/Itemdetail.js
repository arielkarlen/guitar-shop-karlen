import { useState } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Itemcount from "../Commons/ItemCount";
import "./itemDetail.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Itemdetail = ({ productData }) => {
  const [message, setMessage] = useState("");

  const { title, image, price, stock, id, description, category } = productData;
  const handleSubmit = () => {
    setMessage(
      <div className="add">
        <p>
          <FontAwesomeIcon icon={faCheck} /> Añadido al carrito
        </p>
      </div>
    );
  };

  return (
    <Container>
      <Card id="itemdetail">
        <Row>
          <Col>
            <img src={`../assets/${image}`} className="img-fluid" />
          </Col>
          <Col>
            {message}
            <h2>{title}</h2>
            <h3>
              <strong>Precio:</strong> {price}
            </h3>
            <h5>
              <strong>Stock: </strong>
              {stock}
            </h5>
            <h5>
              <strong>Categoria: </strong>
              <Link to={`/category/${category}`}>{category}</Link>
            </h5>
            <div className="singledescription">
              <p>{description}</p>
            </div>
            <Row className="btnsBuy">
              <Col md={6}>
                {" "}
                <Itemcount stock={stock} initial={0} />
                <Button variant="primary" onClick={handleSubmit}>
                  Comprar
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Itemdetail;
