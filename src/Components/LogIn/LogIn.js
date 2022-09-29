import React, { useRef, useState } from "react";
import "./LogIn.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../LogIn/logInIcon/google-icon.png";
import github from "../LogIn/logInIcon/github sign in.png";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.init";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// import { useState } from "react";
const LogIn = () => {
  //   const [userInfo, setUserInfo] = useState({});
  // const [errorMessage, setErrorMessage] = useState("");

  const [signInWithEmailAndPassword, emailUser, loading, emailError] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const [user, error] = useAuthState(auth);

  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const from = location?.state?.from?.pathname || "/";

  // let errorElement;
  if (user) {
    // navigate("/home");
  }

  // if (emailError) {
  //   return (errorElement = <p>Error: {emailError.message}</p>);
  // }
  let email = emailRef.current?.value;
  let password = passwordRef.current?.value;

  const handleForm = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(email, password);

    // navigate(from, { replace: true });

    if (user) {
      // console.log(user);
      toast("Successfully signed in");
    }
    // navigate("/home");
  };
  // console.log(user);

  const showPassword = (e) => {
    let x = passwordRef.current;
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

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
          <input type="checkbox" onClick={showPassword} />
          Show Password
        </Form.Group>

        <Button
          disabled={user}
          variant="primary"
          type="submit"
          className="logInBtn"
        >
          {user ? "You are already logged In" : "LOG IN"}
        </Button>
        <br />
        {emailError ? (
          <div>
            <p className="text-danger text-weight-4">{emailError?.message}</p>{" "}
            <p>
              Forget Password?{" "}
              <button
                className="btn btn-danger"
                onClick={async () => {
                  await sendPasswordResetEmail(email);
                  alert("Sent email");
                }}
              >
                Reset Password
              </button>
            </p>
          </div>
        ) : (
          ""
        )}
        {!user ? (
          <div>
            <p className="mt-3">
              New User?
              <Link className="ms-2 text-decoration-none" to="/signUp">
                <span className="btnText">SIGN UP NOW</span>
              </Link>
            </p>
          </div>
        ) : (
          <p className="text-primary"></p>
        )}

        <br />
      </Form>

      <div className="socialLogInContainer">
        <div className="lineContainer">
          <p className="line1"></p>

          <p className="or mx-2 fontSize-23">or</p>
          <p className="line2"></p>
        </div>
        <div className="mb-4">
          <button
            className="btn btn-primary"
            onClick={() => signInWithGoogle()}
          >
            <img
              style={{ width: "20px", marginRight: "5px" }}
              src={googleIcon}
              alt=""
            />
            Continue With Google
          </button>
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => signInWithGithub()}
          >
            <img
              style={{ width: "20px", marginRight: "5px" }}
              src={github}
              alt=""
            />
            Continue With Github
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LogIn;
