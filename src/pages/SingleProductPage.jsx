import { useContext } from "react";
import { Link, useParams } from "react-router";
import { ShopContext } from "../ShopContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

export const SingleProductPage = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);

  console.log(productId, products);

  const p = products.find((p) => p.id === +productId);
  console.log(p._id, productId);
  return (
    <>
      <Link to={"/"}>HOMEPAGE</Link>
      {Object.entries(products?.find((p) => p._id === +productId)).map(
        (item) => {
          if (typeof item[1] === "object") {
            return <></>;
          }
          return (
            <div className={"productPageDetails"}>
              <p>{item[0]}:</p>
               <b>{item[1]}</b>
              
            </div>
          );
        }
      )}
    </>
  );
};
