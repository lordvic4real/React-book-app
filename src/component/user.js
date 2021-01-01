import React, { useState, useEffect} from 'react'
import {Card,  Button, Alert} from "react-bootstrap"
import {useAuth} from '../context/authcontext'
import {Link, useHistory} from 'react-router-dom'

export default function User() { 
        const [error, setError] = useState('')
       const{ currentUser, logOut} = useAuth()
       const history = useHistory()
       
       
        async  function handleLogOut() {
            setError('')
            try{
                await logOut()
                history.push('/login')
            } catch{
                setError('fail to logout')
            }
        }



    return (
        <>
             <Card >
                
                <Card.Body >
                <h2>Welcome to books library</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email:</strong>{ currentUser && currentUser.email}
                 <Link to="/update-profile" className="btn btn-primary W-100">Update Profile</Link> 
                <div className="w-100 text-center">
                <Button onClick={handleLogOut} variant="link" className="btn-block">logout</Button>
                </div>
                </Card.Body>
                
            </Card> 
        </>
    )
}
