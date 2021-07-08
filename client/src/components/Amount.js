import React from "react";
import "../styles/Amount.css";

const Amount = ({ amount, setInput, values, setValues }) => {
  return (
    <button
      className={
        amount === "Personnalisé" ? "amount__button tiny" : "amount__button"
      }
      onClick={() =>
        // amount === "Personnalisé" ? setInput("") : setInput(amount)
        {
          if (amount === "Personnalisé") {
            setInput("");
          } else {
            setInput(amount);
            setValues({ ...values, amount });
          }
        }
      }
    >
      {amount} {amount === "Personnalisé" ? "" : <sup>&euro;</sup>}
    </button>
  );
};

export default Amount;
