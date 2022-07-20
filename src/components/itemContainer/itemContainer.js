import { Row, Container } from "react-bootstrap";
import ItemProduct from "../itemProduct/itemProduct";

const ItemContainer = ({ titleSection }) => {
  const product1 = {
    title: "BURNY BY FERNANDES FIREBIRD JAPAN 90S",
    price: 111935,
    description:
      "Burny by Fernandes Firebird Japan 90s. Rojo (repintado)  Modelo FB-75Z  ZIGGY “Munehito Matsuo” Signature. Funda de lona opciona",
    image: "firebird.jpg",
    stock: 10,
  };

  const product2 = {
    title: "FENDER AERODYNE TELECASTER JAPAN 2004",
    price: 156710,
    description:
      "Fender Aerodyne Telecaster Japan 2004. Limited Edition . Numero de serie R073207. Incluye funda de lona",
    image: "Fender.jpg",
    stock: 5,
  };

  const product3 = {
    title: "RICKENBACKER 620 FIREGLO 2003",
    price: 288399,
    description:
      "Rickenbacker 620 Fireglo 2003 Numero de serie 03 10113 . Made in USA. Incluye estuche original.",
    image: "Rickenbacker.jpg",
    stock: 3,
  };

  const product4 = {
    title: "IBANEZ GEORGE BENSON JAPAN GB10 1982",
    price: 348976,
    description:
      "Ibanez George Benson Japan GB10 1982. Brown Sunburst. Numero de serie A824824. Incluye estuche.",
    image: "Ibanez.jpg",
    stock: 7,
  };

  const handleSubmit = () => {
    alert("Producto añadido al carrito");
  };
  return (
    <>
      <Container id="itemContainer">
        <h1>{titleSection} </h1>
        <Row>
          <ItemProduct data={product1} action={handleSubmit} />
          <ItemProduct data={product2} action={handleSubmit} />
          <ItemProduct data={product3} action={handleSubmit} />
          <ItemProduct data={product4} action={handleSubmit} />
        </Row>
      </Container>
    </>
  );
};

export default ItemContainer;
