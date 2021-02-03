import Product from "../Product";
import { products } from "../utils/productList";

function Tables() {
  return (
    <div>
      <h1 className="main-heading">Tables</h1>
      <div className="product-image-container">
        {Object.keys(products.tables).map((table, i) => {
          return (
            <Product
              key={i}
              backgroundImage={products.tables[table].image}
              productCategory="tables"
              product={products.tables[table]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tables;
