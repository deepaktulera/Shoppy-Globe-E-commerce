import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../data/products';

const ProductDetail = () => {

    const { id } = useParams();
    
    const [product, setProduct] = useState(null);

    useEffect(() => {

        async function fetchProduct() {

            const data = await getSingleProduct(id);

            setProduct(data);
            console.log(data);
            
        }

        fetchProduct();

    }, [id]);

    if (!product) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>

            <h1>{product.title}</h1>

            <img
                src={product.thumbnail}
                alt={product.title}
                width="250"
            />

            <h2>₹ {product.price}</h2>

            <p>{product.description}</p>

            <h3>Brand : {product.brand}</h3>

            <h3>Category : {product.category}</h3>

            <h3>Rating : {product.rating}</h3>

        </div>
    );
}

export default ProductDetail;