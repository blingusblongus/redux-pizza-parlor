import React from 'react';
import axios from 'axios';
import './App.css';
import SelectPizza from '../SelectPizza/SelectPizza';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

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
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <SelectPizza />
    </div>
  );
}

export default App;
