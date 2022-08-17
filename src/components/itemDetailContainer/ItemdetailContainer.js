import { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";

import Itemdetail from "../Itemdetail/Itemdetail";
import Loader from "../loader/Loader";

import { useParams } from "react-router-dom";

import db from "../../firebaseconfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async () => {
    const docRef = doc(db, "productos", id);
    const docSnapshot = await getDoc(docRef);
    let product = docSnapshot.data();
    product.id = docSnapshot.id;

    return product;
  };

  useEffect(() => {
    getProduct().then((res) => {
      setProductData(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Container id="itemContainer">
        <Row>
          {isLoading ? <Loader /> : <Itemdetail productData={productData} />}
        </Row>
      </Container>
    </>
  );
};

export default ItemDetailContainer;
