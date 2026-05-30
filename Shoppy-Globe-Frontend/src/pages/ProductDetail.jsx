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
    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-[80%] h-[80%] flex flex-col md:flex-row justify-evenly gap-4 items-center shadow-red-500 shadow-2xl overflow-y-auto rounded-bl-4xl rounded-tr-4xl p-4 animate-pulse">
      
          <div className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gray-200 rounded-xl"></div>
          <div className="flex-1 flex flex-col justify-center gap-4 w-full">

            <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto"></div>

            <div className="h-5 bg-gray-200 rounded w-full"></div>
            <div className="h-5 bg-gray-200 rounded w-11/12"></div>
            <div className="h-5 bg-gray-200 rounded w-10/12"></div>

            <div className="h-5 bg-gray-200 rounded w-1/2"></div>

            <div className="h-5 bg-gray-200 rounded w-1/3"></div>

            <div className="h-8 bg-gray-200 rounded w-1/4"></div>

            <div className="flex justify-center gap-4 mt-4">
              <div className="w-24 h-10 bg-gray-200 rounded-full"></div>
              <div className="w-24 h-10 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <h1 className="text-center text-red-500">{error}</h1>;
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[80%] h-[80%] flex flex-col lg:flex-row justify-evenly gap-4 items-center p-6">
        <img src={product.thumbnail} alt={product.title} className="md:min-w-120 rounded-2xl hover:shadow-2xl hover:shadow-emerald-300 transition-all duration-1000" />

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
