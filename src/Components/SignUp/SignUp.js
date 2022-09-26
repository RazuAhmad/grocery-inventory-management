import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import "./SignUp.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import googleIcon from "../LogIn/logInIcon/google-icon.png";
import github from "../LogIn/logInIcon/github sign in.png";
import auth from "../Firebase/firebase.init";
import { sendEmailVerification } from "firebase/auth";
const SignUp = () => {
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();

    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    console.log(email, password);
    if (sendEmailVerification) {
      createUserWithEmailAndPassword(email, password);
    }
    if (user) {
      console.log(user);
      toast("Successfully signed up");
    }
    console.log(error);
  };

  console.log("googleSignIn", googleUser);
  console.log("Github sign in user", githubUser);
  return (
    <>
      <ToastContainer />
      <Form className="form-container" onSubmit={handleForm}>
        <h3 className="text-primary mb-4 ">Sign up with your email address</h3>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            required
            ref={nameRef}
            type="text"
            placeholder="Enter your Name"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setAgree(!agree)}
            type="checkbox"
            className={agree ? "text-primary" : "text-danger"}
            label="Accept our all terms and conditions"
          />
        </Form.Group>

        {error && <p>{error}</p>}

        <Button
          disabled={!agree}
          variant="primary"
          type="submit"
          className="SignUpBtn"
        >
          SIGN UP
        </Button>
        <br />
        <p className="mt-3">
          Already have an Account?{" "}
          <Link className="ms-2 text-decoration-none" to="/logIn">
            <span className="btnText">SIGN IN NOW</span>
          </Link>
        </p>
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
    </>
  );
};

export default SignUp;
