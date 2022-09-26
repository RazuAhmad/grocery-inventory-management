import React, { useRef } from "react";
import "./LogIn.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.init";
// import { useState } from "react";
const LogIn = () => {
  //   const [userInfo, setUserInfo] = useState({});

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    signInWithEmailAndPassword(email, password);
  };
  console.log(user);
  return (
    <>
      <Form className="form-container" onSubmit={handleForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            ref={emailRef}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="logInBtn">
          LOG IN
        </Button>
        <br />

        <p className="mt-3">
          New User?{" "}
          <Link className="ms-2 text-decoration-none" to="/signUp">
            <span className="btnText">SIGN UP NOW</span>
          </Link>
        </p>

        <br />
      </Form>

      <div className="socialLogInContainer">
        <div className="lineContainer">
          <p className="line1"></p>

          <p className="or mx-2 fontSize-23">or</p>
          <p className="line2"></p>
        </div>
        <div className="mb-4">
          <button className="btn btn-primary">Continue With Google</button>
        </div>
        <div>
          <button className="btn btn-primary">Continue With Github</button>
        </div>
      </div>
    </>
  );
};

export default LogIn;
