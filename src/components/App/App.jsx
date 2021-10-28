import React from 'react';
import axios from 'axios';
import './App.css';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Header/Header.jsx'
import SelectPizza from "../SelectPizza/SelectPizza.jsx";
import CustomerInfoForm from '../CustomerInfoForm/CustomerInfoForm';
// import Checkout from '../Checkout/Checkout.jsx';
// import Admin from '../Admin/Admin.jsx';

function App() {
  
  const dispatch = useDispatch();

  const fetchPizzas = () => {
    axios.get('/api/pizza')
      .then((response) => {
        console.log('successful GET', response.data);
        dispatch({
          type: 'SET_PIZZA',
          payload: response.data
        })
      })
      .catch((err) => {
        console.log('Error in GET', err);
      })
  } // end fetchPizzas

  useEffect(() => {
    fetchPizzas();
  }, [])

  return (

    <Router>
      <div className="App">
        <Header />

        <Route path="/">
          <SelectPizza />
        </Route>

        <Route path="/info">
          <CustomerInfoForm />
        </Route>

        {/* <Route path="/checkout">
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
