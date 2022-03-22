import logo from './images/Logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  const handleAddToCart = (product) => {
    console.log(product)
    // const newCart = [...cart, product]
    setCart([...cart, product])

  }

  return (
    <div className='shop-container'>
       <div className='products-container'>
         {
           products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} ></Product>)
         }
        </div>
        <div className='cart-container'>
          <Cart cart={cart}></Cart>
          {/* <h2>Order Summary</h2>
          <p>Selected Items : {cart.length}</p> */}
          {/* <p>Total Price:</p>
          <p>Total Shipping Charge:</p>
          <p>Tax:</p>
          <h2>Grand Total:</h2>
          <button>Clear Cart</button> <br />
          <button>Review Order</button> */}
        </div>
    </div>
  )
}

const Product = (props) => {
  const {product, handleAddToCart} = props;
  const {name, img, seller, price, ratings} = product;
  return(
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
      <p className='product-name'>{name}</p>
      <p>Price : $ {price}</p>
      <p><small>Manufacturer : {seller}</small></p>
      <p><small>Ratings : {ratings} stars</small></p>
      </div>
      <button onClick={() =>handleAddToCart(product)} className='btn-cart'>
        <p className='btn-text'>Add to Cart</p>  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
       
    </div>
  )
}

const Cart = ({cart}) => {
  return(
    <div>
      <h2>Order Summary</h2>
      <p>Selected Items : {cart.length}</p>
    </div>
  )
}

export default App;
