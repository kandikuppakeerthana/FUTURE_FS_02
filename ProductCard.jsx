import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border p-4 rounded shadow text-center">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
