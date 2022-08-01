import { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";

import Itemdetail from "../Itemdetail/Itemdetail";
import products from "../../utils/products.mock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    products.some((product) => {
      if (product.id == id) {
        setProductData(product);
      }
    });
  });

  return (
    <>
      <Container id="itemContainer">
        <Row>
          <Itemdetail productData={productData} />
        </Row>
      </Container>
    </>
  );
};

export default ItemDetailContainer;
