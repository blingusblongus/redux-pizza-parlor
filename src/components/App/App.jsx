import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Header/Header.jsx'
// import SelectPizza from "../SelectPizza/SelectPizza.jsx";
// import CustomerInfoForm from '../CustomerInfoForm.jsx';
// import Checkout from '../Checkout/Checkout.jsx';
// import Admin from '../Admin/Admin.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* <Route path="/">
          <SelectPizza />
        </Route>

        <Route path="/info">
          <CustomerInfoForm />
        </Route>

        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/admin">
            <Admin />
        </Route> */}

        <img src="images/pizza_photo.png" />
        <p>Pizza is great.</p>
      </div>
    </Router>
  );
}

export default App;
