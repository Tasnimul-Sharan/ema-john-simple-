import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveProduct }) => {
  const { name, price, img, shipping, quantity } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-details-container">
        <div className="review-items-details">
          <p className="product-name">{name}</p>
          <p>
            <span className="orange-color">price: $ {price}</span>
          </p>
          <p>
            <small>Shipping: $ {shipping}</small>
          </p>
          <p>
            <small>quantity: $ {quantity}</small>
          </p>
        </div>
        <div className="delete-container">
          <button
            className="delete-button"
            onClick={() => handleRemoveProduct(product)}
          >
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrash}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
