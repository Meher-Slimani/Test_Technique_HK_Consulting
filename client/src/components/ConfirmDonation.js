import React, { useState } from "react";
import "../styles/ConfirmDonation.css";
import Header from "./Header";
import Footer from "./Footer";
import Payment from "./Payment";

const ConfirmDonation = ({ handleChange, values }) => {
  const { firstName, lastName, email, comment } = values;

  return (
    <div className="confirm__donation__container">
      <Header headerText="Ajoutez vos informations" />
      <div className="confirm__donation__info">
        <p>Qui donne aujourd'hui?</p>
        <span>Nous ne partagerons jamais ces informations avec personne.</span>
      </div>
      <div className="confirm__donation__form">
        <div className="confirm__donation__form__info">
          <div className="confirm__donation__form__name">
            <div className="confirm__donation__form__first">
              <i className="fas fa-user"></i>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={handleChange}
              />
            </div>
            <input
              className="confirm__donation__input"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleChange}
            />
          </div>
          <div className="confirm__donation__form__mail">
            <i className="fas fa-envelope"></i>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="confirm__donation__form__anonym">
            <input type="checkbox" name="anonym" />
            <label htmlFor="anonym">Make this an anonymous donation.</label>
          </div>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="7"
            placeholder="Leave a comment"
            value={comment}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="confirm__donation__form__payment">
          <Payment type="creditCard" />
          <Payment type="paypal" />
        </div>
      </div>
      <button className="confirm__donation__button">Faire le Don!</button>
      <Footer />
    </div>
  );
};

export default ConfirmDonation;
