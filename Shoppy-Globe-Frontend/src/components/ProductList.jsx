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
    return <h1 className="text-center text-2xl">Loading...</h1>;
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
