import { useContext } from "react";
import { ProductCard } from "./ProductCard";
import { ShopContext } from "../ShopContext.js";

export const ProductsSection = () => {
  const { products } = useContext(ShopContext);
  console.log(products);
  return (
    <section className="products">
      {products.map((product) => (
        <ProductCard
          itemName={product.title}
          price={product.price}
          img={product.image}
          key={product.id}
          productData={product} 
          
        />
      ))}
    </section>
  );
};
