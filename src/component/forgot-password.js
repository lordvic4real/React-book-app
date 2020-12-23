import React, {useRef, useState} from 'react'
import {Form, Card,  Button, Alert} from "react-bootstrap"
import { useAuth } from '../context/authcontext';
import {Link} from 'react-router-dom'

export default function  ForgotPassword() {
    const emailRef = useRef();
    const {resetPassword}= useAuth()
    const [error, setError] = useState(' ')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")


    async function handleSubmit (e){
        e.preventDefault()
        try{
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('check your inbox for further instructions')
         
        } catch{
            setError('fail to reset password')
        }
        setLoading(false)
       
    }
    
    
    return (
        <>
        <Card className="shadow-lg">
            <Card.Body>
                <h2 className="text-center mb-4">Forgot Password</h2>
                   {error && <Alert variant="danger">{error}</Alert>}
                   {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"  ref={emailRef} placeholder="Enter Email"/>
                    </Form.Group>
                    <Button disabled={loading} type="submit" className="btn-block">Reset Password</Button>
                </Form>
                <div className="w-100 text-center mt-2">
                  <Link to="/login">Login</Link>
             </div>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2 text-light">
           Need an account? <Link to="/signup">Signup</Link>
        </div>
        </>
    )
}
