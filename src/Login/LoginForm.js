import react, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./LoginForm.css";
import { Container, Col, Form, Row, FormGroup, Label, Input } from "reactstrap";

function LoginForm() {
  const [dataUser, setData] = useState({
    Email: "",
    Password: "",
  });

  const history = useHistory();
  const LoginForm = () => {
    axios
      .post("http://localhost:44366/Api/Authenticate/Login/", dataUser)
      .then((response) => {
        if (response.data) {
          alert("You're logged in!");
          localStorage.setItem('token', response.data.token);
          history.push('/');
        } else {
          alert("User does not exist!");
        }
      })
    .catch((error) => {
      alert("User does not existtttt!");
    });
  };

  const handleChange = (e) => {
    setData({ ...dataUser, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <main className="form-signin">
        <Form  className="form-signin-bg">
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <Row>
            <FormGroup as={Col}>
              <Label>Email</Label>
              <Input
                type="text"
                name="Email"
                onChange={handleChange}
                value={dataUser.Email}
                placeholder="Enter Email"
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup as={Col}>
              <Label>Password</Label>
              <Input
                type="Password"
                name="Password"
                onChange={handleChange}
                value={dataUser.Password}
                placeholder="Enter Password"
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup as={Col} className="checkbox mb-3">
              <Label>Remember me</Label>
              <Input type="checkbox" label="Remember me" />
            </FormGroup>
          </Row>

          <Col className="col">
            <button
              type="button"
              onClick={() => LoginForm()}
              className="btn btn-primary"
            >
              Sign in
            </button>
            <div className="nav justify-content-end">
              Are you new?
              <Link to={"/RegisterForm"} className="signup-btn">
                Sign Up
              </Link>
            </div>
          </Col>
        </Form>
      </main>
    </Container>
  );
}

export default LoginForm;
