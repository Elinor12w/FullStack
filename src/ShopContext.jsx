import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState("Featured");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      
      // Extract unique categories and add "All Items"
      const uniqueCategories = [...new Set(data.map(p => p.category))];
      setCategories(["All Items", ...uniqueCategories]);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
      setFilteredProducts([]);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  // Filter by category and price
  useEffect(() => {
    let result = products;

    // Apply category filter
    if (selectedCategory && selectedCategory !== "All Items") {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Apply price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Apply sorting
    switch(sortBy) {
      case "Alphabetically, A-Z":
        result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Alphabetically, Z-A":
        result = [...result].sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Price, low to high":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "Price, high to low":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "Best Selling":
        // Assuming there's a sales property, otherwise keep original order
        result = [...result].sort((a, b) => (b.sales || 0) - (a.sales || 0));
        break;
      case "Featured":
      default:
        // Keep original order from server
        break;
    }

    setFilteredProducts(result);
  }, [selectedCategory, priceRange, products, sortBy]);

  const handleCatChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
  };

  const handleSort = (sortOption) => {
    setSortBy(sortOption);
  };

  const addToCart = (productId) => {
    const product = products.find(p => p._id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item._id === productId);
    
    if (existingItem) {
      // Increase amount if item already in cart
      setCart(cart.map(item =>
        item._id === productId
          ? { ...item, amount: item.amount + 1 }
          : item
      ));
    } else {
      // Add new item to cart
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const existingItem = cart.find(item => item._id === productId);
    
    if (existingItem && existingItem.amount > 1) {
      // Decrease amount
      setCart(cart.map(item =>
        item._id === productId
          ? { ...item, amount: item.amount - 1 }
          : item
      ));
    } else {
      // Remove item completely
      setCart(cart.filter(item => item._id !== productId));
    }
  };

  const value = {
    products,
    filteredProducts,
    categories,
    selectedCategory,
    priceRange,
    cart,
    setCart,
    setProducts,
    loading,
    sortBy,
    handleCatChange,
    handlePriceChange,
    handleSort,
    setFilteredProducts,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
  );
};
