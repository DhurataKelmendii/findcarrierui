import React from "react";
import UsersList from "../User/UsersList";
import Home from "../Home";
import LoginForm from "../Login/LoginForm";
import RegisterForm from "../Register/RegisterForm";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import {
  Container
} from "reactstrap";

function Dashboard() {
  const token = localStorage.getItem('token');
  const history = useHistory();
  const logOut = () => {
    localStorage.removeItem('token');
    history.push('/LoginForm');
  };

  return (
    <Router>
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
                <Link to={"/RegisterForm"} className="nav-link">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <Container className="Services"> 
      <div className="row">
        <div className="col-lg-12 Services">
            <h1 className="title">Services</h1>
            <div className="row">
           <div className="col-lg-6 Garage">Garage</div>
           <div className="col-lg-6 Reservation">Reservation</div>
           </div>
        </div>
        </div>
      </Container>
      <br/>
      <br/>
      <Container className="AboutUs">
      <div className="row">
          <h1 className="title">About Us</h1>
          <p className="content">
              React has been designed from the start for gradual adoption, and you can use as little or 
              as much React as you need. Whether you want to get a taste of React, 
              add some interactivity to a simple HTML page, or start a complex React-powered app, 
              the links in this section will help you get started.
          </p>
      </div>
      </Container>
      <br/>
      <Container className="Footer">
      <div className="row">
       <div className="col-lg-12 Footer">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-itemm">
              <p>Copyright © DhurataKelmendi</p>
            </li>
          </ul>
        </div>
      </div>
      </Container>
      

      <Switch>
        <Route exact path="/LoginForm" component={LoginForm} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/RegisterForm" component={RegisterForm} />
        <Route path="/UsersList" component={UsersList} />
      </Switch>
    </Router>


  );
}
export default Dashboard;
