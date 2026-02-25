import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import SingleProductPage  from "./pages/SingleProductPage.jsx";
import AdminPage from "./pages/AdminPage";
import { useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";

export const Router = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);

  
  

  useEffect(() => {
    const handleProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();

        const mappedData = data.map((product) => {
          return { ...product, id: product._id, amount: 0 };
        });
        setProducts(mappedData);
        setFilteredProducts(mappedData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
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

  // Add item to cart
  const addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);

    if (product) {
      // Check if product already exists in cart
      const existingItem = cart.find((item) => item.id === productId);

      if (existingItem) {
        // If exists, increase the amount
        setCart(
          cart.map((item) =>
            item.id === productId ? { ...item, amount: item.amount + 1 } : item
          )
        );
      } else {
        // If new, add to cart with amount 1
        setCart([...cart, { ...product, amount: 1 }]);
      }
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
      if (existingItem.amount === 1) {
        // If amount is 1, remove the item completely
        setCart(cart.filter((item) => item.id !== productId));
      } else {
        // If amount > 1, decrease the amount
        setCart(
          cart.map((item) =>
            item.id === productId ? { ...item, amount: item.amount - 1 } : item
          )
        );
      }
    }
  };


  const router = createBrowserRouter([
    {
      path: "/",
      Component: App,
    },
    {
      path: "/products/:productId",
      Component: SingleProductPage,
    },
    {
      path: "/admin",
      Component: AdminPage,
    },
  ]);

  return (
    <ShopContext.Provider
      value={{
        products: filteredProducts,
        AllProducts: products,
        setProducts,
        setFilteredProducts,
        categories,
        handleCatChange,
        cart,
        setCart,
        addToCart,
        removeFromCart,
      }}
    >
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
};
