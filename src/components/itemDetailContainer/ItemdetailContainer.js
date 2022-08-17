import { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";

import Itemdetail from "../Itemdetail/Itemdetail";
import { useParams } from "react-router-dom";

import db from "../../firebaseconfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  // useEffect(() => {
  //   getProduct().then((res) => {
  //     setProductData(product);
  //   });
  // }, [id]);

  const getProduct = async () => {
    const docRef = doc(db, "productos", id);
    const docSnapshot = await getDoc(docRef);
    let product = docSnapshot.data();
    product.id = docSnapshot.id;
    // console.log(product);
    return product;
  };

  useEffect(() => {
    getProduct().then((res) => {
      setProductData(res);
    });
  }, []);

  console.log(productData);

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
