import React from "react";
import "../styles/Amount.css";

const Amount = ({ amount, setInput }) => {
  return (
    <button className="amount__button" onClick={() => setInput(amount)}>
      {amount}$
    </button>
  );
};

export default Amount;
