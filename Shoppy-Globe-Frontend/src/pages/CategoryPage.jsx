import React, { useState } from "react";
import useProducts from "../utils/useProducts";
import ProductList from "../components/ProductList";
import CategoryProducts from "../components/CategoryList";

const CategoryPage = () => {
  const { products, loading, error } = useProducts();

  const [selectedCategory, setSelectedCategory] = useState("");

  const filterCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === ""
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  if (loading) {
    return (
      <div className="flex gap-4 justify-around overflow-x-auto p-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="shadow-2xl sm:shadow-none shrink-0 rounded-4xl p-3 w-60 md:w-auto box-border animate-pulse"
          >
            <div className="w-full h-[160px] bg-gray-200 rounded-xl mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>

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
    <div className="h-auto flex flex-col items-center p-6">
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => setSelectedCategory("")}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === ""
              ? "bg-black text-white"
              : "bg-gray-200"
          }`}
        >
          All
        </button>

        {filterCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <CategoryProducts products={filteredProducts} />
    </div>
  );
};

export default CategoryPage;  