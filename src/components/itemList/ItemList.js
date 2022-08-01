import ItemProduct from "../itemProduct/itemProduct";
import { useLocation } from "react-router-dom";

const ItemList = ({ dataProducts, category }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      {(() => {
        if (location.pathname == "/") {
          return (
            <>
              {dataProducts.map((product) => {
                return (
                  <>
                    <ItemProduct key={product.id} data={product} />
                  </>
                );
              })}
            </>
          );
        } else {
          return (
            <>
              {dataProducts.map((product) => {
                return (
                  <>
                    {product.category == category ? (
                      <ItemProduct key={product.id} data={product} />
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </>
          );
        }
      })()}
    </>
  );
};

export default ItemList;
