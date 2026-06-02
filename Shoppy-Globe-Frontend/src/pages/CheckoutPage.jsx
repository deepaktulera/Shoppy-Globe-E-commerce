import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  return (
    <form className='h-screen flex flex-col'>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <Link to={'/'}>Place Order</Link>
    </form>
  );
}

export default CheckoutPage;
