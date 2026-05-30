import React from "react";
import ProductList from "../components/ProductList";
import Carousel from "../components/Carousel";
import useProducts from "../utils/useProducts";

const HomePage = () => {
  const { loading, error } = useProducts();

  if (loading) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-gray-600 text-lg">Amazing products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-3">
        <h1 className="text-red-500 text-2xl font-semibold">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded-full"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-evenly gap-5">
      <Carousel />
      <ProductList />
    </div>
  );
};

export default HomePage;
