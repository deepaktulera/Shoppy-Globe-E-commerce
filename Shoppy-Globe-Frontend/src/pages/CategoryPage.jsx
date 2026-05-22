import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { getProducts } from '../utils/products';

const CategoryPage = () => {
    const [products, setproducts] = useState();

    useEffect(() => {
      async function fetchProducts() {
        
      }
    }, []);
  return (
    <div>
        <Header />
        <div>
            <Link to={"/category/beauty"} >Beauty</Link>
        </div>
    </div>
  );
}

export default CategoryPage;
