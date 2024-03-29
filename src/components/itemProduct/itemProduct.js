import { useState, useContext } from "react";
import { Card, Col, Button } from "react-bootstrap";
import Itemcount from "../Commons/ItemCount";
import { Link } from "react-router-dom";
import "./ItemProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ItemProduct = ({ data, action }) => {
  const { title, image, price, stock, id } = data;
  const [quantitySelected, setQuantitySelected] = useState(0);

  return (
    <Col lg={3} xs={6}>
      <Card>
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
            {quantitySelected < 1 ? (
              <Itemcount
                stock={stock}
                initial={0}
                setQuantitySelected={setQuantitySelected}
                productData={data}
              />
            ) : (
              <div className="add">
                <p>
                  <FontAwesomeIcon icon={faCheck} /> Añadido al carrito
                </p>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemProduct;
