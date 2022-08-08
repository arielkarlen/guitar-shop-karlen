import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import "./ItemCount.css";

const Itemcount = ({ stock, initial, setQuantitySelected, productData }) => {
  const { addProductToCart } = useContext(CartContext);
  const { addQty } = useContext(CartContext);

  const [itemQty, setItemQty] = useState(initial);
  const [alert, setAlert] = useState("");
  const [disabled, setDisabled] = useState(true);

  const addItem = () => {
    itemQty >= stock
      ? setAlert(`Stock Maximo: ${itemQty} Productos`)
      : setItemQty(itemQty + 1);
    setDisabled(false);
  };

  const removeItem = () => {
    itemQty <= 0
      ? setAlert("Debe agregar al menos 1 producto")
      : setItemQty(itemQty - 1);
    itemQty == 0 ? setDisabled(true) : setDisabled(false);
  };

  const onAdd = () => {
    setQuantitySelected(itemQty);
    addProductToCart(productData, itemQty);
  };

  return (
    <>
      <p className="alertStock">{alert}</p>
      <div className="counterProd ">
        <Button variant="secondary" onClick={removeItem}>
          -
        </Button>
        <div className="qtyItem ">
          <p>{itemQty}</p>
        </div>
        <Button variant="secondary" onClick={addItem}>
          +
        </Button>
      </div>
      <Button disabled={disabled} variant="primary" onClick={onAdd}>
        Añadir al carrito
      </Button>
    </>
  );
};

export default Itemcount;
