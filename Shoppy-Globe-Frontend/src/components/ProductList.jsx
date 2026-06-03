import React from "react";
import ProductItem from "./ProductItem";
import useProducts from "../utils/useProducts";

const ProductList = () => {

  // Fetch products from API
  const { products, loading, error } = useProducts();

  // Store one product from each category
  const uniqueProducts = [];
  const categories = new Set();

  products.forEach((item) => {
    if (!categories.has(item.category)) {
      categories.add(item.category);
      uniqueProducts.push(item);
    }
  });

  // Loading skeleton
  if (loading) {
    return (
      <div className="flex gap-4 justify-around overflow-x-auto p-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="shadow-2xl sm:shadow-none shrink-0 rounded-4xl p-3 w-60 md:w-auto box-border animate-pulse"
          >
            {/* Product image placeholder */}
            <div className="w-full h-40 bg-gray-200 rounded-xl mb-3"></div>

            {/* Product title placeholder */}
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>

            {/* Product description placeholder */}
            <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>

            {/* Button placeholders */}
            <div className="flex justify-center gap-4">
              <div className="w-16 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-16 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Error state
  if (error) {
    return <h1 className="text-center text-red-500">{error}</h1>;
  }

  return (
    <div className="flex gap-4 justify-around overflow-x-auto p-2">

      {/* Render category products */}
      {uniqueProducts.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          thumbnail={item.thumbnail}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ProductList;