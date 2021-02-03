import Product from "../Product";
import { products } from "../utils/productList";

function Lamps() {
  return (
    <div>
      <h1 className="main-heading">Lamps</h1>
      <div className="product-image-container">
        {Object.keys(products.lamps).map((lamp, i) => {
          return (
            <Product
              key={i}
              backgroundImage={products.lamps[lamp].image}
              productCategory="lamps"
              product={products.lamps[lamp]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Lamps;
