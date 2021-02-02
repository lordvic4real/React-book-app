import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "react-bootstrap";

const NavContainer = styled.div`
  min-height: 60px;
  background: linear-gradient(rgba(3, 37, 65, 0.99), rgba(3, 38, 66, 0.99999));
  color: rgba(255, 241, 207, 0.9);
  display: grid;
  grid-template-columns: 1fr 2fr;
  place-items: center;
  padding: 0 0 0 5%;
  box-shadow: 0px 10px 26px 3px rgba(51, 29, 29, 0.7);
  /* border-bottom: 3px solid grey; */
  .logo {
    font-size: 19px;
    font-family: muli;
    justify-self: start;
    border: 1px solid white;
    padding: 5px 10px;
  }
  .logo a {
    color: rgba(255, 241, 207, 0.9);
    text-decoration: none;
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
          <Link to="/search">All books</Link>
          {/* <Link to="/">Services</Link> */}
        </nav>
      </NavContainer>
    </>
  );
}
