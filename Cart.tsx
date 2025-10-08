
import React from 'react';
import { Product } from './type';

interface Props {
  items: Product[];
}

const Cart: React.FC<Props> = ({ items }) => (
  <div>
    <h2>Cart</h2>
    {items.length === 0 ? (
      <p>No items in cart.</p>
    ) : (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    )}
  </div>
);

export default Cart;
