import React, { useState } from "react";
import "../styles/ConfirmDonation.css";

const ConfirmDonation = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const { firstName, lastName, phoneNumber, email } = values;

  const handleChange = (e) => {
    setValues({ [e.target.name]: e.target.value });
  };

  return (
    <div className="confirm__donation__container">
      <div className="confirm__donation__form">
        <input
          className="confirm__donation__input"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleChange}
        />
        <input
          className="confirm__donation__input"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChange}
        />
        <input
          className="confirm__donation__input"
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handleChange}
        />
        <input
          className="confirm__donation__input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ConfirmDonation;
