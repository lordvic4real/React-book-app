import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Books } from "../data/books";
import BookDetail from "./book-detail";
import { Link } from "react-router-dom";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 0.75rem;
  color: white;
  margin-top: 2rem;
  width: 100%;
  padding: 20px 5%;
  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    // text-align:center;
  }
  @media (min-width: 778px) and (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
    // text-align:center;
  }

  div.card {
    color: black;
    background: #fff;
    border: none;
    border-radius: 0.75rem;
    transition: all 0.4s ease;
    height: 350px;
    @media (max-width: 766px) {
      height: 220px;
    }
  }
  div.card:hover {
    color: white;
    background: linear-gradient(45deg, black, black);
    box-shadow: 1px 1px 1px 1px gray !important;
  }
  .img-container img:hover {
    background: black;
  }
  .img-container {
    width: 100%;
    display: grid;
    place-items: center;
  }
  .img-container img {
    width: 100%;
    border-radius: 0.75rem;
    border-bottom-left-radius: 0rem;
    border-bottom-right-radius: 0rem;
  }
  div.card-body {
    padding: 0 0 1rem 0;
  }
  .img-container img {
    width: 100%;
    height: 260px;
    @media (max-width: 767px) {
      height: 150px;
      object-fit: fit;
    }
  }
  h2.card-title {
    margin: 1rem 0 0.3rem 0;
    /* margin-bottom: .75rem; */
    font-size: 1rem;
    text-align: center;
    text-transform: capitalize;
    font-family: "muli";
    /* color: black; */
    font-weight: 500;
    @media (max-width: 767px) {
      display: none;
    }
  }
  .card-body span {
    display: block;
    text-align: center;
    text-transform: capitalize;
    font-size: 16px;
    @media (max-width: 767px) {
      font-size: 100%;
      margin-top: 20px;
    }
  }
`;

export default function MyBooks(props) {
  const [books, setBooks] = useState([
    {
      title: "",
      author: "",
      image: "",
    },
  ]);

  useEffect(() => {
    const BookDetail = Books.map((book) => book);
    setBooks(BookDetail);
  }, []);

  return (
    <>
      <GridContainer>
        {Books.map((book) => (
          <div className="card shadow-sm" key={book.id}>
            <div className="card-body">
              <Link to={`books/:${book.id + 1}`}>
                <div className="img-container">
                  <img src={book.image} />
                </div>
              </Link>
              <h2 className="card-title">{book.title}</h2>
              <span>{book.author}</span>
            </div>
          </div>
        ))}
      </GridContainer>
    </>
  );
}
