import { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";

import products from "../../utils/products.mock";
import ItemList from "../itemList/ItemList";
import Loader from "../loader/Loader";
import { useParams } from "react-router-dom";

const ItemContainer = ({ titleSection }) => {
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

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
        <h1>{category} </h1>
        <Row>
          {isLoading ? (
            <Loader />
          ) : (
            <ItemList dataProducts={listProducts} category={category} />
          )}
        </Row>
      </Container>
    </>
  );
};

export default ItemContainer;
