import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleProduct } from "../utils/products";
import { addItem , addToast} from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetail = () => {
  // getting product id from url
  const { id } = useParams();

  // storing single product data
  const [product, setProduct] = useState(null);

  // loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // redux and navigation hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // add current product into cart
  function handleAddItem() {
    dispatch(addItem(product));
    dispatch(addToast())
  }

  // add item and move user to cart page
  function handleBuyNow() {
    dispatch(addItem(product));
    navigate("/cart"); // Change if your checkout route is different
  }

  // fetch product details when page load
  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getSingleProduct(id);
        setProduct(data.product);
      } catch (err) {
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);
  

  // show loader untill product comes
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // show error if product not found
  if (error) {
    return <h1 className="text-center text-red-500">{error}</h1>;
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center md:overflow-y-auto">
      <div className="w-[80%] h-full flex flex-col lg:flex-row justify-evenly object-center gap-4 items-center">
        {/* product image */}
        <img
          src={product.image}
          alt={product.title}
          className="md:min-w-120 rounded-2xl"
        />
        {/* product details */}
        <div className="h-full flex flex-col justify-center p-2 gap-4">
          <h1 className="text-xl font-semibold text-center sm:text-4xl">
            {product.title}
          </h1>

          <p>
            <strong>Description:</strong> {product.description}
          </p>

          <h3>
            <strong>Category:</strong> {product.category}
          </h3>

          <h3>
            <strong>Rating:</strong> {product.rating}
          </h3>

          <h3>
            <strong>Price:</strong> ₹{product.price}
          </h3>

          {/* add and buy buttons */}
          <div className="w-full flex justify-center gap-4">
            <button
              onClick={handleAddItem}
              className="px-3 py-1 rounded-full shadow-2xl bg-gray-300 active:scale-80"
            >
              Add
            </button>

            <button
              onClick={handleBuyNow}
              className="px-3 py-1 rounded-full shadow-2xl bg-gray-300 active:scale-80"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
