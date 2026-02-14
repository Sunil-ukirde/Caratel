import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import About from "./pages/About";

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("home");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar cartCount={cart.length} setView={setView} />

      <div className="container mt-4 flex-grow-1">
        {view === "home" && <Home setView={setView} />}
        {view === "products" && <Products addToCart={addToCart} />}
        {view === "checkout" && <Checkout cart={cart} />}
        {view === "about" && <About />}
      </div>

      <Footer />
    </div>
  );
}

export default App;
