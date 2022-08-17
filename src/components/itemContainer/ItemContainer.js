import { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";

// import products from "../../utils/products.mock";
import ItemList from "../itemList/ItemList";
import Loader from "../loader/Loader";
import { useParams } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import db from "../../firebaseconfig";

const ItemContainer = ({ titleSection }) => {
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  // const getProduct = new Promise((resolve, reject) => {
  //   resolve(products);
  // });

  const getProducts = async () => {
    const productcollection = collection(db, "productos");
    const productSnapshot = await getDocs(productcollection);
    const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      // console.log(product);
      return product;
      // console.log(doc.data());
      // console.log(doc.id);
    });
    // console.log(productList);
    return productList;
  };

  useEffect(() => {
    getProducts().then((res) => {
      console.log("Respuesta:", res);
      setListProducts(res);
      console.log("Produxctos :", listProducts);
    });
  }, []);

  return (
    <>
      <Container id="itemContainer">
        <h1>{category} </h1>
        <Row>
          {/* {isLoading ? (
            <Loader />
          ) : ( */}
          <ItemList dataProducts={listProducts} category={category} />
          {/* )} */}
        </Row>
      </Container>
    </>
  );
};

export default ItemContainer;
