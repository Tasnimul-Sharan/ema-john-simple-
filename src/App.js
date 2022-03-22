import logo from './images/Logo.svg';
import './App.css';

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
  return (
    <div className='shop-container'>
       <div className='products-container'>
         <h3>this is product </h3>
        </div>
        <div className='cart-container'>
      <h3>this is cart</h3>
        </div>
    </div>
  )
}

export default App;
