import React from "react";

export default function Checkout({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-4">
      <h2>My Orders</h2>

      {cart.length === 0 ? (
        <p className="text-muted">Your cart is empty</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
              >
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>

          <h4>Total: ₹{total}</h4>
          <button className="btn btn-warning mt-2">Place Order</button>
        </>
      )}
    </div>
  );
}
