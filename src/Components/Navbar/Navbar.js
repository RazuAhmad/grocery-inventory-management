import React from "react";
import "./Navbar.css";

import { Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import auth from "../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="NavbarContainer">
      <ul>
        <li>
          <LinkContainer to="/">
            <Nav.Link>
              {" "}
              <span style={{ fontSize: "23px", fontWeight: "900" }}>
                Grocery Store
              </span>
            </Nav.Link>
          </LinkContainer>
        </li>
      </ul>
      <ul className="othersNav">
        <li>
          <LinkContainer to="/home">
            <Nav.Link>
              <span className="navText">Home</span>{" "}
            </Nav.Link>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer to="/Shop">
            <Nav.Link>
              {" "}
              <span className="navText">Shop</span>
            </Nav.Link>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer to="/manageInventories">
            <Nav.Link>
              {" "}
              <span className="navText">All Items</span>
            </Nav.Link>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer to="/addItem">
            <Nav.Link>
              {" "}
              <span className="navText">Add Items</span>
            </Nav.Link>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer to="/logIn">
            <Nav.Link>
              {" "}
              <span className="navText">Log in</span>
            </Nav.Link>
          </LinkContainer>
        </li>
        {user && (
          <li>
            <LinkContainer to="/logIn">
              <Nav.Link>
                {" "}
                <span className="navText">
                  <button onClick={() => logout()}>Log Out</button>
                </span>
              </Nav.Link>
            </LinkContainer>
          </li>
        )}
        {/* <li>
          <NavLink href="/"> <span style={{ fontSize: "20px", fontWeight: "500" }}></span></NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
