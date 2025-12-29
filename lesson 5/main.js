const filterOptions = [
  "All Jackets",
  "2016",
  "jacket",
  "Jackets",
  "layers",
  "Obermeyer",
  "Roxy",
  "womens",
];

const sortOptions = [
  "Featured",
  "Best Selling",
  "Alphabetically, A-Z",
  "Alphabetically, Z-A",
  "Price, low to high",
  "Price, high to low",
  "Date, new to old",
  "Date, old to new",
];
const ProductsSection = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <section className="products">
      {arr.map(() => (
        <ProductCard
          itemName={"חולצה יפה"}
          price={"25.25$"}
          img={
            "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
          }
        />
      ))}
    </section>
  );
};
const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={props.img} />
      </div>
      <div className="product-info">
        <h5>{props.itemName}</h5>
        <h6>{props.price}</h6>
      </div>
    </div>
  );
};

const FilterSortComp = (props) => {
  const { listOfOptions, label } = props;

  return (
    <div className="collection-sort">
      <label>{label}</label>
      <select>
        {listOfOptions.map((opt) => (
          <option value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

const SortSection = () => {
  return (
    <div className="sort">
      <FilterSortComp label={"Filter by:"} listOfOptions={filterOptions} />
      <FilterSortComp label={"Sort by:"} listOfOptions={sortOptions} />
    </div>
  );
};

const NavSection = () => {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <SortSection />
    </nav>
  );
};
const Main = () => {
  return (
    <body>
      <NavSection />
      <ProductsSection />
    </body>
  );
};
ReactDOM.render(<Main />, document.getElementById("app"));
