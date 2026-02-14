import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data";

export default function Products({ addToCart }) {
  return (
    <div className="bg-light py-5">

      {/* Header Section */}
      <div className="container text-center mb-5">
        <h1 className="fw-bold">Our Jewellery Collection</h1>
        <p className="text-muted fs-5">
          Discover elegance crafted just for you 💎
        </p>
      </div>

      {/* Products Grid */}
      <div className="container">
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <ProductCard product={product} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
