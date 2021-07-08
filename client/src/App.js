import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ConfirmDonation from "./components/ConfirmDonation";
import Donation from "./components/Donation";
import DonationAmount from "./components/DonationAmount";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    amount: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Donation} />
          <Route
            exact
            path="/amount"
            render={() => (
              <DonationAmount values={values} setValues={setValues} />
            )}
          />
          <Route
            exact
            path="/confirm"
            render={() => (
              <ConfirmDonation handleChange={handleChange} values={values} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
