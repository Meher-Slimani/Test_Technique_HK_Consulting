import React from "react";
import "../styles/Amount.css";

const Amount = ({ amount, setInput }) => {
  return (
    <button
      className={
        amount === "Personnalisé" ? "amount__button tiny" : "amount__button"
      }
      onClick={() =>
        amount === "Personnalisé" ? setInput("") : setInput(amount)
      }
    >
      {amount} {amount === "Personnalisé" ? "" : <sup>&euro;</sup>}
    </button>
  );
};

export default Amount;
