import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/authcontext";
import { Link, useHistory } from "react-router-dom";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser } = useAuth();
  const [error, setError] = useState(" ");
  const [loading, setLoading] = useState(false);
  // const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    // if(passwordRef.current.value !== passwordConfirmRef.current.value){
    //     return setError('password do not match')
    // }

    // try{
    //     setError('')
    //     setLoading(true)
    //     await signUp(emailRef.current.value, passwordRef.current.value)
    //     history.pushState('/')

    // } catch{
    //     setError('fail to create an account')
    // }
    // setLoading(false)
  }
  // console.log(signUp)

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="Enter Email"
                defaultValue={currentUser && currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="leave blank to keep the same"
              />
            </Form.Group>
            <Button disabled={loading} type="submit" className="btn-block">
              update profile
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="login">Sign in</Link>
      </div>
    </>
  );
}
