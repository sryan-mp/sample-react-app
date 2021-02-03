import Product from "../Product";
import { products } from "../utils/productList";
import React from "react";

function Desks() {
  return (
    <div>
      <h1 className="main-heading">Desks</h1>
      <div className="product-image-container">
        {Object.keys(products.desks).map((desk, i) => {
          return (
            <Product
              key={i}
              backgroundImage={products.desks[desk].image}
              productCategory="desks"
              product={products.desks[desk]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Desks;
