import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card h-100 shadow-sm border-0 rounded-4">

      <img
        src={product.image}
        className="card-img-top rounded-top-4"
        alt={product.name}
        style={{ height: "220px", objectFit: "cover" }}
      />

      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{product.name}</h5>
        <p className="text-muted">₹{product.price}</p>

        <button
          className="btn btn-dark w-100 rounded-pill"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
