import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { login } from "../store/LoginReducer";
import Modal from "react-bootstrap/Modal";
import "./forms.css";

export default function LoginPage(props) {
  // Initializing useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  //Defining validate for errors
  const validate = (values) => {
    const errors = {};
    if (!values.userName) {
      errors.userName = "Required";
    }
    return errors;
  };

  //Function to handle the authentication when login button clicked. This will Initialize the login reducer.
  function handleAuthenticate(user) {
    dispatch(login({ user }));
  }

  //Using useFormik to create form
  const formik = useFormik({
    initialValues: {
      userName: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      handleAuthenticate(values.userName);
      resetForm();
    },
  });

  return (
    <div className="login">
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <form onSubmit={formik.handleSubmit}>
          <Modal.Body className="forms">
            {/* creating a form for each section */}
            <label htmlFor="userName"> Username </label>{" "}
            <input
              type="userName"
              name="userName"
              placeholder=""
              value={formik.values.userName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <br></br>
            {formik.touched.userName && formik.errors.userName ? (
              <div className="errorText"> {formik.errors.userName}</div>
            ) : null}
          </Modal.Body>
          <Modal.Footer>
            {/* Button for Login and Close */}
            <Button className="submit" type="submit" onClick={props.close}>
              Login
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
