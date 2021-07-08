import React from "react";
import { Link } from "react-router-dom";
import "../styles/Donation.css";
import Footer from "./Footer";

const Donation = () => {
  return (
    <div className="donation__container">
      <h2 className="donation__heading">Soutenez notre cause</h2>
      <div className="donation__text">
        <p>
          Aidez notre organisation en faisant un dont dès aujourd'hui! Tous les
          dons contribuent directement à faire une différence dans notre cause.
        </p>
      </div>
      <Link to="/amount">
        <button className="donation__button">
          Faire le Don! <span> &gt; </span>
        </button>
      </Link>
      <Footer />
    </div>
  );
};

export default Donation;
