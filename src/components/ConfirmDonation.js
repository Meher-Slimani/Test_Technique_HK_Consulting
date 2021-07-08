import React, { useState } from "react";
import "../styles/ConfirmDonation.css";
import Header from "./Header";
import Footer from "./Footer";

const ConfirmDonation = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { firstName, lastName, email } = values;

  const handleChange = (e) => {
    setValues({ [e.target.name]: e.target.value });
  };

  return (
    <div className="confirm__donation__container">
      <Header headerText="Ajoutez vos informations" />
      <div className="confirm__donation__info">
        <p>Qui donne aujourd'hui?</p>
        <span>Nous ne partagerons jamais ces informations avec personne.</span>
      </div>
      <div className="confirm__donation__form">
        <div className="confirm__donation__form__name">
          <div className="confirm__donation__form__first">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <input
            className="confirm__donation__input"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div className="confirm__donation__form__mail">
          <i className="fas fa-envelope"></i>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <input type="checkbox" />
      </div>
      <Footer />
    </div>
  );
};

export default ConfirmDonation;
