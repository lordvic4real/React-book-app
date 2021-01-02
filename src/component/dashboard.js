import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/authcontext";
import { Link, useHistory } from "react-router-dom";
import MyBooks from "./books";
import styled from "styled-components";

const BannerContainer = styled.div`
  height: 320px;
  margin-top: 0;
  background: linear-gradient(rgba(1, 48, 77, 0.889), rgba(1, 48, 77, 0.889)),
    url(images/images13.jpg);
  background-position: center;
  background-size: cover;
  object-fit: cover;

  .bg {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 10px 5%;
    color: rgba(255, 241, 207, 0.9);
    text-align: justify;
    width: 100%;
    text-transform: capitalize;
    font-family: muli;
  }
  input {
    width: 700px;
    height: 46px;
    line-height: 46px;
    font-size: 1.1em;
    color: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 30px;
    padding: 10px 20px;
    @media (max-width: 767px) {
      max-width: 360px;
      text-align: center;
    }
  }
  form span {
    line-height: 46px;
    font-size: 1.1em;
    margin: 0 0 0 -52px;
    height: 58px;
    padding: 12px 26px;
    border: none;
    background: rgba(3, 37, 65, 0.99);
    border-radius: 30px;
    color: rgba(255, 255, 255, 1);
    border: 1px solid white;
    @media (max-width: 640px) {
      margin: 0 0 0 -32px;
      height: 58px;
      padding: 12px 22px;
    }
  }
  *:focus {
    outline: none;
  }
  .title {
    @media (max-width: 640px) {
      font-size: 19px;
    }
  }
  .sm {
    @media (max-width: 640px) {
      width: 250px;
    }
  }
  .sm {
    @media (max-width: 540px) {
      width: 230px;
    }
  }
  .sm {
    @media (max-width: 823px;) {
      width: 255px;
    }
  }
`;

export default function DashBoard(props) {
  const [error, setError] = useState("");
  const { currentUser, logOut } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    setError("");
    try {
      await logOut();
      history.push("/login");
    } catch {
      setError("fail to logout");
    }
  }

  return (
    <>
      <div
        style={{
          background: `linear-gradient(rgba(1,48,77,0.889),rgba(1,48,77,0.889)),url(images/images13.jpg) no-repeat`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="d-flex justify-content-between align-items-center px-2 text-light">
          <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong>
            {currentUser && currentUser.email}
            <Link to="/update-profile" className="btn btn-primary m-2 ">
              Update Profile
            </Link>
          </Card.Body>
          <div className="mr-3">
            <Button
              onClick={handleLogOut}
              variant="link"
              className="btn btn-outline-light"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>

      <BannerContainer>
        <div className="bg">
          <h1 className="title">Welcome to christian books store.</h1>
          <span className="p-3 my-3 desc">
            Explore our Millions of books collection, Explore now.
          </span>
          <form>
            <div className="">
              <div className="">
                <input
                  className="sm"
                  placeholder="Search for books and Author"
                />
                <span className="bt-sm">search</span>
              </div>
            </div>
          </form>
        </div>
      </BannerContainer>
      <MyBooks />
    </>
  );
}
