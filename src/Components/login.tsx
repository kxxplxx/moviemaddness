import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import supabase from "../client";

function Login() {
  const [profile, setProfile] = useState([]);
  const [session, setSession] = useOutletContext();
  const nav = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()

    let email = e.target.email.value
    let password = e.target.password.value
    console.log(email)
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    data ? (console.log(data), setSession(data.session), nav('/profile')) : error ? console.log(error) : console.log('no error or data')

  }



  return (
    <div>
      <Container>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Save email and password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
