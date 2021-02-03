import Product from "../Product";
import {products} from "../utils/productList";

function Chairs() {

  return (
    <div>
      <h1 className="main-heading">Chairs</h1>
      <div className="product-image-container">
        {Object.keys(products.chairs).map((chair, i) => {
          return (
            <Product
            key={i}
              backgroundImage={products.chairs[chair].image}
              productCategory="chairs"
              product={products.chairs[chair]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Chairs;
