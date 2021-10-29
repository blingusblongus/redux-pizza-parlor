import React from "react";
import axios from "axios";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../Header/Header.jsx";
import SelectPizza from "../SelectPizza/SelectPizza.jsx";
import CustomerInfoForm from '../CustomerInfoForm/CustomerInfoForm.jsx';
import Checkout from "../Checkout/Checkout.jsx";
import Admin from "../Admin/Admin";
import { useHistory } from "react-router";
// import Admin from '../Admin/Admin.jsx';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const fetchPizzas = () => {
    axios
      .get("/api/pizza")
      .then((response) => {
        console.log("successful GET", response.data);
        dispatch({
          type: "SET_PIZZA",
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("Error in GET", err);
      });
  }; // end fetchPizzas

  const fetchOrders = () =>{
    axios.get('/api/order')
          .then((response) => {
            dispatch({
              type: 'ADD_ORDER',
              payload: response.data
            })
            dispatch({
              type: 'CLEAR_CART',
            })
            dispatch({
              type: 'CLEAR_CUSTOMER',
            })
          }).catch(err => {
            console.log('Error on GET: ', err);
          })
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <SelectPizza />
        </Route>

        <Route path="/info">
          <CustomerInfoForm />
        </Route>

        <Route path="/checkout">
          <Checkout fetchOrders={fetchOrders}/>
        </Route>

        <Route exact path="/admin">
            <Admin fetchOrders={fetchOrders}/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
