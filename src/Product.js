import './App.css';

export default function Product(props) {
  const style = {backgroundImage: `url(${props.backgroundImage})`}  
  return (
    <div className="product-image" id="product1" style={style} onClick={() => props.ViewDetail(props.product)}>      
    </div>
  );
}
