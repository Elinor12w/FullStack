import { ProductCard } from "./ProductCard";

export const ProductsSection = () => {
    const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    return (
      <section className="products">
        {arr.map(() => (
          <ProductCard
            itemName={"חולצה יפה"}
            price={"25.25$"}
            img={
              "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
            }
          />
        ))}
      </section>
    );
  };