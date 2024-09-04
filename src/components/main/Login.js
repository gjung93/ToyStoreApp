import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginPage from "../registrationForm/LoginPage";
import RegistrationForm from "../registrationForm/RegistrationForm";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { logout } from "../store/LoginReducer";
import "./Login.css";
// Importing all the necessary items from react, react-redux, react-bootstrap, reducer, styling

export default function Home() {
  // Accessing the authenticated, error and logged from the Redux store using useSelector hook
  const user = useSelector((state) => state.person.authenticated);
  const error = useSelector((state) => state.person.error);
  const logged = useSelector((state) => state.person.logged);
  //Using useState hook to define show for Modal box used for registration and login
  const [showReg, setShowReg] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Initializing useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  //Defining name of the person logged in to use in Welcome portion
  const name = user.map((name) => name.firstName);

  //function to handle dispatching logout
  function handleLogOut() {
    dispatch(logout(user));
  }

  return (
    <div>
      {/* using a ternary operator to display either to login/register or to logout
        if logged is true - then the welcome and logout button will show */}
      {logged ? (
        <>
          <h2 className="welcome"> Welcome back, {name}! </h2>
          {/* Button click will trigger the handleLogOut function */}
          <Button className="buttons" onClick={handleLogOut}>
            Logout
          </Button>
        </>
      ) : (
        // if logged is false - then the login/register button will show
        <>
          <div className="showLogin">
            {/* within the login portion - ternary operator for error will show. If the username not found (error is true), 
            it will trigger the prompt 'No username found. Please try again' */}
            {error ? (
              <>
                <p className="error">No username found. Please try again.</p>
              </>
            ) : (
              // If error is false - the 'Click to Login' portion will show
              <h2> Click to Login </h2>
            )}
            {/* Buttons for login and register will open modals through the setShowLogin and setShowReg
            The modals will open through LoginPage and RegistrationForm components */}
            <Button className="buttons" onClick={() => setShowLogin(true)}>
              Login
            </Button>
            <LoginPage show={showLogin} close={() => setShowLogin(false)} />
          </div>

          <div className="showRegistration">
            <Button className="buttons" onClick={() => setShowReg(true)}>
              Register
            </Button>
            <RegistrationForm show={showReg} close={() => setShowReg(false)} />
          </div>
        </>
      )}
    </div>
  );
}
