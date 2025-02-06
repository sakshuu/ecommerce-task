import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={() => alert('Checkout successful!')}>Checkout</button>
    </div>
  );
};

export default Cart;