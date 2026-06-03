import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseQty,
  decreaseQty,
  removeToast,
} from "../redux/slices/cartSlice";

const CartItem = ({ data }) => {
  // Redux dispatch function
  const dispatch = useDispatch();

  // Remove item from cart
  function handleRemove() {
    dispatch(removeItem(data.id));
    dispatch(removeToast());
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 p-4 shadow-lg rounded-xl border">
      {/* Product image */}
      <img
        className="min-h-40 min-w-40 object-cover rounded-lg"
        src={data.thumbnail}
        alt={data.title}
      />

      {/* Product details */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="font-semibold text-lg">{data.title}</h2>
        <p className="text-gray-500">₹ {data.price}</p>

        {/* Quantity controls */}
        <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
          <button
            onClick={() => dispatch(decreaseQty(data.id))}
            className="px-2 bg-gray-200 rounded active:scale-90"
          >
            -
          </button>

          {/* Current quantity */}
          <span>{data.quantity}</span>

          <button
            onClick={() => dispatch(increaseQty(data.id))}
            className="px-2 bg-gray-200 rounded active:scale-90"
          >
            +
          </button>
        </div>
      </div>

      {/* Price and remove section */}
      <div className="flex flex-col items-center gap-2">
        {/* Total price for this item */}
        <p className="font-bold">₹ {Math.round(data.price * data.quantity)}</p>

        {/* Remove button */}
        <button
          onClick={handleRemove}
          className="border-b border-red-400 text-red-500 text-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
