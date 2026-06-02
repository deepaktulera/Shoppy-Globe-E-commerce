import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const ProductItem = ({
  id,
  title,
  category,
  price,
  thumbnail,
  description,
}) => {
  const dispatch = useDispatch();

  function handleAddItem() {
    const item = { id, title, category, thumbnail, price, description };

    dispatch(addItem(item));
  }

  return (
    <div className="shadow-2xl md:shadow-none md:hover:scale-90 md:hover:shadow-2xl md:hover:shadow-purple-400 md:transition-all md:duration-300 shrink-0 rounded-4xl p-3 w-60 md:w-auto box-border">
      <Link to={`/product_detail/${id}`}>
        <div>
          <img src={thumbnail} alt={title} className="brightness-90" />
          <h1 className="text-center">{title}</h1>
        </div>
      </Link>

      <div className="flex justify-center gap-4 mt-2">
        <button
          onClick={handleAddItem}
          className="px-3 py-2 shadow-2xl shadow-red-500 rounded-full active:scale-80"
        >
          Add
        </button>

        <button className="px-3 py-2 shadow-2xl shadow-red-500 rounded-full active:scale-80">
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
