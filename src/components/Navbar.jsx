import React from "react";

export default function Navbar({ cartCount, setView }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">

        {/* Brand */}
        <a className="navbar-brand fw-bold" href="#" onClick={() => setView("home")}>
          💎 Caratel
        </a>

        <div className="d-flex align-items-center">

          <button
            className="btn btn-outline-light me-2"
            onClick={() => setView("home")}
          >
            Home
          </button>

          <button
            className="btn btn-outline-light me-2"
            onClick={() => setView("products")}
          >
            Products
          </button>

          <button
            className="btn btn-outline-light me-2"
            onClick={() => setView("about")}
          >
            About Us
          </button>

          <button
            className="btn btn-warning fw-bold"
            onClick={() => setView("checkout")}
          >
            🛒 Cart 
            <span className="badge bg-dark ms-2">{cartCount}</span>
          </button>

        </div>
      </div>
    </nav>
  );
}
