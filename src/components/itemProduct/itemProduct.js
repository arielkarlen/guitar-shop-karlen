import { Card, Button, Col } from "react-bootstrap";
import "./itemProduct.css";

const ItemProduct = ({ title, price, description, image }) => {
  return (
    <Col lg={3}>
      <Card>
        <Card.Img variant="top" src={`assets/${image}`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <p>{description}</p>
          <h4>{price}</h4>

          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemProduct;
