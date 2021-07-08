import React, { useState } from "react";
import "../styles/Payment.css";

const Payment = ({ type }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="payment__container">
      <div className="payment__type">
        <div className="payment__radio">
          <input
            type="radio"
            name={type}
            checked={checked}
            onClick={() => setChecked(!checked)}
          />
          <label htmlFor={type}>
            {type === "creditCard"
              ? "Donate with credit card"
              : "Donate with paypal"}
          </label>
        </div>
        {type === "creditCard" ? (
          <i className="far fa-credit-card"></i>
        ) : (
          <i className="fab fa-paypal"></i>
        )}
      </div>
      <div className="payment__action">
        <div className="payment__info">
          <i className="fas fa-lock"></i>
          <span>This is a secure SSL encrypted payment.</span>
        </div>
        <div className="payment__input">
          {type === "creditCard" ? (
            <i className="fab fa-cc-mastercard"></i>
          ) : (
            <i className="fab fa-cc-paypal"></i>
          )}
          <input type="text" name="cardNumber" placeholder="Card Number" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
