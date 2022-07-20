import { useState } from "react";
import { Button } from "react-bootstrap";

const Itemcount = ({ stock, initial }) => {
  const [itemQty, setItemQty] = useState(initial);
  const addItem = () => {
    itemQty >= stock ? alert("No Hay Stock") : setItemQty(itemQty + 1);
  };

  const removeItem = () => {
    itemQty <= 0
      ? alert("debe agregar al menos 1 producto")
      : setItemQty(itemQty - 1);
  };

  return (
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
  );
};

export default Itemcount;
