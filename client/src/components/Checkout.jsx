import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Checkout = (props) => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails || {};
  const {method, size, qty, toppings} = orderDetails;

  const selectedToppings = toppings
  ? Object.keys(toppings).filter(topping => toppings[topping])
    : [];

  return (
    <>
      <h1>Checkout</h1>
      <p>Method: {method}</p>
      <p>Size: {size}</p>
      <p>Quantity: {qty}</p>
      <p>Selected Toppings: {selectedToppings.length > 0 
        ? selectedToppings.join(',')
      : 'No toppings selected'}</p>
      <p>Price: 12.99</p>
    <Link to='/order'><button>Start Over</button></Link>
    <button>Purchase</button>
    </>
  );
};

export default Checkout;