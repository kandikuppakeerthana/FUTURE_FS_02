import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import productsData from "./data/products";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Mini E-Commerce Store</h1>
      <ProductList products={productsData} addToCart={addToCart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}
