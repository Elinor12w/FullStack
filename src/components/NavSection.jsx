import { SortSection } from "./SortSection";
import { PriceSlider } from "./priceSlider";


export const NavSection = () => {
  return (
    <nav className="product-filter">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <h1 style={{ color: "black", fontSize: "40px" }}>Jackets</h1>
      </div>
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