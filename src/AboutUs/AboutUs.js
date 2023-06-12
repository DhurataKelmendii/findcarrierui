import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";

  function AboutUs() {
 
  return (
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
  );
};

export default AboutUs;
