import { Row, Container } from "react-bootstrap";
import ItemProduct from "../itemProduct/itemProduct";

const ItemContainer = ({ titleSection }) => {
  return (
    <>
      <Container>
        <h1>{titleSection} </h1>
        <Row>
          <ItemProduct
            title="BURNY BY FERNANDES FIREBIRD JAPAN 90S"
            price="$ 140000"
            description="Burny by Fernandes Firebird Japan 90s. Rojo (repintado)  Modelo FB-75Z  ZIGGY “Munehito Matsuo” Signature. Funda de lona opciona"
            image="firebird.jpg"
          />
          <ItemProduct
            title="BURNY BY FERNANDES LES PAUL CUSTOM"
            price="$ 180000"
            description="Burny by Fernandes Les Paul Custom.  Incluye funda de lona."
            image="Burny.jpg"
          />
          <ItemProduct
            title="BACCHUS MUSTANG BMS-1R CLEAR BLUE"
            price="$ 450000"
            description="Bacchus  Mustang BMS-1R Clear Blue . Incluye funda de lona."
            image="BAcchus.jpg"
          />
          <ItemProduct
            title="PRODIPE STRATOCASTER ST83 SERIES HSS"
            price="$ 360000"
            description="Prodipe Stratocaster ST83 Series HSS. Incluye funda de lona"
            image="prodipe.jpg"
          />
        </Row>
      </Container>
    </>
  );
};

export default ItemContainer;
