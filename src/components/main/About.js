import React from "react";
import Figure from "react-bootstrap/Figure";
import toyLogo from "../Images/toyLogo.jpg";
//https://www.vecteezy.com/vector-art/4857150-toys-kids-vector-sign-the-logo-for-the-toy-store-pyramid-ducky-and-the-rainbow
import toyStore1 from "../Images/toyStore1.jpg";
import toyStore2 from "../Images/toyStore2.jpg";
// https://urbanashop.com/arcadia-toys/
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      {/* Header for this section */}
      <h1 className="header"> About The Toy Shop</h1>
      <Container>
        <br></br>
        <Row>
          <Col>
            {/* Description of the store */}
            <p>
              A small company for toys for babies and toddlers to help with
              their early development. We set up the store in 2024 to help parents the
              difficult decision making of buying toys. Not only are these toys
              for their development at each stage, it is also the cheapest on
              the market whilst being safe.
            </p>
          </Col>
        </Row>
        <Row>
          {/* Adding images of the fictional store */}
          <Figure>
            <Col>
              <Figure.Image className="storeImages" src={toyStore1} />
            </Col>
            <Col>
              <Figure.Image className="storeImages" src={toyStore2} />
            </Col>
          </Figure>
        </Row>
      </Container>
      {/* Footer for more information */}
      <footer className="findUs">
        <h4> Find us</h4>
        <p>
          42 West Street, UK <br></br>
          questions@thetoyshop.co.uk <br></br>
          01938 382921
        </p>
      </footer>
    </div>
  );
}
