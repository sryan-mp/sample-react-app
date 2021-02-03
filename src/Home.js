import Product from "./Product";
import { categoryImages } from "./utils/productList";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="main-heading">Living room furniture</h1>
      <div className="product-image-container">
        {Object.keys(categoryImages).map((category, i) => {
          return (
            <Link to={category}>
              <Product key={i} backgroundImage={categoryImages[category]} />
            </Link>
          );
        })}
      </div>
      <div className="button-container">
        <button className="register">proceed to checkout</button>
      </div>
    </div>
  );
}

export default Home;
