import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleProduct } from "../utils/products";
import { addItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAddItem() {
    dispatch(addItem(product));
  }

  function handleBuyNow() {
    dispatch(addItem(product));
    navigate("/cart"); // Change if your checkout route is different
  }

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getSingleProduct(id);
        setProduct(data);
      } catch (err) {
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-center text-red-500">{error}</h1>;
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-[80%] h-full flex flex-col lg:flex-row justify-evenly gap-4 items-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="md:min-w-120 rounded-2xl"
        />

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