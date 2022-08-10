import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Button, Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import {
  faTrashCan,
  faMoneyBill,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const MyCart = () => {
  const {
    cartProducts,
    totalProduct,
    setTotalProduct,
    parcialAmount,
    totalAmount,
    setTotalAmount,
  } = useContext(CartContext);

  const [reLoad, setReload] = useState(false);

  useEffect(() => {
    setReload(false);
  }, []);

  console.log(cartProducts);

  return (
    <>
      <Container>
        <Card id="myCart">
          <Row>
            <Col lg={7}>
              {cartProducts.length == 0 ? (
                <>
                  <h2 className="text-center">
                    No hay productos en el carrito
                  </h2>
                  <div className="iconCart text-center">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </div>
                </>
              ) : (
                ""
              )}
              {cartProducts.map((product, index) => {
                return (
                  <>
                    <Row key={product.id} className="myCartItem">
                      <Col lg={2}>
                        <img
                          src={`../assets/${product.image}`}
                          className="img-fluid"
                          alt={product.title}
                        />
                      </Col>
                      <Col lg={7}>
                        <p>
                          <strong>{product.title}</strong>
                        </p>
                        <p>
                          <strong>Cantidad:</strong> {product.Qty}
                        </p>
                        <p>
                          <strong>Precio: </strong>${product.price}
                        </p>
                      </Col>
                      <Col lg={3}>
                        <a
                          onMouseDown={() => {
                            cartProducts.splice(index, 1);
                            setReload(true);
                            setTotalProduct(totalProduct - product.Qty);
                            setTotalAmount(totalAmount - product.PartialAmount);
                          }}
                          onMouseUp={() => {
                            setReload(false);
                          }}
                          className="deleteItem"
                        >
                          <FontAwesomeIcon icon={faTrashCan} /> Eliminar
                        </a>
                        <h4>Subtotal: ${product.PartialAmount}</h4>
                      </Col>
                    </Row>
                  </>
                );
              })}
            </Col>
            <Col lg={{ span: 3, offset: 2 }} id="checkout">
              {cartProducts.length == 0 ? (
                <Link to="/" className="btn btn-primary btnCheckout">
                  Empezar a comprar
                </Link>
              ) : (
                <>
                  <h2>Total: ${totalAmount}</h2>
                  <Link to="/" className="btn btn-primary btnCheckout">
                    <FontAwesomeIcon icon={faMoneyBill} /> Terminar Compra
                  </Link>
                </>
              )}
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default MyCart;
