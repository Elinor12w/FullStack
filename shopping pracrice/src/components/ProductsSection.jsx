import { useContext } from "react";
import { ProductCard } from "./ProductCard";
import { ShopContext } from "../ShopContext.js";

export const ProductsSection = () => {
  const { products } = useContext(ShopContext);
  return (
    <section className="products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          itemName={product.title}
          price={product.price}
          img={product.image}
        />
      ))}
    </section>
  );
};
