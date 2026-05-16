import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { getProducts } from '../data/products';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        async function fetchProducts() {
            const data = await getProducts();
            setProducts(data);
        }

        fetchProducts();

    }, []);

    return (
        <div>
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