import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ConfirmDonation from "./components/ConfirmDonation";
import Donation from "./components/Donation";
import DonationAmount from "./components/DonationAmount";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Donation} />
          <Route exact path="/amount" component={DonationAmount} />
          <Route exact path="/confirm" component={ConfirmDonation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
