import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { ShopContext } from "../ShopContext.jsx";

export const PriceSlider = () => {
  const { products = [], handlePriceChange, priceRange } = useContext(ShopContext);
  const [min, max] = React.useMemo(() => {
    if (products && products.length > 0) {
      const min = products.reduce(
        (min, p) => (p.price < min ? p.price : min),
        products[0].price
      );
      const max = products.reduce(
        (max, p) => (p.price > max ? p.price : max),
        products[0].price
      );
      return [min, max];
    }
    return [0, 10000];
  }, [products]);

  const handleChange = (event, NewValue) => {
    handlePriceChange(NewValue);
  };
  return (
    <Box sx={{ width: 200, padding: 2 }}>
      <Typography gutterBottom>Filter by Price</Typography>
      <Slider
        getAriaLabel={() => "Price range"}
        value={priceRange}
        min={min} 
        max={max} 
        color="black"
        size="small"
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={(value) => `${value}$`}
      />
    </Box>
  );}