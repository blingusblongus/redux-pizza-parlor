import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Set up Redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// Reducers
// reducer to hold/modify the contents of the cart
const cart = (state = [], action) => {   
    switch(action.type) {
        case 'ADD_PIZZA':
            return [...state, action.payload]
        case 'REMOVE_PIZZA':
            return state.filter(pizza=>pizza.name != action.payload.name)
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
}

// reducer used to set the list of all pizzas available
const pizzaList = (state = [], action) => {
    switch(action.type) {
        case 'SET_PIZZA':
            return action.payload
        default:
            return state;
    }
    
}

// reducer to add customer info to the cart and create the total order
const orders = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ORDER':
            return action.payload;
        case 'REMOVE_ORDER_ITEM':
            return state.filter(pizza => pizza.name != action.payload.name)
        default:
            return state
    }
}

// reducer to hold customer info before confirming order
const customerInfo = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_CUSTOMER':
            return action.payload
        case 'CLEAR_CUSTOMER':
            return {}
        default:
            return state
    }
}

//Create the store
const storeInstance = createStore(
    combineReducers({
        cart,
        pizzaList,
        orders,
        customerInfo
    }), applyMiddleware(
        logger
    )
);




ReactDOM.render(
    <Provider store={storeInstance} >
        <App />
    </Provider>, 
    document.getElementById('root'));
