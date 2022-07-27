import { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";

import singleProduct from "../../utils/singleProduct.mock";
import Itemdetail from "../Itemdetail/Itemdetail";

import Loader from "../loader/Loader";

const ItemDetailContainer = ({ titleSection }) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = new Promise((resolve, reject) => {
    resolve(singleProduct);
  });

  useEffect(() => {
    getProduct
      .then((res) => {
        setTimeout(function () {
          setProduct(res);
          setIsLoading(false);
        }, 2000);
      })

      .catch((error) => {
        console.log("Error");
      });
  }, []);

  return (
    <>
      <Container id="itemContainer">
        <Row>
          {isLoading ? <Loader /> : <Itemdetail dataSingleProduct={product} />}
        </Row>
      </Container>
    </>
  );
};

export default ItemDetailContainer;
