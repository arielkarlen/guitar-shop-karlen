import { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";

import products from "../../utils/products.mock";
import ItemList from "../itemList/ItemList";
import Loader from "../loader/Loader";

const ItemContainer = ({ titleSection }) => {
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = new Promise((resolve, reject) => {
    resolve(products);
  });

  useEffect(() => {
    getProduct
      .then((res) => {
        setTimeout(function () {
          setListProducts(res);
          setIsLoading(false);
        }, 3000);
      })

      .catch((error) => {
        console.log("Error");
      });
  }, []);

  return (
    <>
      <Container id="itemContainer">
        <h1>{titleSection} </h1>
        <Row>
          {isLoading ? <Loader /> : <ItemList dataProducts={listProducts} />}
        </Row>
      </Container>
    </>
  );
};

export default ItemContainer;
