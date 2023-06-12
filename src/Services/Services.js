import React from "react";
import Job from "../Job/Job";
import University from "../University/University";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";

  function Services() {
  
  return (
      <Container className="Services"> 
      <div className="row">
        <div className="col-lg-12 Services">
            <h1 className="title">CHOOSE YOUR FUTURE</h1>
            <div className="row">
              <div className="col-lg-5 University">
                  <Link to={"/University"} className="link">
                    <h3>Find your UNIVERSITY</h3>
                  </Link>
              </div>
              <div className="col-lg-5 Job">
                  <Link to={"/Job"} className="link">
                  <h3>Find your JOB</h3>
                  </Link>
              </div>
            </div>
        </div>
      </div>
      </Container>
  );
};

export default Services;
