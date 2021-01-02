import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {} from "react-bootstrap";
// import User from "./user";

const NavContainer = styled.div`
  min-height: 60px;
  background: linear-gradient(rgba(3, 37, 65, 0.99), rgba(3, 38, 66, 0.99999));
  color: rgba(255, 241, 207, 0.9);
  display: grid;
  grid-template-columns: 1fr 2fr;
  place-items: center;
  padding: 0 0 0 5%;
  .logo {
    font-size: 22px;
    font-family: muli;
    justify-self: start;
    border: 1px solid white;
    padding: 5px 10px;
  }

  .link a {
    font-size: 18px;
    transition: all 0.3s ease;
    color: rgba(255, 241, 207, 0.9);
    text-decoration: none;
    margin: 10px;
  }
`;

export default function Header(props) {
  return (
    <>
      <NavContainer>
        <div className="logo">
          <Link to="/"> Books</Link>
        </div>
        <nav className="link">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Services</Link>
        </nav>
      </NavContainer>
    </>
  );
}
