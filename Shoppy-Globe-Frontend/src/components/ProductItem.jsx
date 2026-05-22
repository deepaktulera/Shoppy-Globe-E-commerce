import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {

    return (
        <div className='shadow-2xl shrink-0 rounded-4xl p-3 w-60 md:w-auto box-border'>
            <Link to={`/product_detail/${props.id}`}>
                <div>
                    <img src={props.thumbnail} alt={props.description} />
                    <h1 className='text-center'>{props.title}</h1>
                </div>
            </Link>
        </div >
    );
}

export default ProductItem;
