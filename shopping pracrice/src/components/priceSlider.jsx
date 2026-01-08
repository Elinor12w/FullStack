import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { ShopContext } from "../ShopContext";

export const PriceSlider = () => {
  const { AllProducts, setFilteredProducts } = useContext(ShopContext);
  const [PriceRange, SetPriceRange] = useState([0, 1000]);
  const [min, max] = React.useMemo(() => {
    if (AllProducts.length > 0) {
      const min = AllProducts.reduce(
        (min, p) => (p.price < min ? p.price : min),
        AllProducts[0].price
      );
      const max = AllProducts.reduce(
        (max, p) => (p.price > max ? p.price : max),
        AllProducts[0].price
      );
      return [min, max];
    }
    return [0, 1000];
  }, [AllProducts]);



const handlePriceChange = (event, NewValue) => {
  SetPriceRange(NewValue);
  const filtered = AllProducts.filter(
    (p) => p.price >= PriceRange[0] && p.price <= PriceRange[1]
  );
  setFilteredProducts(filtered);
};
return (
    <Box sx={{ width: 200, padding: 2 }}>
      <Typography gutterBottom>Filter by Price</Typography>
      <Slider
        getAriaLabel={() => "Price range"}
        value={PriceRange}
        min={min} 
        max={max} 
        color="black"
        size="small"
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        getAriaValueText={(value) => `${value}$`}
      />
    </Box>
);    
}