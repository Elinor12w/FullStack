import { Link } from "react-router";
import "./App.css";
import { NavSection } from "./components/NavSection";
import { ProductsSection } from "./components/ProductsSection";
import React, { useState } from "react";
import PersistentDrawerRight from "./components/cartDrawer";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PersistentDrawerRight open={open} setOpen={setOpen} />
      <NavSection />
      <ProductsSection />
    </>
  );
}

export default App;
