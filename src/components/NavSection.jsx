import { SortSection } from "./SortSection";
import { PriceSlider } from "./priceSlider";

export const NavSection = () => {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>

      <div className="filter-controls">
        
        <div className="sort-control">
          <SortSection />
        </div>
        <div className="price-control">
          <PriceSlider />
        </div>
      </div>
    </nav>
  );
};
