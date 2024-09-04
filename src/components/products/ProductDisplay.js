import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/ProductReducer";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

export default function ProductDisplay({ items, option, makeVisible }) {
  // Initializing useDispatch hook to dispatch actions
  const dispatch = useDispatch();
  // Using useState hook for selectedItems in the options
  const [selectedItem, setSelectedItem] = useState("Colour Options");

  //function to trigger dispatch and use addToCart
  function handleAdd() {
    dispatch(addToCart(items.id));
    makeVisible();
  }

  return (
    <div>
      <Col>
        {/* Displaying each product item with image, title description , and if there is options, adding to cart*/}
        <Card className="itemsCard">
          <Card.Body>
            <Card.Img variant="top" src={items.img} />
            <Card.Title>{items.title}</Card.Title>
            <Card.Text>{items.description}</Card.Text>
            <Card.Text>£{items.price.toFixed(2)}</Card.Text>
            {option && (
              <Dropdown>
                <Dropdown.Toggle variant={"outline-secondary"}>
                  {selectedItem}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {option?.map((color) => (
                    <Dropdown.Item
                      key={color.id}
                      eventKey={color.id}
                      onClick={() => setSelectedItem(color.name)}
                    >
                      {color.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            )}

            {/* On clicking button, handleAdd will trigger */}
            <Button className="buy" onClick={handleAdd}>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        <br></br>
      </Col>
    </div>
  );
}
