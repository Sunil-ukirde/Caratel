import React from "react";

function About() {
  return (
    <div className="container py-5">

      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Caratel</h1>
        <p className="text-muted fs-5">
          Where elegance meets convenience 💎
        </p>
      </div>

      {/* Intro Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h3>Who We Are</h3>
          <p>
            Welcome to <strong>Caratel</strong>, your trusted destination for
            elegant and affordable e-jewellery. We believe jewellery is more
            than an accessory — it is an expression of style, confidence, and
            individuality.
          </p>
          <p>
            Our mission is to bring you beautifully crafted designs that blend
            modern trends with timeless elegance. Every piece in our collection
            is carefully curated to ensure quality, comfort, and durability.
          </p>
        </div>

      </div>

      {/* Mission & Vision */}
      <div className="row text-center mb-5">
        <div className="col-md-6 mb-3">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4 className="card-title">Our Mission</h4>
              <p className="card-text">
                To make online jewellery shopping simple, secure, and joyful by
                offering premium designs at fair prices with excellent customer
                service.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4 className="card-title">Our Vision</h4>
              <p className="card-text">
                To become a trusted global e-jewellery brand that inspires
                confidence, beauty, and elegance in every customer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-5">
        <h3 className="text-center mb-4">Why Choose Caratel?</h3>
        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>💎 Premium Quality</h5>
                <p>Carefully selected materials and expert craftsmanship.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>🛍 Easy Shopping</h5>
                <p>Simple, fast, and secure online shopping experience.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>💰 Affordable Luxury</h5>
                <p>Luxury designs at prices everyone can afford.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>❤️ Customer First</h5>
                <p>Your happiness and trust are our top priorities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="text-center">
        <h4>Caratel — More than Jewellery</h4>
        <p className="text-muted">
          Discover elegance, express yourself, and shine every day with Caratel.
        </p>
      </div>

    </div>
  );
}

export default About;
