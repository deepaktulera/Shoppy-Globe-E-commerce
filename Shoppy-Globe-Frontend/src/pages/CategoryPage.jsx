import React, { useState, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import useProducts from "../utils/useProducts";
import { Link } from "react-router-dom";

const CategoryProducts = lazy(() => import("../components/CategoryList"));

const CategoryPage = () => {
  // getting products data from custom hook
  const { products, loading, error } = useProducts();

  // getting search value from redux store
  const search = useSelector((state) => state.search);

  // storing selected category
  const [selectedCategory, setSelectedCategory] = useState("");

  // creating unique category list
  const filterCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  // filtering products by category and search
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;

    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // show loader while products are coming
  if (loading) {
    return <div className="text-center text-xl mt-10">Loading Products...</div>;
  }

  // show error if api fail
  if (error) {
    return <h1 className="text-center text-red-500 text-xl">{error}</h1>;
  }

  return (
    <div className="h-auto flex flex-col items-center p-6">
      {/* category buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => setSelectedCategory("")}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "" ? "bg-black text-white" : "bg-gray-200"
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

      {/* if no product found show message */}
      {filteredProducts.length === 0 ? (
        <div className="h-screen flex flex-col items-center justify-center gap-4 text-center mt-10">
          <div>
            <h1 className="text-3xl font-bold text-red-500">
              Oops! Product Not Found
            </h1>
            <p className="text-gray-500 mt-2">
              Try searching for a different product.
            </p>
          </div>
          <Link
            to="/"
            className="py-1 px-3 w-fit bg-black text-white rounded-full hover:opacity-80"
          >
            Go to Home
          </Link>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="text-center text-xl">Loading Products...</div>
          }
        >
          {/* showing filtered products */}
          <CategoryProducts products={filteredProducts} />
        </Suspense>
      )}
    </div>
  );
};

export default CategoryPage;
