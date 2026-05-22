import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {

    return (
        <>
            <Link to={`/product_detail/${props.id}`}>
                <div>
                    <img src={props.thumbnail} alt={props.description} />
                    <h1>{props.title}</h1>
                </div>
            </Link>
        </>
    );
}

export default ProductItem;
