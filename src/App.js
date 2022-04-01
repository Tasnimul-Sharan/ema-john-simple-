import logo from "./images/Logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "./utilities/fakedb";
import Order from "./Components/Order/Order";

import { Link, Route, Routes } from "react-router-dom";
import Inventory from "./Components/Order/Inventory/Inventory";
import useProducts from "./Hooks/useProducts";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/Shop" element={<Shop></Shop>}></Route>
        <Route path="/Orders" element={<Order></Order>}></Route>
        <Route path="/Inventory" element={<Inventory></Inventory>}></Route>
      </Routes>
    </div>
  );
}

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/Shop">Shop</Link>
        <Link to="/Orders">Orders</Link>
        <Link to="/Inventory">Inventory</Link>
        <Link to="/About">About</Link>
      </div>
    </nav>
  );
};

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/orders">
            <button>Review order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

const Product = ({ product, handleAddToCart }) => {
  // const {product, handleAddToCart} = props;
  const { name, img, seller, price, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price : $ {price}</p>
        <p>
          <small>Manufacturer : {seller}</small>
        </p>
        <p>
          <small>Ratings : {ratings} stars</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add to Cart</p>{" "}
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

// const Cart = ({ cart }) => {
//   let total = 0;
//   let shipping = 0;
//   let quantity = 0;
//   for (const product of cart) {
//     quantity = quantity + product.quantity;
//     total = total + product.price * product.quantity;
//     shipping = shipping + product.shipping;
//   }
//   const tax = parseFloat((total * 0.1).toFixed(2));
//   const grandTotal = total + shipping + tax;
//   return (
//     <div className="cart">
//       <h2>Order Summary</h2>
//       <p>Selected Items : {quantity}</p>
//       <p>Total Price : $ {total}</p>
//       <p>Total Shipping :$ {shipping}</p>
//       <p>Tax : $ {tax}</p>
//       <h5>Grand Total: $ {grandTotal}</h5>
//       <button>Clear Cart</button> <br />
//       <button>Review Order</button>
//       <p></p>
//     </div>
//   );
// };

export default App;
