import './App.css';
import {ViewDetail} from "./utils/analytics";
import {products} from "./utils/productList"

export default function Product(props) {
  const style = {backgroundImage: `url(${props.backgroundImage})`}    
  return (
    <div className="product-image" id="product1" style={style} onClick={props.product ? () => ViewDetail(props.product) : undefined}>      
    </div>
  );
}
