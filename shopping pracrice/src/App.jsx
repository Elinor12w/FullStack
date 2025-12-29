// import { useRef } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { ShopContext } from "./ShopContext.js";
import { NavSection } from "./components/NavSection";
import { ProductsSection } from "./components/ProductsSection";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const handleProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setProducts(data);
      setFilteredProducts(data);
    };

    handleProducts();
  }, []);

  useEffect(() => {
    const cat = products
      ?.map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index);

    if (cat && cat.length > 0) {
      cat.unshift("All Items");
      setCategories(cat);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const handleCatChange = (category) => {
    console.log(category);
    if (category === "All Items") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  const addToCart = (productToAdd) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === productToAdd.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...productToAdd, amount: 1 }];
      }
    });
  };

  const removeFromCart = (productToRemove) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === productToRemove.id
      );

      if (existingProduct.amount === 1) {
        return prevCart.filter((item) => item.id !== productToRemove.id);
      } else {
        return prevCart.map((item) =>
          item.id === productToRemove.id
            ? { ...item, amount: item.amount - 1 }
            : item
        );
      }
    });
  };
  // const inputRef = useRef(null);

  // const handleClick = () => {
  //   inputRef.current.focus();
  //   inputRef.current.style.background = "red";
  //   inputRef.current.style.width = "200px";
  //   inputRef.current.style.height = "100px";
  // };
  return (
    <ShopContext.Provider
      value={{
        products: filteredProducts,
        categories,
        handleCatChange,
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      <>
        {/* <button onClick={handleClick}>click me for focusing the input</button>
      <input ref={inputRef} />
      */}
        {/* <OTPInput /> */}
        <NavSection />
        <ProductsSection />
      </>
    </ShopContext.Provider>
  );
}

export default App;
