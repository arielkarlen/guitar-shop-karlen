import React, { useState, useContext, useEffect } from "react";
import { Offcanvas, Row, Col, Button } from "react-bootstrap";
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

  const { cartProducts } = useContext(CartContext);

  const [reLoad, setReload] = useState(false);

  useEffect(() => {
    setReload(false);
  }, []);

  return (
    <>
      <FontAwesomeIcon icon={faCartShopping} onClick={handleShow} />
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mi carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row className="cartContent">
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
                      <p>Precio: ${product.price}</p>
                      <a
                        onMouseDown={() => {
                          cartProducts.splice(index, 1);
                          setReload(true);
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
        <Row id="btnsCartCheckout">
          <Col lg={6}>
            <Link to="/cart" className="btn btn-primary">
              <FontAwesomeIcon icon={faMoneyBill} /> Terminar Compra
            </Link>
          </Col>
          <Col lg={6}>
            <Button
              onMouseDown={() => {
                cartProducts.length = 0;
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
      </Offcanvas>
    </>
  );
};

export default CartWidget;
