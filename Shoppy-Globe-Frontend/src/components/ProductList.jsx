import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { getProducts } from '../utils/products';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        async function fetchProducts() {

            const data = await getProducts();

            const uniqueProducts = [];

            const categories = new Set();
            data.forEach((item) => {
                if (!categories.has(item.category)) {
                    categories.add(item.category);
                    uniqueProducts.push(item);
                }
            });
            setProducts(uniqueProducts);
        }
        fetchProducts();
    }, []);

    return (
        <div className='flex gap-4 justify-around overflow-x-auto p-2'>

            {products.map((item) => (
                <ProductItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.thumbnail}
                    brand={item.brand}
                    category={item.category}
                    description={item.description}
                    rating={item.rating}
                    thumbnail={item.thumbnail}
                    warrenty={item.warrantyInformation}
                />

            ))}

        </div>
    );
}

export default ProductList;