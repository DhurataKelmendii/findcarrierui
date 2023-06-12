import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";

  function Footer() {
  
  return (
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
  );
};

export default Footer;
