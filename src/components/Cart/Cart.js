import React, { useState, useContext, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  Container,
  Modal,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import {
  faCircleCheck,
  faMoneyBill,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import db from "../../firebaseconfig";
import { collection, addDoc } from "firebase/firestore";

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

  const [order, setOrder] = useState({
    items: cartProducts.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        qty: product.Qty,
      };
    }),
    buyer: {},
    date: new Date().toLocaleString(),
    total: totalAmount,
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [success, setSuccess] = useState();
  const [validated, setValidated] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setReload(false);
  }, []);

  const submitData = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      pushData({ ...order, buyer: formData });
    }

    setValidated(true);
    e.preventDefault();
    console.log("Orden para enviar: ", { ...order, buyer: formData });
  };

  const pushData = async (newOrder) => {
    const collectionOrder = collection(db, "ordenes");
    const orderDoc = await addDoc(collectionOrder, newOrder);
    setSuccess(orderDoc.id);
    cartProducts.length = 0;
    setTotalProduct(0);
  };

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
                <Row>
                  <h2>Tu carrito</h2>
                  <p>
                    Tenes {totalProduct} productos por un total de $
                    <strong>{totalAmount}</strong>
                  </p>
                </Row>
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
                      <Col lg={6}>
                        <p>
                          <strong>{product.title}</strong>
                        </p>
                        <p>
                          <strong>Cantidad:</strong> {product.Qty}
                        </p>
                      </Col>
                      <Col lg={4}>
                        <p>
                          <strong>Precio unitario: </strong>${product.price}
                        </p>
                        <h4>Subtotal: ${product.PartialAmount}</h4>
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
                          <FontAwesomeIcon icon={["fal", "coffee"]} /> Eliminar
                        </a>
                      </Col>
                    </Row>
                  </>
                );
              })}
            </Col>
            <Col lg={{ span: 4, offset: 1 }}>
              <Row id="checkout">
                {cartProducts.length == 0 ? (
                  <Link to="/" className="btn btn-primary btnCheckout">
                    Empezar a comprar
                  </Link>
                ) : (
                  <>
                    <h1>Resumen</h1>
                    <div className="subTotal">
                      <h3>Subtotal: ${totalAmount}</h3>
                      <h3>Envío: Gratis</h3>
                    </div>
                    <h2>Total: ${totalAmount}</h2>
                    <Button variant="primary" onClick={handleShow}>
                      <FontAwesomeIcon icon={faMoneyBill} /> Terminar Compra
                    </Button>
                  </>
                )}
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {success ? (
            <Modal.Title> Muchas gracias por su compra</Modal.Title>
          ) : (
            <Modal.Title>Finalizar compra</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          {success ? (
            <Row id="checkoutEnd">
              <FontAwesomeIcon icon={faCircleCheck} />
              <h2>
                Se le envio un mail a su correo con los detalles de su compra
              </h2>
              <p>Nro de orden: {success}</p>
            </Row>
          ) : (
            <Form onSubmit={submitData} noValidate validated={validated}>
              <Row className="resumen">
                <Col lg={6}>
                  <h3>Subtotal: ${totalAmount}</h3>
                  <h3>Envío: Gratis</h3>
                </Col>
                <Col lg={6}>
                  <h2>Total: ${totalAmount}</h2>
                </Col>
              </Row>
              <h2>Ingrese sus datos para finalizar la compra</h2>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  placeholder="Ingrese su nombre"
                  onChange={handleChange}
                  value={formData.name}
                />
                <Form.Control.Feedback type="invalid">
                  El nombre es obligatorio
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Teléfono </Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="phone"
                  placeholder="Ingrese su teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  El Teléfono es obligatorio
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>E-Mail </Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Ingrese su Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, ingrese un mail valido
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                Pagar
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyCart;
