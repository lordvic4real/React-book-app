import React, {useRef, useState} from 'react'
import {Form, Card,  Button, Alert, Container} from "react-bootstrap"
import { useAuth } from '../context/authcontext';
import {Link, useHistory} from 'react-router-dom'

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login }= useAuth()
    const [error, setError] = useState(' ')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit (e){
        e.preventDefault()
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
            
         
        } catch{
            setError('fail to sign in')
        }
        setLoading(false)
       
    }
    console.log(error)
    
    return (
        <>
         <Container className="d-flex justify-content-center">
        <Card className="shadow-lg py-2 px-3">
            <Card.Body>
                <h2 className="text-center mb-4">Sign in</h2>
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
                    <Button disabled={loading} type="submit" className="btn-block">Sign in</Button>
                </Form>
                <div className="w-100 text-center mt-2">
                <Link to="/forgot-password" className="text-center px-5 mx-5">Forgot password?</Link>
                 <div className="w-100 text-center mt-2 text-light p-2">
           <span className="text-dark pr-2">Need an account?</span> 
           <Link to="/signup">Signup</Link>
        </div>
             </div>
            </Card.Body>
        </Card>
        </Container>
        </>
    )
}
