import React, { useState } from "react";
import { Link } from "react-router-dom";
import Amount from "./Amount";
import "../styles/DonationAmount.css";
import Header from "./Header";
import Footer from "./Footer";

const DonationAmount = () => {
  const [input, setInput] = useState("");
  let amounts = ["10", "25", "50", "100", "250", "Personnalisé"];
  return (
    <div className="donation__amount__container">
      <Header headerText="Choix du montant" />
      <p className="donation__amount__info">Combien voudriez vous donner?</p>
      <div className="donation__amount__input__group">
        <input
          type="text"
          value={input}
          className="donation__amount__input"
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="donation__amount__currency">&euro;</div>
      </div>
      <div className="donation__amount__sums">
        {React.Children.toArray(
          amounts.map((am) => <Amount amount={am} setInput={setInput} />)
        )}
      </div>
      <Link to="/confirm">
        <button className="donation__amount__continue">
          Continue <span>&gt;</span>
        </button>
      </Link>
      <Footer />
    </div>
  );
};

export default DonationAmount;
