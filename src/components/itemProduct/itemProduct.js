import { Card, Button, Col } from "react-bootstrap";
import Itemcount from "../Commons/ItemCount";

const ItemProduct = ({ data, action }) => {
  const { title, image, price, description, stock } = data;

  return (
    <Col lg={3}>
      <Card>
        <Card.Img variant="top" src={`assets/${image}`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <h5>Stock: {stock}</h5>
          <p>{description}</p>
          <h4>$ {price}</h4>

          <Itemcount stock={stock} initial={0} />
          <Button variant="primary" onClick={action}>
            Comprar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemProduct;
