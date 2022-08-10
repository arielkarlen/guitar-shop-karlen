import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const addProductToCart = (product) => {
    let isInCart = cartProducts.find((cartItem) => cartItem.id === product.id);
    if (!isInCart) {
      setCartProducts([...cartProducts, product]);
      setTotalProduct(totalProduct + product.Qty);
      setTotalAmount(totalAmount + product.PartialAmount);
    } else {
      alert("el producto ya se encuentra en el carrito");
    }
  };

  const data = {
    cartProducts,
    setCartProducts,
    addProductToCart,
    totalProduct,
    setTotalProduct,
    totalAmount,
    setTotalAmount,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;
export { CartContext };
