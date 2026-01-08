import { useContext } from "react";
import { Link, useParams } from "react-router";
import { ShopContext } from "../ShopContext";

export const SingleProductPage = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);

  console.log(productId, products);

  const p = products.find((p) => p.id === +productId);
  console.log(p.id, productId);
  return (
    <>
      <Link to={"/"}>HOMEPAGE</Link>
      {Object.entries(products?.find((p) => p.id === +productId)).map(
        (item) => {
          if (typeof item[1] === "object") {
            return <></>;
          }
          return (
            <div className={"productPageDetails"}>
              <p>{item[0]}:</p> <b>{item[1]}</b>
            </div>
          );
        }
      )}
    </>
  );
};
