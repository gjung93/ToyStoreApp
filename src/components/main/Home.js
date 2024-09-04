import React from "react";
import frontImage from "../Images/frontPage.png";
import Image from "react-bootstrap/Image";
import "./Home.css";

export default function Home() {
  return (
    // Simple homepage with name and photo
    <div className="home">
      <h1 className="mainTitle" >The Toy Shop</h1>
      <Image className="image" src={frontImage} fluid />{" "}
    </div>
  );
}
