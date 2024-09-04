import React from "react";
import { useFormik } from "formik";
import "./forms.css";
import { useDispatch } from "react-redux";
import { addUser } from "../store/LoginReducer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

//Using useFormik, creating a form for the registration form

export default function RegistrationForm(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.person.user);

  // setting validation for each section entry
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
      //creating limits as in the task for each entry
    } else if (values.firstName.length > 15) {
      errors.firstName = "Maximum characters 15";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Maximum characters 20";
    }

    if (!values.userName) {
      errors.userName = "Required";
    } else if (values.userName.length > 20) {
      errors.userName = "Maximum characters 20";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      //regular expression for an email
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be longer than 7 characters";
    } else if (
      //making sure that password has an uppercase, lowercase, number and character
      !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!()?]).*$/.test(
        values.password
      )
    ) {
      errors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one digit and one special character(@#$%^&+=!()?).";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Required";
      //making sure that the passwords match
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  function handleAddUser(values) {
    dispatch(
      addUser({
        firstName: values.firstName,
        lastName: values.lastName,
        userName: values.userName,
        email: values.email,
        password: values.password,
        isAuthenticated: false,
      })
    );
    console.log({ user });
  }

  const register = useFormik({
    //initial value would be blank for each
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      handleAddUser(values);
      resetForm();
    },
  });

  return (
    <div>
      <Modal className="modal" show={props.show} onHide={props.close}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Registration Form </Modal.Title>
        </Modal.Header>
        <form onSubmit={register.handleSubmit}>
          <Modal.Body>
            {/* creating a form for each section */}
            <label className="forms" htmlFor="firstName">
              First Name{" "}
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={register.handleChange}
              onBlur={register.handleBlur}
              value={register.values.firstName}
            />
            {/* logic for error entered */}
            {register.touched.firstName && register.errors.firstName ? (
              <div className="errorText">{register.errors.firstName}</div>
            ) : null}
            <br></br>

            <label className="forms" htmlFor="lastName">
              Last Name{" "}
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={register.handleChange}
              onBlur={register.handleBlur}
              value={register.values.lastName}
            />
            {register.touched.lastName && register.errors.lastName ? (
              <div className="errorText">{register.errors.lastName}</div>
            ) : null}

            <br></br>

            <label className="forms" htmlFor="userName">
              User Name{" "}
            </label>
            <input
              id="userName"
              name="userName"
              type="text"
              onChange={register.handleChange}
              onBlur={register.handleBlur}
              value={register.values.userName}
            />
            {register.touched.userName && register.errors.userName ? (
              <div className="errorText">{register.errors.userName}</div>
            ) : null}

            <br></br>
            <label className="forms" htmlFor="email">
              Email Address{" "}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={register.handleChange}
              onBlur={register.handleBlur}
              value={register.values.email}
            />
            {register.touched.email && register.errors.email ? (
              <div className="errorText">{register.errors.email}</div>
            ) : null}

            <br></br>

            <label className="forms" htmlFor="password">
              {" "}
              Password{" "}
            </label>
            <input
              id="password"
              name="password"
              type="text"
              onChange={register.handleChange}
              onBlur={register.handleBlur}
              value={register.values.password}
            />
            {register.touched.password && register.errors.password ? (
              <div className="errorText">{register.errors.password}</div>
            ) : null}

            <br></br>

            <label className="forms" htmlFor="confirmPassword">
              {" "}
              Confirm Password{" "}
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="text"
              onChange={register.handleChange}
              onBlur={register.handleBlur}
              value={register.values.confirmPassword}
            />
            {register.touched.confirmPassword &&
            register.errors.confirmPassword ? (
              <div className="errorText">{register.errors.confirmPassword}</div>
            ) : null}
          </Modal.Body>
          <Modal.Footer>
            {/* Button for submit and close. Submit will trigger the function above */}
            <Button className="submit" type="submit" onClick={props.close}>
              Submit
            </Button>
            <Button className="close" onClick={props.close}>
              Close
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}
