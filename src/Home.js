import Product from "./Product";
import { categoryImages } from "./utils/productList";
import { Link } from "react-router-dom";
import "./App.css"

function Home() {
  return (
    <div>
      <h1 className="main-heading">Freddy's Furniture Store</h1>
      <div className="product-image-container">
        {Object.keys(categoryImages).map((category, i) => {
          return (
            <Link to={category}>
              <Product key={i} backgroundImage={categoryImages[category]} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
