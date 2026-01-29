import { Link } from "react-router";
import "./App.css";
import { NavSection } from "./components/NavSection";
import { ProductsSection } from "./components/ProductsSection";
import React, { useState } from "react";
import PersistentDrawerRight from "./components/cartDrawer";
import { ShopProvider } from "./ShopContext.jsx";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ShopProvider>
      <PersistentDrawerRight open={open} setOpen={setOpen} />
      <NavSection />
      <ProductsSection />
    </ShopProvider>
  );
}

export default App;
