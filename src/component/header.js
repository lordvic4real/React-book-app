import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const NavContainer = styled.div `

      height:60px;
     background:linear-gradient(rgba(144,220,220,0.8),rgba(220,220,220,0.8));
     color:#fafafa;
    display:grid;
    grid-template-columns: 1fr 2fr 1fr;
    place-items:center;
    .logo{
        font-size: 2rem;
    }
    .link{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .link a{
        font-size: larger;
        transition: all 0.3s ease;
    }
    .link a:hover{
        letter-spacing: 0.2rem;
    }
    .signInAndOut{
        font-size: large;
        box-shadow: 1px 2px 3px 4px #c5c2ca;
    }
    .signInAndOut >*:hover{
        letter-spacing:inherit;
        text-decoration: none;
        cursor: pointer;
    }
    .signIn,.signOut{
        border: none;
    background-color: #007bff;
    padding: 0.2rem 1rem;
    /* box-shadow: 0px 1px 3px 1px grey; */
    border-radius: 0.1rem;
    color: white;
    }
    .signOut{
        background: #28a745
    }
`

 
export default function Header() {
    return (
        <>
          <NavContainer>
             <div className="logo">Christian Books</div>
             <nav className="link">
                 
                 <Link to="/">
                     Home
                 </Link>
                 <Link to="/">
                     About
                 </Link>
                 <Link to="/">
                     Services
                 </Link>
             </nav>
             <div className="signInAndOut">
                 <Link to="/login" className="signIn">sign in</Link>
                 <Link to="/signup" className="signOut">sign up</Link>
             </div>
         </NavContainer>  
        </>
    )
}
