import React from "react";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import LoginForm from "./Login/LoginForm";
import University from "./University/University";
import Navbar from "./Nav/Navbar";
import { BrowserRouter as BrowserRouter, Switch, Route ,Redirect} from "react-router-dom";
import RegisterForm from "./Register/RegisterForm";
import Services from "./Services/Services";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route path="/University" component={University} />
        <Route  path="/RegisterForm" component={RegisterForm} />
        <Route  path="/LoginForm" component={LoginForm} />
        <Route  path="/Dashboard" component={Dashboard} />
        <Route  path="/Navbar" component={Navbar} />
        <Route  path="/Services" component={Services} />
        <Route render={(props) => (localStorage.getItem('token') ? <Dashboard {...props} /> : <Redirect to="/LoginForm" />)}/>
      </Switch>
    </BrowserRouter>
  );
  }
export default App;
