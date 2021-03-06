import React, { useState, useEffect, useCallback } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/authcontext";
import { Link, useHistory } from "react-router-dom";
import BookCard from "./book";
import styled from "styled-components";
import axios from "axios";

const BannerContainer = styled.div`
  min-height: 320px;
  margin-top: 0;
  object-fit: cover;
  background: linear-gradient(rgba(223, 77, 33, 0.9), rgba(88, 22, 99, 0.5)),
    url(/images/book2.jpg);
  background-position: center center;
  background-size: cover;

  .bg {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 5% 10px 5%;
    color: rgba(255, 241, 207, 0.9);
    text-align: justify;
    width: 100%;
    text-transform: capitalize;
    font-family: muli;
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
    @media (max-width: 823px) {
      width: 255px;
    }
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 0.75rem;
  color: white;
  margin-top: 2rem;
  width: 100%;
  padding: 20px 5%;
  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 778px) and (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }

  div.card {
    color: black;
    background: #fafafa;
    border-radius: 0.75rem;
    transition: all 0.4s ease;

    @media (max-width: 766px) {
    }
  }
  div.card:hover {
    box-shadow: 1px 1px 1px 1px gray !important;
  }
  .img-container img:hover {
    background: black;
  }
  .img-container {
    width: 100%;
    display: grid;
  }

  .img-container img {
    height: 260px;
    border-radius: 0.75rem;
    border-bottom-left-radius: 0rem;
    border-bottom-right-radius: 0rem;
    object-fit: contain;
    @media (max-width: 767px) {
      height: 150px;
      object-fit: fit;
    }
  }
  h2.card-title {
    margin: 1rem 0 0.3rem 0.7;
    font-size: 1rem;
    /* text-align: center; */
    text-transform: capitalize;
    font-family: "muli";
    font-weight: 500;
    @media (max-width: 767px) {
      display: none;
    }
  }
  .card-body {
    padding: 5px;
  }
  .card-body span {
    text-align: center;
    text-transform: capitalize;
    font-size: 16px;
    @media (max-width: 767px) {
      font-size: 100%;
      margin-top: 20px;
    }
    padding: 2px 0 2px 1px;
  }
`;

export default function DashBoard(props) {
  const [error, setError] = useState("");
  const { currentUser, logOut } = useAuth();
  const history = useHistory();
  const [allBooks, setAllBooks] = useState([]);

  async function handleLogOut() {
    setError("");
    try {
      await logOut();
      history.push("/login");
    } catch {
      setError("fail to logout");
    }
  }

  const fetchData = useCallback(async () => {
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=christian-books&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`;
      const response = await axios.get(url, {
        params: {
          language_code: "en",
        },
      });
      const bookData = response?.data;
      const books = bookData.items;
      setAllBooks(books);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <BannerContainer>
        <div>
          <div className="d-flex justify-content-between align-items-center px-2 text-light">
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email:</strong>
              {currentUser && currentUser.email}
              <Link to="/update-profile" className="btn btn-outline-light m-2 ">
                Update Profile
              </Link>
            </Card.Body>
            <div className="mr-3">
              <Button
                onClick={handleLogOut}
                variant="link"
                className="btn btn-outline-light"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
        <div className="bg">
          <h1 className="title">Welcome to christian books store.</h1>
          <span className="p-3 my-3 desc">
            Explore our Millions of books collection, Explore now.
          </span>
          <Link to="/search">
            <button className="btn btn-info">All Books</button>
          </Link>
        </div>
      </BannerContainer>
      <GridContainer>
        {allBooks.map((singleBook) => (
          <BookCard key={singleBook.id} book={singleBook} />
        ))}
      </GridContainer>
    </>
  );
}
