import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const Cart = () => {

  const collection = useSelector((state) => state.cart.items);
  console.log(collection);
  

  return (
    <div>
      {collection.map((item) =>{
        return <CartItem key={item.id} data ={item}/>
      })}
    </div>
  );
}

export default Cart;
