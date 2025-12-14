import React from "react";

export default function Cart({ cart, setCart }) {
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-2">Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.name} x {item.qty}
            </span>
            <span>${item.price * item.qty}</span>
            <button
              className="ml-2 px-2 bg-red-500 text-white rounded"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
