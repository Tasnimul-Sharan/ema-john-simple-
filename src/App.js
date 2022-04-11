import React from "react";
import logo from "./images/Logo.svg";
import "./App.css";
import Order from "./Components/Order/Order";

import { Link, Route, Routes } from "react-router-dom";
import Inventory from "./Components/Order/Inventory/Inventory";
import NotFound from "./Components/NotFound/NotFound";
import MyLineChart from "./Components/MyLineChart/MyLineChart";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import { signOut } from "firebase/auth";
import Shop from "./Components/Shop/Shop";
import Shipment from "./Components/Shipment/Shipment";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/Orders" element={<Order />}></Route>
        <Route path="/Inventory" element={<Inventory />}></Route>
        <Route
          path="/shipment"
          element={
            <RequireAuth>
              <Shipment />
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/MylineChart" element={<MyLineChart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/Shop">Shop</Link>
        <Link to="/Orders">Orders</Link>
        <Link to="/Inventory">Inventory</Link>
        <Link to="shipment">Shipment</Link>
        <Link to="/About">About</Link>
        <Link to="/MylineChart">MyLineChart</Link>
        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/SignUp">Signup</Link>
      </div>
    </nav>
  );
};

// const Shop = () => {
//   const [products] = useProducts();
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const storedCart = getStoredCart();
//     const savedCart = [];
//     for (const id in storedCart) {
//       const addedProduct = products.find((product) => product.id === id);
//       if (addedProduct) {
//         const quantity = storedCart[id];
//         addedProduct.quantity = quantity;
//         savedCart.push(addedProduct);
//       }
//     }
//     setCart(savedCart);
//   }, [products]);

//   const handleAddToCart = (selectedProduct) => {
//     console.log(selectedProduct);
//     let newCart = [];
//     const exists = cart.find((product) => product.id === selectedProduct.id);
//     if (!exists) {
//       selectedProduct.quantity = 1;
//       newCart = [...cart, selectedProduct];
//     } else {
//       const rest = cart.filter((product) => product.id !== selectedProduct.id);
//       exists.quantity = exists.quantity + 1;
//       newCart = [...rest, exists];
//     }
//     setCart(newCart);
//     addToDb(selectedProduct.id);
//   };

//   return (
//     <div className="shop-container">
//       <div className="products-container">
//         {products.map((product) => (
//           <Product
//             key={product.id}
//             product={product}
//             handleAddToCart={handleAddToCart}
//           ></Product>
//         ))}
//       </div>
//       <div className="cart-container">
//         <Cart cart={cart}>
//           <Link to="/Orders">
//             <button>Review Order</button>
//           </Link>
//         </Cart>
//       </div>
//     </div>
//   );
// };

// const Product = ({ product, handleAddToCart }) => {
//   // const {product, handleAddToCart} = props;
//   const { name, img, seller, price, ratings } = product;
//   return (
//     <div className="product">
//       <img src={img} alt="" />
//       <div className="product-info">
//         <p className="product-name">{name}</p>
//         <p>Price : $ {price}</p>
//         <p>
//           <small>Manufacturer : {seller}</small>
//         </p>
//         <p>
//           <small>Ratings : {ratings} stars</small>
//         </p>
//       </div>
//       <button onClick={() => handleAddToCart(product)} className="btn-cart">
//         <p className="btn-text">Add to Cart</p>{" "}
//         <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
//       </button>
//     </div>
//   );
// };

export default App;
