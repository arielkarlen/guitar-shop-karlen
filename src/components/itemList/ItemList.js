import ItemProduct from "../itemProduct/ItemProduct";
const handleSubmit = () => {
  alert("Producto añadido al carrito");
};

const ItemList = ({ dataProducts }) => {
  return (
    <>
      {dataProducts.map((product) => {
        return (
          <ItemProduct key={product.id} data={product} action={handleSubmit} />
        );
      })}
    </>
  );
};

export default ItemList;
