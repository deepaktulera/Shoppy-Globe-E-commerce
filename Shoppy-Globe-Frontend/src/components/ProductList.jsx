import React from "react";
import ProductItem from "./ProductItem";
import useProducts from "../utils/useProducts";

const ProductList = () => {
  const { products, loading, error } = useProducts();

  const uniqueProducts = [];
  const categories = new Set();

  products.forEach((item) => {
    if (!categories.has(item.category)) {
      categories.add(item.category);
      uniqueProducts.push(item);
    }
  });

if (loading) {
  return (
    <div className="flex gap-4 justify-around overflow-x-auto p-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="shadow-2xl sm:shadow-none shrink-0 rounded-4xl p-3 w-60 md:w-auto box-border animate-pulse"
        >
          {/* IMAGE */}
          <div className="w-full h-[160px] bg-gray-200 rounded-xl mb-3"></div>

          {/* TITLE */}
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>

          {/* SMALL TEXT */}
          <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>

          {/* BUTTONS */}
          <div className="flex justify-center gap-4">
            <div className="w-16 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-16 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

  if (error) {
    return <h1 className="text-center text-red-500">{error}</h1>;
  }

  return (
    <div className="flex gap-4 justify-around overflow-x-auto p-2">
      {uniqueProducts.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          thumbnail={item.thumbnail}
        />
      ))}
    </div>
  );
};

export default ProductList;
