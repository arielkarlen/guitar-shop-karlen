import { Row, Col, Container, Card, Button } from "react-bootstrap";
import Itemcount from "../Commons/ItemCount";
import "./itemDetail.css";

const handleSubmit = () => {
  alert("Producto añadido al carrito");
};

const Itemdetail = ({ dataSingleProduct }) => {
  const { title, image, price, description, stock } = dataSingleProduct;
  console.log(dataSingleProduct);
  return (
    <Container>
      <Card id="itemdetail">
        <Row>
          <Col>
            <img src={`assets/${image}`} />
          </Col>
          <Col>
            <h2>{title}</h2>
            <h3>
              <strong>Precio:</strong> ${price}{" "}
            </h3>
            <h5>
              <strong>Stock: </strong>
              {stock}
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
