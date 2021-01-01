import React, {useRef, useState} from 'react'
import {Form, Card,  Button, Alert, Container} from "react-bootstrap"
import { useAuth } from '../context/authcontext';
import {Link, useHistory} from 'react-router-dom'

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signUp }= useAuth()
    const [error, setError] = useState(' ')
    const [loading, setLoading] = useState(false)
    const history= useHistory()

    async function handleSubmit (e){
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('password do not match')
        }

        try{
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
            history.pushState('/')
            
         
        } catch{
            setError('fail to create an account')
        }
        setLoading(false)
       
    }
    // console.log(signUp)
    
    return (
        <>
        <Container className="d-flex justify-content-center">
        <Card className="shadow-lg">
            <Card.Body>
                <h2 className="text-center mb-4">Sign up</h2>
                   {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"  ref={emailRef} placeholder="Enter Email"/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  ref={passwordRef} placeholder="Enter Password"/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"  ref={passwordConfirmRef} placeholder="Enter Email"/>
                    </Form.Group>
                    <Button disabled={loading} type="submit" className="btn-block">Sign up</Button>
                </Form>
            </Card.Body>
            <div className="w-100 text-center mt-2 text-dark p-4">
           Already have an account? <Link to="login">Sign in</Link>
          </div>
        </Card>
        
        </Container>
        </>
       
    )
}
