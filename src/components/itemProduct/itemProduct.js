import { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import Itemcount from "../Commons/ItemCount";
import { Link } from "react-router-dom";
import "./ItemProduct.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ItemProduct = ({ data, action }) => {
  const { title, image, price, stock, id } = data;
  const [message, setMessage] = useState("");
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
    <Col lg={3}>
      <Card>
        {message}
        <Link to={`/guitars/${id}`}>
          <Card.Img variant="top" src={`../assets/${image}`} />
        </Link>
        <Card.Body>
          <Card.Title>
            <Link to={`/guitars/${id}`}>{title}</Link>
          </Card.Title>
          <h4>$ {price}</h4>

          <h5>Stock: {stock}</h5>

          <div className="buy">
            <Itemcount stock={stock} initial={0} />

            <Button variant="primary" onClick={handleSubmit}>
              Comprar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemProduct;
