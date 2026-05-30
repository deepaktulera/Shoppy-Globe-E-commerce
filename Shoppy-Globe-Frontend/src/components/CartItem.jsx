import React from 'react';
import { increaseQty , decreaseQty } from '../redux/slices/cartSlice';

const CartItem = (props) => {
    console.log(props);
    
    localStorage.removeItem('cart_deepak_tulera')
  return (
    <div>
      <h1>{props.data.title}</h1>
      <img src={props.data.thumbnail} alt="" />
      <button>-</button>
      <h1>{}</h1>
      <button>+</button>
    </div>
  );
}

export default CartItem;
