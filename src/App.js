// Importing necessary dependencies and components
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/main/NavigationBar";
import Home from "./components/main/Home";
import About from "./components/main/About";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import Login from "./components/main/Login";
import { useState } from "react";

export default function App() {
  //show and setShow used to show the total price
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <NavigationBar show={show} />
      {/* creating Route for each of the different sections */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/products"
          element={<Products show={show} setShow={setShow} />}
        />{" "}
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
