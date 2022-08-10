import React, { useState, useContext, useEffect } from "react";
import { Offcanvas, Row, Col, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../../context/CartContext";

import {
  faCartShopping,
  faTrashCan,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./CartWidget.css";

const CartWidget = () => {
  const [show, setShow] = useState(false);

  const handleClose = (event) => {
    setShow(false);
    event.preventDefault();
    event.stopPropagation();
  };
  const handleShow = (event) => {
    setShow(true);
    event.preventDefault();
    event.stopPropagation();
  };

  // const [totalPrice, setTotalPrice] = useState(0);

  const {
    cartProducts,
    totalProduct,
    setTotalProduct,
    totalAmount,
    setTotalAmount,
  } = useContext(CartContext);
  const [reLoad, setReload] = useState(false);

  useEffect(() => {
    setReload(false);
  }, []);

  return (
    <>
      <FontAwesomeIcon icon={faCartShopping} onClick={handleShow} />
      {totalProduct == 0 ? "" : <Badge bg="secondary">{totalProduct}</Badge>}

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mi carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row className="cartContent">
            {cartProducts.length == 0 ? (
              <>
                <h2 className="text-center">No hay productos en el carrito</h2>
                <div className="iconCart text-center">
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <Link
                  to="/"
                  className="btn btn-primary btnCheckout"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  Empezar a comprar
                </Link>
              </>
            ) : (
              ""
            )}
            {cartProducts.map((product, index) => {
              return (
                <>
                  <Row key={product.id} className="itemCart">
                    <Col lg={4}>
                      <img
                        src={`../assets/${product.image}`}
                        className="img-fluid"
                        alt={product.title}
                      />
                    </Col>
                    <Col lg={8}>
                      <p>
                        <strong>{product.title}</strong>
                      </p>
                      <p>
                        {product.Qty} x ${product.price}
                      </p>
                      <p></p>
                      <h4>Total: ${product.PartialAmount}</h4>
                      <a
                        onMouseDown={() => {
                          cartProducts.splice(index, 1);
                          setReload(true);
                          setTotalProduct(totalProduct - product.Qty);
                          setTotalAmount(totalAmount - product.PartialAmount);
                          console.log(totalProduct);
                        }}
                        onMouseUp={() => {
                          setReload(false);
                        }}
                        className="deleteItem"
                      >
                        <FontAwesomeIcon icon={faTrashCan} /> Eliminar
                      </a>
                    </Col>
                  </Row>
                </>
              );
            })}
          </Row>
        </Offcanvas.Body>
        {cartProducts.length == 0 ? (
          ""
        ) : (
          <Row id="btnsCartCheckout">
            <h3>Total: ${totalAmount}</h3>
            <Col lg={6}>
              <Link
                to="/cart"
                className="btn btn-primary"
                onClick={() => {
                  setShow(false);
                }}
              >
                <FontAwesomeIcon icon={faMoneyBill} /> Checkout
              </Link>
            </Col>
            <Col lg={6}>
              <Button
                onMouseDown={() => {
                  cartProducts.length = 0;
                  setTotalProduct(0);
                  setReload(true);
                }}
                onMouseUp={() => {
                  setReload(false);
                }}
                className="deleteItem"
                variant="danger"
              >
                <FontAwesomeIcon icon={faTrashCan} /> Vaciar Carrito
              </Button>
            </Col>
          </Row>
        )}
      </Offcanvas>
    </>
  );
};

export default CartWidget;
