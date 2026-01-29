import { useContext } from "react";
import { ProductCard } from "./ProductCard";
import { ShopContext } from "../ShopContext.jsx";

export const ProductsSection = () => {
  const { filteredProducts } = useContext(ShopContext);
  return (
    <section className="products">
      {filteredProducts && filteredProducts.map((product) => (
        <ProductCard
          key={product._id || product.id}
          id={product._id || product.id}
          itemName={product.title}
          price={product.price}
          img={product.image}
        />
      ))}
    </section>
  );
};
