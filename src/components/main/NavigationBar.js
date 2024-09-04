import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavigationBar.css";

export default function NavigationBar({ show }) {
  // Accessing the total from the Redux store using useSelector hook
  const total = useSelector((state) => state.product.total);

  return (
    <div className="navigation">
      <ul>
        {/* Navigation bar with links to the following using react-router-dom*/}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart"> Cart </Link>
        </li>
        {/* Showing the total price when something is added to it */}
        <li>
          <Link to="/login"> Login </Link>
        </li>
        {show && (
          <li className="TotalPrice">Total Price: £{total.toFixed(2)} </li>
        )}
      </ul>
    </div>
  );
}
