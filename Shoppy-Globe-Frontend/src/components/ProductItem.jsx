import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    
    return (
        <>
            <Link to={'/product_detail/${props.id}'}>
            <div>
                <h1>{props.title}</h1>
                <img src={props.thumbnail} alt={props.description} />
            </div>
            </Link>
        </>
    );
}

export default ProductItem;
