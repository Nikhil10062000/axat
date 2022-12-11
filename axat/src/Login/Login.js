import React from "react";
import { Form, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
const Login = ({
  user,
  setUser,
  loginV,
  setLogin,
  setAcess,
  setPass,
  userA,
  userP,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setAcess(user.username);
    setPass(user.password);
    console.log(loginV.username )
    console.log(userA )
    const authenticate = () => {
      if (loginV.username === userA && loginV.password === userP) {
        return true;
      } else {
        return false;
      }
    };

    const valid = authenticate();
    if (valid === true) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <>
    <Link to="/" >Home</Link>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          name="username"
          placeholder="Enter username"
          autoComplete='off'
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    
    </>
    
  );
};

export default Login;
