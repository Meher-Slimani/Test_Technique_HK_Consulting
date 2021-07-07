import React, { useState } from "react";
import { Link } from "react-router-dom";
import Amount from "./Amount";
import "../styles/DonationAmount.css";

const DonationAmount = () => {
  const [input, setInput] = useState("");
  let amounts = ["5", "10", "15", "25", "50", "75", "100", "200"];
  return (
    <div className="donation__amount__container">
      <input
        type="text"
        value={input}
        className="donation__amount__input"
        onChange={(e) => setInput(e.target.value)}
      />
      <p className="donation__amount__info">
        Select an amount from below or enter an amount directly in the input
        field to donate
      </p>
      <div className="donation__amount__sums">
        {React.Children.toArray(
          amounts.map((am) => <Amount amount={am} setInput={setInput} />)
        )}
      </div>
      <Link to="/confirm">
        <button className="donation__amount__continue">Continue</button>
      </Link>
    </div>
  );
};

export default DonationAmount;
