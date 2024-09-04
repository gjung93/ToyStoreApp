import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./ProductList";
import "./Products.css"

export default function Products({setShow }) {

//Function to show the total price
  function makeVisible() {
    setShow(true);
  }

  return (
    <div>
      <ProductList makeVisible={makeVisible} />
    </div>
  );
}
