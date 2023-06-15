import React from "react";
import UsersList from "../User/UsersList";
import Home from "../Home";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
import Search from "../Search/Search";

  function Dashboard() {
    const history = useHistory();

    const logOut = () => {
      localStorage.removeItem('token');
      history.push('/LoginForm');
    };
  
  return (
    <React.Fragment>
    <Navbar />
    <Search />
    <Services />
    <AboutUs />
    <Footer />
    </React.Fragment>
  );
};

export default Dashboard;
