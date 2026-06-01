import React, { lazy, Suspense } from "react";
import useProducts from "../utils/useProducts";

const ProductList = lazy(() => import("../components/ProductList"));
const Carousel = lazy(() => import("../components/Carousel"));

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
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-evenly gap-5">
      <Suspense fallback={<h1>Loading Carousel...</h1>}>
        <Carousel />
      </Suspense>

      <Suspense fallback={<h1>Loading Products...</h1>}>
        <ProductList />
      </Suspense>
    </div>
  );
};

export default HomePage;