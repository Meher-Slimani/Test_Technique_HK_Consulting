import React from "react";
import { Link } from "react-router-dom";
import "../styles/Donation.css";

const Donation = () => {
  return (
    <div className="donation__container">
      <p className="donation__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        nulla quaerat corporis, suscipit sint porro eos necessitatibus adipisci
        nostrum distinctio officiis possimus labore voluptates! Delectus laborum
        similique magni qui nam. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit.
      </p>
      <Link to="/amount">
        <button className="donation__button">Donate</button>
      </Link>
    </div>
  );
};

export default Donation;
