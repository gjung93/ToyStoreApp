import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  addQuantity,
  removeFromCart,
  removeQuantity,
} from "../store/ProductReducer";
import "./Cart.css";

// Importing all the necessary items from react, react-redux, react-bootstrap, reducer, styling

export default function CartList() {
  // Initializing useDispatch hook to dispatch actions
  const dispatch = useDispatch();
  // Accessing the total from the Redux store using useSelector hook
  const total = useSelector((state) => state.product.total);
  // Accessing the cart from the Redux store using useSelector hook
  const cart = useSelector((state) => state.product.cart);
  //Using useState hook to define show for Modal box used for shipping help
  const [show, setShow] = useState(false);

  //Function for closing and showing modal box and setting show
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="cart">
      <h2 className="header"> Shopping Cart</h2>
      {/* First part to create the shopping cart list */}
      <table>
        <thead>
          {/* header to define the items on the list */}
          <tr>
            <th> Item </th>
            <th> Price</th>
            <th> Quantity</th>
            <th> Total </th>
            <th> Remove </th>
          </tr>
        </thead>
        {/* mapping each product that gets added to the cart */}
        {cart &&
          cart.map(function (items) {
            return (
              <tbody key={items.id}>
                <tr>
                  <td> {items.title} </td>
                  <td> £{items.price.toFixed(2)} </td>
                  <td>
                    {/* allowing product to be increased or decreased in quantity
                    dispatching removeQuantity and addQuantity */}
                    <button onClick={() => dispatch(removeQuantity(items.id))}>
                      -
                    </button>
                    {"   "}
                    {items.quantity}{" "}
                    <button onClick={() => dispatch(addQuantity(items.id))}>
                      +
                    </button>
                  </td>
                  {/* making sure the total of each item is displayed */}
                  <td>£{(items.price * items.quantity).toFixed(2)} </td>
                  <td>
                    {/* button to remove item if not required, dispatching removeFromCart  */}
                    <Button
                      className="remove"
                      onClick={() => dispatch(removeFromCart(items))}
                    >
                      Remove from cart
                    </Button>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>

      <Container className="container">
        <Row>
          <Col sm={8}>
            <h3 className="shipping-method"> Shipping Method </h3>
            {/* Defining shipping methods using form check */}
            <Form>
              <div key="shipping" className="shipping-select">
                <Form.Check
                  type="radio"
                  name="shipping"
                  id="fast"
                  label="Fast Weekday Shipping within 24 hours (£7.99 - £10.99)"
                />
                <Form.Check
                  type="radio"
                  name="shipping"
                  id="weekend"
                  label="Weekend Shipping 2-3 days (£5.99 - £7.99)"
                />
                <Form.Check
                  type="radio"
                  name="shipping"
                  id="Standard"
                  label="Standard Shipping within 5-7 business days (FREE)"
                />
              </div>
              <div className="help">
                {/* Button to show how shipping works - opening up a modal which explains each method. */}
                <Button className="button" onClick={handleShow}>
                  Shipping Help
                </Button>
                {/* Modal opens and closes using the function defined above */}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Information about shipping</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      Total Price calculated on checkout. Shipping price depends
                      on address
                    </p>
                    You have 3 options regarding shipping.
                    <ul>
                      <li>
                        {" "}
                        Fast Shipping: This will ship within 24 hours of order
                        if processed before 4pm Monday - Friday. This will only
                        apply on weekdays.{" "}
                      </li>
                      <li>
                        {" "}
                        Weekend Shipping: This will ship within 2-3 days even if
                        you order for the weekend.{" "}
                      </li>
                      <li>
                        {" "}
                        Standard Shipping: This will ship within 5-7 business
                        days. This will be free with every order.{" "}
                      </li>
                    </ul>
                  </Modal.Body>
                </Modal>
              </div>
            </Form>
          </Col>
          <Col sm={4}>
            {/* Total price of the items in cart shown */}
            <p className="total"> Total Price: £{total.toFixed(2)}</p>
            <div className="checkout">
              {/* Checkout button for checkout - not defined yet.  */}
              <Button className="checkout">Checkout</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
