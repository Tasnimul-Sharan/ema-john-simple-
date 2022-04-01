import React from "react";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items : {quantity}</p>
      <p>Total Price : $ {total}</p>
      <p>Total Shipping :$ {shipping}</p>
      <p>Tax : $ {tax}</p>
      <h5>Grand Total: $ {grandTotal}</h5>
      <button>Clear Cart</button> <br />
      <button>Review Order</button>
    </div>
  );
};

export default Cart;
