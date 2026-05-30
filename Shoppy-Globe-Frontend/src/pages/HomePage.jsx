import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Carousel from '../components/Carousel';

const HomePage = () => {
  const [image, setimage] = useState(0);

  return (
    <div className='w-full flex flex-col justify-evenly gap-5'>
      <Carousel />
      <ProductList />
    </div>
  );
}

export default HomePage;
