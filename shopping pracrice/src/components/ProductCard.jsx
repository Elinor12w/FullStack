import React, { useContext } from "react";
import { ShopContext } from "../ShopContext";

export const ProductCard = (props) => {

  const { cart, addToCart, removeFromCart } = useContext(ShopContext)
  const cartItem = cart.find((item) => item.id === props.productData.id); 
  const amount = cartItem ? cartItem.amount : 0;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={props.img} />
      </div>
      <div className="product-info">
        <h5>{props.itemName}</h5>
        <h6>{props.price}</h6>
        <div className="product-buttons" style={{ display: "flex", gap: "15px" }}>
          <button onClick={() => addToCart(props.productData)}>Add to Cart </button>
          {amount > 0 && (
            <>
              <span style={{ margin: "0px 10px" }}>{amount}</span>
              <button onClick={() => removeFromCart(props.productData)}>Remove </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
