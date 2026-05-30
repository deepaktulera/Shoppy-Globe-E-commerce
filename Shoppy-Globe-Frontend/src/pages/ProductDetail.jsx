import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../utils/products";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
    return <h1 className="text-center text-2xl">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-center text-red-500">{error}</h1>;
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[80%] h-[80%] flex flex-col md:flex-row justify-evenly gap-4 items-center shadow-red-500 shadow-2xl overflow-y-auto rounded-bl-4xl rounded-tr-4xl animate-pulse">

        <img
          src={product.thumbnail}
          alt={product.title}
          width="500"
        />

        <div className="h-full flex flex-col justify-center p-2 gap-4">
          <h1 className="text-xl font-semibold text-center sm:text-4xl">
            {product.title}
          </h1>

          <p className="text-lg font-light">
            <strong>Description</strong> : {product.description}
          </p>

          <h3 className="text-lg font-light">
            <strong>Category</strong> : {product.category}
          </h3>

          <h3 className="text-lg font-light">
            <strong>Rating</strong> : {product.rating}
          </h3>

          <h3 className="text-lg font-light">
            <strong>Price</strong> : ₹ {product.price}
          </h3>

          <div className="flex justify-center gap-4">
            <button className="px-3 py-1 rounded-full shadow-2xl bg-gray-300">
              Add
            </button>

            <button className="px-3 py-1 rounded-full shadow-2xl bg-gray-300">
              Buy
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;