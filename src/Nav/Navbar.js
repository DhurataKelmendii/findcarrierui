import React from "react";
import Home from "../Home";
import LoginForm from "../Login/LoginForm";
import RegisterForm from "../Register/RegisterForm";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";

function Navbar(){
    const token = localStorage.getItem('token');
    const history = useHistory();
    
    const logOut = () => {
        localStorage.removeItem('token');
        history.push('/LoginForm');
    };

    return(
    <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <Link to={"/App"} className="linki">
              Find your Carrier
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  User
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-link">
                    <Link to={"/UsersList"} className="link">
                      Users List
                    </Link>
                  </li>
                </ul>
              </li>
              
            </ul>
            <ul className="nav justify-content-end">
              <li className="nav-item ">
                {token ? (
                  <p onClick={() => logOut()} className="nav-link">
                    Log out
                  </p>
                ) : (
                  <Link to={"/LoginForm"} className="nav-link">
                    Sign in
                  </Link>
                )}
              </li>
              <li className="nav-item ">
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Navbar;