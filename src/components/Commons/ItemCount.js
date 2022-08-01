import { useState } from "react";
import { Button } from "react-bootstrap";

import "./ItemCount.css";

const Itemcount = ({ stock, initial }) => {
  const [itemQty, setItemQty] = useState(initial);
  const [alert, setAlert] = useState("");
  const addItem = () => {
    itemQty >= stock
      ? setAlert(`Stock Maximo: ${itemQty} Productos`)
      : setItemQty(itemQty + 1);
  };

  const removeItem = () => {
    itemQty <= 0
      ? setAlert("Debe agregar al menos 1 producto")
      : setItemQty(itemQty - 1);
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
    </>
  );
};

export default Itemcount;
