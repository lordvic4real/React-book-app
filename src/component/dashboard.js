import React, { useState} from 'react'
import {Card,  Button, Alert} from "react-bootstrap"
import {useAuth} from '../context/authcontext'
import {Link, useHistory} from 'react-router-dom'
import styled from 'styled-components'
const GridContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: 1fr;
    color: white;
    background: red;
    margin-top: 3rem;
    width: 100%;




`

export default function DashBoard() {
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
            <Card>
                <Card.Body>
                <h2>Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email:</strong>{ currentUser && currentUser.email}
                <Link to="/update-profile" className="btn btn-primary W-100">Update Profile</Link>
                </Card.Body>
                <div className="w-100 text-center">
                <Button onClick={handleLogOut} variant="link" className="btn-block">logout</Button>
                </div>
            </Card>
            <GridContainer>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </GridContainer>
        </>
    )
}
