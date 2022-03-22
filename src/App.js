import logo from './images/Logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Shop></Shop>
    </div>
  );
}

const Header = () => {
return(
  <nav className='header'>
    <img src={logo} alt="" />
    <div>
    <a href="/Home">Home</a>
    <a href="/Orders">Orders</a>
    <a href="/Inventory">Inventory</a>
    <a href="/About">About</a>
    </div>
  </nav>
)
}

const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
  return (
    <div className='shop-container'>
       <div className='products-container'>
         {
           products.map(product => <Product key={product.id} product={product}></Product>)
         }
        </div>
        <div className='cart-container'>
      <h3>this is cart</h3>
        </div>
    </div>
  )
}

const Product = (props) => {
  const {name, img, seller, price, ratings} = props.product ;
  return(
    <div className='product'>
      <img src={img} alt="" />
    </div>
  )
}

export default App;
