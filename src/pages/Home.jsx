import React from "react";

export default function Home({ setView }) {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="container-fluid py-5 text-center"
        style={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          color: "white"
        }}
      >
        <h1 className="display-4 fw-bold">Welcome to Caratel ✨</h1>
        <p className="lead mt-3">
          Where elegance meets craftsmanship. Discover timeless jewellery designed
          to celebrate your beauty and your moments.
        </p>

        <div className="mt-4">
          <button
            className="btn btn-warning btn-lg me-3"
            onClick={() => setView("products")}
          >
            Shop Now
          </button>

          <button
            className="btn btn-outline-light btn-lg"
            onClick={() => setView("products")}
          >
            Explore Collection
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="container mt-5 text-center">
        <h2 className="fw-bold">About Caratel</h2>
        <p className="mt-3 text-muted">
          Caratel brings you premium gold, diamond, and silver jewellery crafted
          with precision and passion. From everyday elegance to bridal masterpieces,
          every piece tells a story of beauty and confidence.
        </p>
      </div>

      {/* Features Section */}
      <div className="container mt-5">
        <h3 className="text-center fw-bold mb-4">Why Choose Caratel?</h3>

        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="card shadow p-3 h-100">
              <h4>💎 Premium Quality</h4>
              <p>Certified gold, diamond & silver jewellery you can trust.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow p-3 h-100">
              <h4>🚚 Secure Delivery</h4>
              <p>Fast, safe & insured doorstep delivery.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow p-3 h-100">
              <h4>🔒 Secure Payments</h4>
              <p>Multiple payment options with complete security.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Promise Section */}
      <div className="container-fluid mt-5 py-5 text-center bg-light">
        <h3 className="fw-bold">Our Promise</h3>
        <p className="mt-3 fst-italic">
          Beauty you can trust. Luxury you can feel. Designs you’ll love forever.
        </p>
      </div>
    </div>
  );
}
