import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductItem = ({ id, title, thumbnail }) => {
  return (
    <div className="shadow-2xl sm:shadow-none hover:shadow-2xl hover:scale-90 hover:shadow-purple-400 transition-all duration-900 shrink-0 rounded-4xl p-3 w-60 md:w-auto box-border">
      <Link to={`/product_detail/${id}`}>
        <div>
          <img src={thumbnail} alt={title} className="brightness-90" />
          <h1 className="text-center">{title}</h1>
        </div>
      </Link>
    </div>
  );
};

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default ProductItem;
