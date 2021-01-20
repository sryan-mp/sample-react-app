import "./App.css";
import Product from "./Product"
import products from "./utils/productList";
import {ViewDetail} from './utils/analytics';

function App() {
  console.log(window.mParticle)
  return (
    <div className="App">
      <h1 className='main-heading'>
        Living room furniture
      </h1>
      <div className="product-image-container">
      {Object.keys(products).map(product => {        
        return (<Product 
        backgroundImage={products[product].image}
        product={products[product]}
        ViewDetail={ViewDetail}/>)
      })}     
      </div>
      <div className="button-container">
        <button className="register">proceed to checkout</button>
      </div>
    </div>
  );
}

export default App;