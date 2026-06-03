import React from "react";
import ProductItem from "./ProductItem";

const CategoryProducts = ({ products }) => {
  return (
    // Responsive grid layout for products
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Render all category products */}
      {products.map((item) => (
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

export default CategoryProducts;
