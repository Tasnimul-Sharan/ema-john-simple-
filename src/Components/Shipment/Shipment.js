import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Shipment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneNumberBlur = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping information</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input onBlur={handleNameBlur} type="text" name="name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="Address">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="Address"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="Confirm-password">Phone Number</label>
            <input
              onBlur={handlePhoneNumberBlur}
              type="number"
              name="number"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Add Shipping" />
        </form>
        <p>
          Already have an account? {""}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Shipment;
