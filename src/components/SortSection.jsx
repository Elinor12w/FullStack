import { useContext } from "react";
import { ShopContext } from "../ShopContext.jsx";
import { FilterSortComp } from "./FilterSortComp";

export const SortSection = () => {
  const { categories, handleCatChange, handleSort } = useContext(ShopContext);

  const sortOptions = [
   
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Best Selling",
  ];

  return (
    <div className="sort">
      <FilterSortComp
        onSelect={handleCatChange}
        label={"Filter by:"}
        listOfOptions={categories}
      />
      <FilterSortComp
        onSelect={handleSort}
        label={"Sort by:"}
        listOfOptions={sortOptions}
      />
    </div>
  );
};
