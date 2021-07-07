import React from "react";
import { useHistory } from "react-router";
import "../styles/Header.css";

const Header = ({ headerText }) => {
  const history = useHistory();
  return (
    <div className="header">
      <span className="back" onClick={() => history.goBack()}>
        {" "}
        &lt;{" "}
      </span>
      <span>{headerText}</span>
    </div>
  );
};

export default Header;
